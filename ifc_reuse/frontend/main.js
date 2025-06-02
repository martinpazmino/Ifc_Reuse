import * as THREE from 'three';
import * as BUI from '@thatopen/ui';

// Global variables
let components = null;
let world = null;
let fragmentIfcLoader = null;
let fragments = null;
let propertiesManager = null;
let highlighter = null;
let outliner = null;
let model = null;
let modelGroupUUID = null;
let lastSelected = null;
let saveButton = null;

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

// Initialize the scene and core components
async function initializeScene() {
    console.log('🟢 main.js loaded');

    await waitForDOM();
    console.log('✅ DOM is ready');

    const container = document.getElementById('container');
    if (!container) {
        console.warn('❌ No container found with ID "container" — Retrying in 100ms');
        setTimeout(initializeScene, 100); // try again
        return;
    }

    console.log('✅ Container found:', container);

    try {
        // Dynamically import @thatopen/components
        const { Components, Worlds, SimpleScene, SimpleCamera } = await import('@thatopen/components');
        const { PostproductionRenderer } = await import('@thatopen/components-front');

        components = new Components();
        console.log('✅ Components instantiated:', components);

        await components.init();
        console.log('✅ Components initialized');

        const worlds = components.get(Worlds);
        console.log('✅ Worlds retrieved:', worlds);

        world = worlds.create(SimpleScene, SimpleCamera, PostproductionRenderer);
        console.log('✅ World created:', world);

        world.scene = new SimpleScene(components);
        world.renderer = new PostproductionRenderer(components, container);
        world.camera = new SimpleCamera(components);
        console.log('✅ World components set:', { scene: world.scene, renderer: world.renderer, camera: world.camera });

        world.scene.setup();
        world.renderer.postproduction.enabled = true;
        world.scene.three.background = new THREE.Color(0xeeeeee);
        world.camera.controls.setLookAt(12, 6, 8, 0, 0, 0);
        console.log('✅ Scene setup complete');
    } catch (err) {
        console.error('❌ Error initializing scene:', err);
        throw err;
    }

    try {
        const testGeometry = new THREE.BoxGeometry(1, 1, 1);
        const testMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const testCube = new THREE.Mesh(testGeometry, testMaterial);
        world.scene.three.add(testCube);
        console.log('🧪 Added test cube');
    } catch (err) {
        console.error('❌ Error adding test cube:', err);
    }

    const animate = () => {
        try {
            requestAnimationFrame(animate);
            if (world?.renderer?.three && typeof world.renderer.three.render === 'function') {
                world.renderer.three.render(world.scene.three, world.camera.three);
            }
        } catch (err) {
            console.error('❌ Animation loop error:', err);
        }
    };
    animate();
    console.log('🟢 Animation loop started');

    try {
        const { Grids } = await import('@thatopen/components');
        const grid = components.get(Grids).create(world);
        world.renderer.postproduction.customEffects.excludedMeshes.push(grid.three);
        console.log('✅ Grid added');
    } catch (err) {
        console.error('❌ Error creating grid:', err);
    }
}

// Set up the UI with @thatopen/ui
function initializeUI() {
    try {
        BUI.Manager.init();
        console.log('✅ BUI.Manager initialized');

        const panel = BUI.Component.create(() => {
            return BUI.html`
            <bim-panel active label="IFC Viewer Controls" class="options-menu">
                <bim-panel-section collapsed label="Controls">
                    <bim-button label="Load IFC" @click="${() => loadIfc()}"></bim-button>
                    <bim-button label="Export Fragments" @click="${() => exportFragments()}"></bim-button>
                    <bim-button label="Dispose Fragments" @click="${() => disposeFragments()}"></bim-button>
                </bim-panel-section>
            </bim-panel>
            `;
        });
        document.body.append(panel);
        console.log('✅ UI panel added');

        const button = BUI.Component.create(() => {
            return BUI.html`
                <bim-button class="phone-menu-toggler" icon="solar:settings-bold"
                    @click="${() => panel.classList.toggle('options-menu-visible')}">
                </bim-button>
            `;
        });
        document.body.append(button);
        console.log('✅ UI button added');
    } catch (err) {
        console.error('❌ Error initializing UI:', err);
    }
}

// Initialize IFC-related components
async function initializeIfcComponents() {
    try {
        if (!components) {
            throw new Error('Components not initialized');
        }

        const { IfcLoader, FragmentsManager, IfcPropertiesManager } = await import('@thatopen/components');
        const { Highlighter, Outliner } = await import('@thatopen/components-front');
        const WEBIFC = await import('web-ifc');

        fragmentIfcLoader = components.get(IfcLoader);
        await fragmentIfcLoader.setup();
        fragmentIfcLoader.settings.webIfc.COORDINATE_TO_ORIGIN = true;

        const skip = [WEBIFC.IFCTENDONANCHOR, WEBIFC.IFCREINFORCINGBAR, WEBIFC.IFCREINFORCINGELEMENT];
        for (const cat of skip) {
            fragmentIfcLoader.settings.excludedCategories.add(cat);
        }
        console.log('✅ IFC Loader initialized');

        fragments = components.get(FragmentsManager);
        console.log('🧪 Available methods on fragments:', Object.getOwnPropertyNames(fragments));

        propertiesManager = components.get(IfcPropertiesManager);
        console.log('✅ Properties Manager initialized');

        highlighter = components.get(Highlighter);
        highlighter.setup({ world });
        highlighter.zoomToSelection = true;
        console.log('✅ Highlighter initialized');

        outliner = components.get(Outliner);
        outliner.world = world;
        outliner.enabled = true;
        outliner.create('highlight', new THREE.MeshBasicMaterial({
            color: 0xf1c40f,
            transparent: true,
            opacity: 0.5,
        }));
        console.log('✅ Outliner initialized');
    } catch (err) {
        console.error('❌ Error initializing IFC components:', err);
        throw err;
    }
}

// Load IFC model
async function loadIfc() {
    console.log('⏳ Loading IFC...');
    try {
        const modelId = window.location.pathname.split('/').pop();
        if (!modelId) {
            console.warn('⚠️ Empty model_id from URL. Falling back to first available IFC file.');
        }
        console.log('🧪 Fetching IFC file for model_id:', modelId);

        const response = await fetch('/ifc-files/');
        if (!response.ok) throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
        const files = await response.json();
        console.log('🧪 API response:', files);

        let file = files.find(f => f.url.includes(modelId));
        if (!file && files.length > 0) {
            console.warn('⚠️ No IFC file found for model_id:', modelId, 'Using first available file.');
            file = files[0];
        }
        if (!file) throw new Error(`No IFC file found for model_id: ${modelId}`);
        console.log('🧪 Found IFC file:', file.url);

        const res = await fetch(file.url);
        if (!res.ok) throw new Error(`HTTP error ${res.status}: ${res.statusText}`);
        const data = await res.arrayBuffer();
        const buffer = new Uint8Array(data);
        console.log('🧪 IFC file fetched, buffer size:', buffer.length);

        model = await fragmentIfcLoader.load(buffer);
        if (!model) throw new Error('Failed to load IFC model');
        model.name = modelId || file.name;
        world.scene.three.add(model);
        console.log('✅ IFC model loaded:', model);

        modelGroupUUID = model.uuid;
        const group = fragments.groups.get(modelGroupUUID);
        if (!group) {
            console.warn('⚠️ No fragment group registered for model.uuid', modelGroupUUID);
        } else {
            console.log('✅ Fragment group loaded:', group, 'UUID:', modelGroupUUID);
        }

        const box = new THREE.Box3().setFromObject(model);
        console.log('🧪 Model bounding box:', box);

        world.camera.controls.fitToBox(model, true);
        console.log('✅ IFC Loaded – Group UUID:', modelGroupUUID);
        console.log('🧪 Available fragment groups after loading:', Array.from(fragments.groups.keys()));
    } catch (err) {
        console.error('❌ Error loading IFC model:', err);
        const errorDiv = document.createElement('div');
        errorDiv.style.position = 'absolute';
        errorDiv.style.top = '10px';
        errorDiv.style.left = '10px';
        errorDiv.style.color = 'red';
        errorDiv.style.background = 'white';
        errorDiv.style.padding = '10px';
        errorDiv.style.border = '1px solid red';
        errorDiv.textContent = `Error loading IFC: ${err.message}`;
        document.body.appendChild(errorDiv);
    }
}

// Export fragments
function exportFragments() {
    if (!model || !modelGroupUUID) {
        console.warn('⚠️ No model loaded to export fragments');
        return;
    }
    const group = fragments.groups.get(modelGroupUUID);
    if (!group) {
        console.warn('⚠️ No fragment group found for model UUID:', modelGroupUUID);
        return;
    }
    // Check for export method (e.g., fragments.export instead of exportFragments)
    if (typeof fragments.export === 'function') {
        const fragData = fragments.export(group);
        if (fragData) {
            const blob = new Blob([fragData]);
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${model.name}_fragments.frag`;
            a.click();
            URL.revokeObjectURL(url);
            console.log('✅ Fragments exported');
        } else {
            console.warn('⚠️ Failed to export fragments');
        }
    } else {
        console.warn('⚠️ fragments.export is not available');
    }
}

// Dispose fragments
function disposeFragments() {
    if (!model || !modelGroupUUID) {
        console.warn('⚠️ No model loaded to dispose fragments');
        return;
    }
    fragments.disposeGroup(modelGroupUUID);
    world.scene.three.remove(model);
    model = null;
    modelGroupUUID = null;
    lastSelected = null;
    if (saveButton) saveButton.style.display = 'none';
    console.log('✅ Fragments disposed');
}

// Set up selection and highlighting
function setupSelection() {
    try {
        saveButton = document.createElement('button');
        saveButton.textContent = '✅ Select as Reusable';
        saveButton.style.position = 'absolute';
        saveButton.style.top = '10px';
        saveButton.style.right = '10px';
        saveButton.style.padding = '10px';
        saveButton.style.fontSize = '14px';
        saveButton.style.display = 'none';
        saveButton.style.background = '#4CAF50';
        saveButton.style.color = 'white';
        saveButton.style.border = 'none';
        saveButton.style.borderRadius = '4px';
        saveButton.style.cursor = 'pointer';
        document.body.appendChild(saveButton);
        console.log('✅ Save button created');

        highlighter.events.select.onHighlight.add((selectionMap) => {
            console.log('🧪 Selection map:', selectionMap);
            console.log('🧪 Available fragment groups:', Array.from(fragments.groups.keys()));

            const entries = Object.entries(selectionMap);
            if (!entries.length) {
                console.warn('⚠️ Empty selection');
                lastSelected = null;
                saveButton.style.display = 'none';
                return;
            }

            const [fragmentID, expressSet] = entries[0];
            const expressIDs = Array.from(expressSet);

            if (!expressIDs.length) {
                console.warn('⚠️ No expressIDs found in fragment');
                lastSelected = null;
                saveButton.style.display = 'none';
                return;
            }

            // Validate fragments.groups and modelGroupUUID
            if (!fragments.groups || !fragments.groups.size) {
                console.error('❌ FragmentsManager groups map is empty or not initialized');
                lastSelected = null;
                saveButton.style.display = 'none';
                return;
            }

            if (!modelGroupUUID) {
                console.error('❌ modelGroupUUID is not set. Cannot process selection.');
                lastSelected = null;
                saveButton.style.display = 'none';
                return;
            }

            const group = fragments.groups.get(modelGroupUUID);
            if (!group) {
                console.error('❌ No fragment group found for model UUID:', modelGroupUUID);
                console.log('🧪 Current model:', model);
                console.log('🧪 Available groups:', Array.from(fragments.groups.keys()));
                lastSelected = null;
                saveButton.style.display = 'none';
                return;
            }

            console.log('🧪 Using fragment group for model UUID:', modelGroupUUID);

            lastSelected = {
                id: expressIDs[0],
                fragments: [{ id: modelGroupUUID }],
            };

            console.log('✅ Selection parsed:', lastSelected);
            saveButton.style.display = 'block';
        });

        highlighter.events.select.onClear.add(() => {
            outliner.clear('highlight');
            lastSelected = null;
            saveButton.style.display = 'none';
        });

        saveButton.onclick = async () => {
            console.log('🟩 Button clicked');
            if (!lastSelected) {
                console.warn('⚠️ No selection found');
                return;
            }

            const { id: expressID, fragments: fragmentList } = lastSelected;
            if (!expressID || !fragmentList?.length) {
                console.warn('⚠️ Invalid selection');
                return;
            }

            let fragmentID = fragmentList[0].id;
            let group = fragments.groups.get(fragmentID);
            if (!group) {
                console.warn('⚠️ No fragment group found for ID:', fragmentID, 'Falling back to model UUID');
                fragmentID = modelGroupUUID;
                group = fragments.groups.get(fragmentID);
                if (!group) {
                    console.warn('⚠️ No fragment group found for model UUID:', fragmentID);
                    return;
                }
            }

            try {
                let props = null;
                console.log('🧪 Retrieving properties for expressID:', expressID);
                try {
                    props = await propertiesManager.getItemProperties(model, expressID);
                    if (!props) throw new Error('No properties returned');
                } catch (err) {
                    console.warn('⚠️ Failed to retrieve properties with propertiesManager:', err);
                    props = {
                        expressID,
                        fragmentID,
                        modelUUID: modelGroupUUID,
                    };
                }
                console.log('🧠 Properties:', props);

                let fragData = null;
                if (typeof fragments.export === 'function') {
                    console.log('🧪 Exporting fragment data for group:', fragmentID);
                    fragData = fragments.export(group);
                    if (!fragData) console.warn('⚠️ Failed to export fragment data for fragmentID:', fragmentID);
                } else {
                    console.warn('⚠️ fragments.export is not available. Skipping geometry export.');
                }

                // Prepare files for upload
                const nameBase = props.GlobalId || `frag_${expressID}`;
                const formData = new FormData();
                formData.append('metadata', new Blob([JSON.stringify(props, null, 2)], { type: 'application/json' }), `${nameBase}.json`);
                if (fragData) {
                    formData.append('fragment', new Blob([fragData], { type: 'application/octet-stream' }), `${nameBase}.frag`);
                }

                // Send files to the server
                console.log('🕒 Sending fetch request to /upload-fragment/');
                const response = await fetch('/upload-fragment/', {
                    method: 'POST',
                    body: formData,
                });

                console.log('📡 Response status:', response.status);
                if (!response.ok) {
                    const text = await response.text();
                    console.error('❌ Raw response:', text);
                    throw new Error(`Server returned status ${response.status}: ${text}`);
                }

                const result = await response.json();
                if (response.ok && result.status === 'ok') {
                    console.log('✅ Files uploaded:', result);
                    alert('✅ Component saved to server!');
                    saveButton.style.display = 'none';
                } else {
                    throw new Error(result.message || 'Failed to upload files');
                }
            } catch (err) {
                console.error('❌ Save error:', err);
                alert('❌ Failed to save component: ' + err.message);
            }
        };

        console.log('✅ Selection setup complete');
    } catch (err) {
        console.error('❌ Error setting up selection:', err);
    }
}

// Main initialization function
async function main() {
    try {
        console.log('🚀 Starting application initialization...');

        await initializeScene();
        console.log('✅ Scene initialization complete');

        initializeUI();
        console.log('✅ UI initialization complete');

        await initializeIfcComponents();
        console.log('✅ IFC components initialization complete');

        setupSelection();
        console.log('✅ Selection setup complete');

        await loadIfc();
        console.log('✅ IFC loading complete');

        console.log('🎉 Application fully initialized!');
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
        errorDiv.style.zIndex = '10000';
        errorDiv.innerHTML = `
            <h3>Initialization Error</h3>
            <p>${err.message}</p>
            <button onclick="this.parentElement.remove()" style="margin-top: 10px; padding: 5px 10px;">Close</button>
        `;
        document.body.appendChild(errorDiv);
    }
}

// Start the application when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', main);
} else {
    main();
}