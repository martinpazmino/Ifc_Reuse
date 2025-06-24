import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';


let scene, camera, renderer, controls, currentModel = null;

function initViewer() {
    if (renderer) return;  // Prevent double initialization

    const container = document.getElementById('viewer-container');

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(3, 3, 3);
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;
    controls.target.set(0, 0, 0);
    controls.update();

    window.addEventListener('resize', () => {
        const container = document.getElementById('viewer-container');
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });

    animate();
}

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

function loadOBJModel(globalId) {
    const mtlLoader = new MTLLoader();
    mtlLoader.setPath('/media/fragments/');
    mtlLoader.load(`${globalId}.mtl`, (materials) => {
        materials.preload();

        const objLoader = new OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.setPath('/media/fragments/');
        objLoader.load(`${globalId}.obj`, (object) => {

            if (currentModel) {
                scene.remove(currentModel);
            }
            currentModel = object;

            // Normalize model position and scale
            const box = new THREE.Box3().setFromObject(object);
            const center = box.getCenter(new THREE.Vector3());
            const size = box.getSize(new THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z);
            const scale = 2 / maxDim;

            object.scale.set(scale, scale, scale);
            object.position.sub(center.multiplyScalar(scale));

            scene.add(object);

            // Reset camera & controls to center
            camera.position.set(3, 3, 3);
            controls.target.set(0, 0, 0);
            controls.update();

            console.log(`✅ Model ${globalId} loaded and displayed.`);
        },
        undefined,
        (error) => {
            console.error(`❌ Error loading OBJ for ${globalId}:`, error);
        });

    },
    undefined,
    (error) => {
        console.error(`❌ Error loading MTL for ${globalId}:`, error);
    });
}

// Initialize viewer after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initViewer();
});


document.addEventListener('click', function (e) {
    if (e.target && e.target.id === 'login-btn') {
        document.getElementById('modal-overlay').classList.remove('hidden');
        document.getElementById('login-form').classList.remove('hidden');
        document.getElementById('register-form').classList.add('hidden');
    }
    if (e.target && (e.target.id === 'close-modal' || e.target.id === 'modal-overlay')) {
        document.getElementById('modal-overlay').classList.add('hidden');
    }
    if (e.target && e.target.id === 'show-register') {
        document.getElementById('login-form').classList.add('hidden');
        document.getElementById('register-form').classList.remove('hidden');
    }
    if (e.target && e.target.id === 'show-login') {
        document.getElementById('login-form').classList.remove('hidden');
        document.getElementById('register-form').classList.add('hidden');
    }
    if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown').forEach(drop => drop.classList.remove('active'));
    }
});

function closeDetailsPanel() {
    document.getElementById('details-panel').classList.remove('show');
    document.querySelectorAll('.component-item').forEach(item => item.classList.remove('selected'));
}

async function loadComments(globalId) {
    try {
        const response = await fetch(`${commentsUrlBase}?global_id=${globalId}`);
        if (!response.ok) throw new Error('Failed to load comments');
        const comments = await response.json();
        const commentList = document.getElementById('comment-list');
        commentList.innerHTML = '';
        if (comments.length === 0) {
            commentList.classList.add('empty');
        } else {
            commentList.classList.remove('empty');
            comments.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
            comments.forEach(comment => {
                const div = document.createElement('div');
                div.className = 'comment-item';
                div.innerHTML = `
                            <p class="comment-author">${comment.author__username}</p>
                            <p class="comment-text">${comment.text}</p>
                            <p class="comment-date">${new Date(comment.created_at).toLocaleString('de-DE')}</p>
                        `;
                commentList.appendChild(div);
            });
        }
        const iconsWrapper = document.querySelector(`.icons-wrapper[data-global-id="${globalId}"]`);
        if (iconsWrapper) {
            iconsWrapper.dataset.hasComments = comments.length > 0;
            iconsWrapper.classList.toggle('has-comments', comments.length > 0);
        }
    } catch (error) {
        console.error('Error loading comments:', error);
    }
}

async function submitComment(globalId) {
    const commentInput = document.getElementById('comment-input');
    const text = commentInput.value.trim();
    const existingError = document.getElementById('comment-error');
    if (existingError) existingError.remove();

    const errorDiv = document.createElement('div');
    errorDiv.id = 'comment-error';
    errorDiv.className = 'comment-error';
    const errorText = document.createElement('span');
    errorText.className = 'comment-error-text';
    const closeButton = document.createElement('button');
    closeButton.className = 'comment-error-close';
    closeButton.innerHTML = '×';
    closeButton.onclick = () => errorDiv.remove();
    errorDiv.appendChild(errorText);
    errorDiv.appendChild(closeButton);

    if (!text) {
        errorText.textContent = 'Bitte geben Sie einen Kommentar ein.';
        commentInput.after(errorDiv);
        return;
    }
    try {
        const response = await fetch(addCommentUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value
            },
            body: JSON.stringify({global_id: globalId, text})
        });
        if (response.status === 401) {
            document.getElementById('modal-overlay').classList.remove('hidden');
            document.getElementById('login-form').classList.remove('hidden');
            document.getElementById('register-form').classList.add('hidden');
            errorText.textContent = 'Bitte loggen Sie sich ein, um zu kommentieren.';
            commentInput.after(errorDiv);
            return;
        }
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to submit comment');
        }
        commentInput.value = '';
        await loadComments(globalId);
    } catch (error) {
        console.error('Error submitting comment:', error);
        errorText.textContent = error.message || 'Kommentar konnte nicht gesendet werden.';
        commentInput.after(errorDiv);
    }
}

async function toggleFavorite(globalId) {
    const favoriteIcon = document.querySelector(`.favorite-icon[data-global-id="${globalId}"]`);
    const item = document.querySelector(`.component-item[data-global-id="${globalId}"]`);
    const existingError = document.getElementById('favorite-error');
    if (existingError) existingError.remove();

    try {
        const response = await fetch(toggleFavoriteUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value
            },
            body: JSON.stringify({global_id: globalId})
        });
        if (response.status === 401) {
            document.getElementById('modal-overlay').classList.remove('hidden');
            document.getElementById('login-form').classList.remove('hidden');
            document.getElementById('register-form').classList.add('hidden');
            const errorDiv = document.createElement('div');
            errorDiv.id = 'favorite-error';
            errorDiv.className = 'comment-error';
            errorDiv.innerHTML = `
                        <span class="comment-error-text">Bitte loggen Sie sich ein, um Favoriten zu speichern.</span>
                        <button class="comment-error-close" onclick="this.parentElement.remove()">×</button>
                    `;
            favoriteIcon.parentElement.appendChild(errorDiv);
            return;
        }
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to toggle favorite');
        }
        const data = await response.json();
        favoriteIcon.classList.toggle('favorited', data.is_favorite);
        favoriteIcon.classList.toggle('fill-current', data.is_favorite);
        favoriteIcon.classList.toggle('fill-none', !data.is_favorite);
        item.dataset.isFavorite = data.is_favorite;
    } catch (error) {
        console.error('Error toggling favorite:', error);
        const errorDiv = document.createElement('div');
        errorDiv.id = 'favorite-error';
        errorDiv.className = 'comment-error';
        errorDiv.innerHTML = `
                    <span class="comment-error-text">${error.message || 'Favorit konnte nicht gespeichert werden.'}</span>
                    <button class="comment-error-close" onclick="this.parentElement.remove()">×</button>
                `;
        favoriteIcon.parentElement.appendChild(errorDiv);
    }
}
async function checkAndShowPassport(globalId) {
    const pdfUrl = `/media/passports/${globalId}.pdf`;
    try {
        const response = await fetch(pdfUrl, { method: 'HEAD' });
        if (response.ok) {
            document.getElementById('pdf-download-link').href = pdfUrl;
            document.getElementById('pdf-download-section').style.display = 'block';
        } else {
            document.getElementById('pdf-download-section').style.display = 'none';
        }
    } catch (err) {
        console.error('Error checking PDF:', err);
        document.getElementById('pdf-download-section').style.display = 'none';
    }
}


document.addEventListener('DOMContentLoaded', () => {
document.querySelectorAll('.component-item').forEach(item => {
    item.addEventListener('click', async (e) => {
        const globalId = item.dataset.globalId;
        if (e.target.closest('.favorite-icon')) {
            const favId = e.target.closest('.favorite-icon').dataset.globalId;
            await toggleFavorite(favId);
            return;
        }

        document.querySelectorAll('.component-item').forEach(i => i.classList.remove('selected'));
        item.classList.add('selected');

        const jsonPath = `/media/reusable_components/${item.dataset.globalId}.json`;
        const name = item.dataset.name;


        try {
            const response = await fetch(jsonPath);
            if (!response.ok) {
                throw new Error(`HTTP error ${response.status}`);
            }
            const data = await response.json();

            const typeEl = document.getElementById('element-type');
            typeEl.textContent = data.type || 'N/A';
            typeEl.classList.toggle('na', !data.type);

            const dimensionsEl = document.getElementById('element-dimensions');
            const dimensionsText = (data.OverallWidth?.value && data.OverallHeight?.value)
                ? `${data.OverallWidth.value}m x ${data.OverallHeight.value}m`
                : 'N/A';
            dimensionsEl.textContent = dimensionsText;
            dimensionsEl.classList.toggle('na', dimensionsText === 'N/A');

            const materialEl = document.getElementById('element-material');
            materialEl.textContent = data.materials?.[0]?.name || 'N/A';
            materialEl.classList.toggle('na', !data.materials?.[0]?.name);

            const weightEl = document.getElementById('element-weight');
            weightEl.textContent = data.weight ? `${data.weight} kg` : 'N/A';
            weightEl.classList.toggle('na', !data.weight);

            const storeyEl = document.getElementById('element-storey');
            storeyEl.textContent = data.storey || 'N/A';
            storeyEl.classList.toggle('na', !data.storey);

            const globalIdEl = document.getElementById('element-global-id');
            globalIdEl.textContent = data.GlobalId?.value || globalId || 'N/A';
            globalIdEl.classList.toggle('na', !(data.GlobalId?.value || globalId));

            const projectEl = document.getElementById('element-project');
            projectEl.textContent = item.dataset.projectName || 'N/A';
            projectEl.classList.toggle('na', !item.dataset.projectName);

            const uploadedEl = document.getElementById('element-uploaded');
            uploadedEl.textContent = item.dataset.uploaded || 'N/A';
            uploadedEl.classList.toggle('na', !item.dataset.uploaded);

            document.getElementById('element-name').textContent = data.Name?.value || name || 'N/A';

            const otherDataContainer = document.getElementById('element-other-data');
            otherDataContainer.innerHTML = '';
            const otherFields = ['PredefinedType', 'Tag'];
            for (const field of otherFields) {
                if (data[field]) {
                    const div = document.createElement('div');
                    div.className = 'property';
                    div.innerHTML = `<strong>${field}:</strong> <span class="${data[field].value ? '' : 'na'}">${data[field].value || data[field] || 'N/A'}</span>`;
                    otherDataContainer.appendChild(div);
                }
            }

            await loadComments(globalId);
            await checkAndShowPassport(globalId);

            try {

            } catch (err) {
                console.error('Error loading OBJ/MTL files:', err);
            }



            const commentSubmit = document.getElementById('comment-submit');
            commentSubmit.onclick = () => submitComment(globalId);

            const authorResponse = await fetch(`/api/component-author/?global_id=${globalId}`);
            const profileButton = document.getElementById('author-profile-button');
            if (authorResponse.ok) {
                const authorData = await authorResponse.json();
                profileButton.href = `/accounts/profile/${authorData.username}/`;
                profileButton.textContent = `Zum Profil von ${authorData.username}`;
                profileButton.classList.remove('hidden');
            } else {
                profileButton.classList.add('hidden');
            }

            document.getElementById('details-panel').classList.add('show');

            // Use small timeout to wait until DOM updates layout
            setTimeout(() => {
                loadOBJModel(globalId);
            }, 100);
        } catch (error) {
            console.error('Error fetching component details:', error);
            const errorDiv = document.createElement('div');
            errorDiv.className = 'comment-error';
            errorDiv.style.color = '#EF4444';
            errorDiv.style.marginTop = '0.5rem';
            const errorText = document.createElement('span');
            errorText.className = 'comment-error-text';
            errorText.textContent = 'Die Details des Bauteils konnten nicht geladen werden.';
            const closeButton = document.createElement('button');
            closeButton.className = 'comment-error-close';
            closeButton.innerHTML = '×';
            closeButton.onclick = () => errorDiv.remove();
            errorDiv.appendChild(errorText);
            errorDiv.appendChild(closeButton);
            document.getElementById('element-other-data').appendChild(errorDiv);
        }
    });
});
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.component-item').forEach(async item => {
        const globalId = item.dataset.globalId;
        try {
            const response = await fetch(`${commentsUrlBase}?global_id=${globalId}`);
            if (response.ok) {
                const comments = await response.json();
                const iconsWrapper = document.querySelector(`.icons-wrapper[data-global-id="${globalId}"]`);
                if (iconsWrapper) {
                    iconsWrapper.dataset.hasComments = comments.length > 0;
                    iconsWrapper.classList.toggle('has-comments', comments.length > 0);
                }
            }
        } catch (error) {
            console.error('Error checking comments:', error);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    initViewer();

});
