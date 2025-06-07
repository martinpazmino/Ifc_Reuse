// catalog.js

import * as THREE from 'https://unpkg.com/three@0.152.2/build/three.module.js';


// Global variables
let components = null;
let world = null;
let fragments = null;
let model = null;

// Wait for DOM to be ready
function waitForDOM() {
    return new Promise((resolve) => {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', resolve);
        } else {
            resolve();
        }
    });
}

// Initialize the scene
async function initializeScene() {
    console.log('🟢 catalog.js loaded');

    await waitForDOM();
    console.log('✅ DOM is ready');

    const container = document.getElementById('container');
    if (!container) {
        console.error('❌ No container found with ID "container"');
        return;
    }

    console.log('✅ Container found:', container);

    try {
        // Use .mjs files for proper ES6 module loading and update paths
        const thatOpenComponents = await import('./libs/index.mjs');
        const thatOpenFront = await import('./libs/thatopen-components-front.js');


        // Assuming the default export is the one you need, or access named exports:
        // e.g. if the libs export their contents as default:
        // const { Components, Worlds, SimpleScene, SimpleCamera, Grids, FragmentsManager } = thatOpenComponentsModule.default;
        // const { PostproductionRenderer } = thatOpenFrontModule.default;
        // OR if they have named exports:
        const { Components, Worlds, SimpleScene, SimpleCamera, Grids, FragmentsManager } = thatOpenComponentsModule;
        const { PostproductionRenderer } = thatOpenFrontModule;


        components = new Components();
        await components.init();

        const worlds = components.get(Worlds);
        world = worlds.create(SimpleScene, SimpleCamera, PostproductionRenderer);

        world.scene = new SimpleScene(components);
        world.renderer = new PostproductionRenderer(components, container);
        world.camera = new SimpleCamera(components);

        world.scene.setup();
        world.renderer.postproduction.enabled = true;
        world.scene.three.background = new THREE.Color(0xeeeeee);
        world.camera.controls.setLookAt(12, 6, 8, 0, 0, 0);
        console.log('✅ Scene setup complete');

        // Initialize fragments manager
        fragments = components.get(FragmentsManager);
        console.log('✅ FragmentsManager initialized');

        const animate = () => {
            requestAnimationFrame(animate);
            if (world?.renderer?.three) {
                world.renderer.three.render(world.scene.three, world.camera.three);
            }
        };
        animate();
        console.log('🟢 Animation loop started');

        const grid = components.get(Grids).create(world);
        world.renderer.postproduction.customEffects.excludedMeshes.push(grid.three);
        console.log('✅ Grid added');
    } catch (err) {
        console.error('❌ Error initializing scene:', err);
    }
}

// ... (rest of your catalog.js, no changes needed for loadFragment, populateFragmentSelector, main)
// Make sure your loadFragment and populateFragmentSelector functions are correctly defined as in your original file

// Load fragment file
async function loadFragment(fragUrl) {
    try {
        console.log('⏳ Loading fragment:', fragUrl);
        const response = await fetch(fragUrl);
        if (!response.ok) throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
        const data = await response.arrayBuffer();
        const buffer = new Uint8Array(data);
        console.log('🧪 Fragment file fetched, buffer size:', buffer.length);

        // Clear previous model
        if (model) {
            world.scene.three.remove(model);
            if (fragments && fragments.disposeGroup) { // Ensure fragments and disposeGroup exist
                // Check if model has a UUID; some groups might not if not properly initialized by the lib
                if (model.uuid) {
                     fragments.disposeGroup(model.uuid);
                } else {
                    // Fallback or different disposal if no UUID, or investigate why model has no UUID
                    // For a simple THREE.Group, you might need to traverse and dispose geometries/materials manually
                    model.traverse(object => {
                        if (object.geometry) object.geometry.dispose();
                        if (object.material) {
                            if (Array.isArray(object.material)) {
                                object.material.forEach(mat => mat.dispose());
                            } else {
                                object.material.dispose();
                            }
                        }
                    });
                }
            }
            model = null;
        }

        // Load the fragment using FragmentsManager
        if (fragments && fragments.load) {
            model = await fragments.load(buffer);
            world.scene.three.add(model);

            // Fit camera to the loaded model
            const box = new THREE.Box3().setFromObject(model);
            if (!box.isEmpty()) {
                world.camera.controls.fitToBox(box, true);
            }

            console.log('✅ Fragment loaded and rendered:', model);
        } else {
            console.warn('⚠️ FragmentsManager not available, creating placeholder');
            // Create placeholder mesh
            model = new THREE.Group(); // Use THREE.Group
            const geometry = new THREE.BoxGeometry(2, 2, 2);
            const material = new THREE.MeshBasicMaterial({
                color: 0x0066cc,
                wireframe: true
            });
            const mesh = new THREE.Mesh(geometry, material);
            model.add(mesh);
            world.scene.three.add(model);

            const box = new THREE.Box3().setFromObject(model); // Ensure model is valid for Box3
            if (!box.isEmpty()) { // Check if box is not empty before fitting
                 world.camera.controls.fitToBox(box, true);
            }
            console.log('✅ Placeholder fragment rendered');
        }
    } catch (err) {
        console.error('❌ Error loading fragment:', err);
        alert('❌ Failed to load fragment: ' + err.message);
    }
}

// Populate fragment selector
async function populateFragmentSelector() {
    try {
        const response = await fetch('/fragment-files/'); // This path is defined in your urls.py
        if (!response.ok) throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
        const files = await response.json();
        console.log('🧪 Fragment files:', files);

        const select = document.getElementById('fragment-select');
        select.innerHTML = '<option value="">Wähle ein Fragment</option>'; // "Wähle ein Fragment"
        files.forEach(file => {
            const option = document.createElement('option');
            option.value = file.url;
            option.textContent = file.name;
            select.appendChild(option);
        });

        select.addEventListener('change', (event) => {
            const url = event.target.value;
            if (url) loadFragment(url);
        });
    } catch (err) {
        console.error('❌ Error fetching fragment files:', err);
    }
}

// Main initialization
async function main() {
    try {
        await initializeScene();
        await populateFragmentSelector();
        console.log('🎉 Catalog initialized');
    } catch (err) {
        console.error('❌ Initialization error:', err);
        const errorDiv = document.createElement('div');
        errorDiv.style.position = 'fixed';
        errorDiv.style.top = '50%';
        errorDiv.style.left = '50%';
        errorDiv.style.transform = 'translate(-50%, -50%)';
        errorDiv.style.background = '#ffebee';
        errorDiv.style.color = '#c62828';
        errorDiv.style.padding = '20px';
        errorDiv.style.border = '2px solid #c62828';
        errorDiv.style.borderRadius = '8px';
        errorDiv.innerHTML = `
            <h3>Initialization Error</h3>
            <p>${err.message}</p>
            <button onclick="this.parentElement.remove()">Close</button>
        `;
        document.body.appendChild(errorDiv);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', main);
} else {
    main();
}