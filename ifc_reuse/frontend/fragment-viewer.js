import * as THREE from 'three';
import * as WEBIFC from 'web-ifc';
import Stats from 'stats.js';
import * as OBC from '@thatopen/components';
import * as BUI from '@thatopen/ui';

BUI.Manager.init();

const container = document.getElementById("three-container");

const components = new OBC.Components();
const worlds = components.get(OBC.Worlds);
const world = worlds.create();

world.scene = new OBC.SimpleScene(components);
world.renderer = new OBC.SimpleRenderer(components, container);
world.camera = new OBC.SimpleCamera(components);

components.init();

world.scene.setup();
world.camera.controls.setLookAt(12, 6, 8, 0, 0, -10);

const fragmentIfcLoader = components.get(OBC.IfcLoader);
await fragmentIfcLoader.setup();  // Loads WASM via unpkg

// Optional: exclude categories to speed up
const excludedCats = [
  WEBIFC.IFCTENDONANCHOR,
  WEBIFC.IFCREINFORCINGBAR,
  WEBIFC.IFCREINFORCINGELEMENT,
];
excludedCats.forEach(cat => fragmentIfcLoader.settings.excludedCategories.add(cat));

// Optional: center model
fragmentIfcLoader.settings.webIfc.COORDINATE_TO_ORIGIN = true;

const fragments = components.get(OBC.FragmentsManager);

async function loadIfc(url) {
  const file = await fetch(url);
  const data = await file.arrayBuffer();
  const buffer = new Uint8Array(data);
  const model = await fragmentIfcLoader.load(buffer);
  model.name = "ifc-model";
  world.scene.three.add(model);
}

fragments.onFragmentsLoaded.add(model => {
  console.log("Fragments loaded:", model);
});

// UI buttons
const panel = BUI.Component.create(() => BUI.html`
<bim-panel active label="IFC Tools" class="options-menu">
  <bim-panel-section label="Controls" collapsed>
    <bim-button label="Load IFC" @click="${() => loadIfc('/media/ifc_files/latest.ifc')}"></bim-button>
    <bim-button label="Export Fragments" @click="${exportFragments}"></bim-button>
    <bim-button label="Dispose Fragments" @click="${disposeFragments}"></bim-button>
  </bim-panel-section>
</bim-panel>
`);
document.body.append(panel);

const phoneBtn = BUI.Component.create(() => BUI.html`
<bim-button class="phone-menu-toggler" icon="solar:settings-bold"
  @click="${() => {
    panel.classList.toggle("options-menu-visible");
  }}">
</bim-button>
`);
document.body.append(phoneBtn);

// Export logic
function exportFragments() {
  const group = Array.from(fragments.groups.values())[0];
  const data = fragments.export(group);
  download(new File([new Blob([data])], "model.frag"));

  const props = group.getLocalProperties();
  if (props) {
    download(new File([JSON.stringify(props)], "model.json"));
  }
}

function disposeFragments() {
  fragments.dispose();
}

function download(file) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(file);
  a.download = file.name;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

// Performance monitor (optional)
const stats = new Stats();
stats.showPanel(0);
document.body.append(stats.dom);
world.renderer.onBeforeUpdate.add(() => stats.begin());
world.renderer.onAfterUpdate.add(() => stats.end());
