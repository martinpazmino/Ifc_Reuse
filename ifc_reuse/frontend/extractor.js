// Utility for extracting IFC geometry of a single element
// using web-ifc-viewer. This runs in parallel to the main
// viewer which uses ThatOpen IfcLoader.
import { IfcViewerAPI } from 'web-ifc-viewer';
import { FragmentsManager } from '@thatopen/fragments';

// Export fragment data (binary) for a specific express ID
export async function extractExpressID(url, expressID) {
    // Hidden container so viewer initialisation does not touch main canvas
    const hidden = document.createElement('div');
    hidden.style.display = 'none';
    document.body.appendChild(hidden);

    const viewer = new IfcViewerAPI({ container: hidden });
    await viewer.IFC.setWasmPath('/static/');

    const model = await viewer.IFC.loadIfcUrl(url);
    const subset = viewer.IFC.loader.ifcManager.createSubset({
        modelID: model.modelID,
        ids: [expressID],
        removePrevious: true,
    });

    const fragments = new FragmentsManager();
    const group = fragments.newFragmentsGroup();
    fragments.addMeshToGroup(subset, group);

    const data = fragments.exportFragments(group);

    viewer.IFC.loader.ifcManager.removeSubset(model.modelID, subset.material, subset.geometry);
    viewer.dispose();
    hidden.remove();
    return data;
}
