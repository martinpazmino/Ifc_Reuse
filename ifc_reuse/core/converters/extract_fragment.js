const fs = require('fs');
const path = require('path');

async function run() {
  const [,, ifcPath, expressIdArg, globalId] = process.argv;
  if (!ifcPath || !expressIdArg || !globalId) {
    console.error('Usage: node extract_fragment.js <ifcPath> <expressID> <globalID>');
    process.exit(1);
  }

  const expressID = Number(expressIdArg);
  if (Number.isNaN(expressID)) {
    console.error('expressID must be a number');
    process.exit(1);
  }

  // Dynamically import the heavy modules only when executed
  const FRAGS = require('@thatopen/fragments');
  const WEBIFC = require('web-ifc');

  const api = new WEBIFC.IfcAPI();
  await api.Init();

  const ifcBuffer = fs.readFileSync(ifcPath);
  const modelID = api.OpenModel(ifcBuffer);

  const isolator = new FRAGS.IfcIsolator();
  const splitData = await isolator.splitIfc(api, ifcBuffer, [expressID]);

  api.CloseModel(modelID);

  const loader = new FRAGS.IfcLoader();
  await loader.setup();
  const group = await loader.load(new Uint8Array(splitData));

  const serializer = new FRAGS.Serializer();
  const fragData = serializer.export(group);

  const outDir = '/media/reusable_components';
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, `${globalId}.frag`);
  fs.writeFileSync(outPath, Buffer.from(fragData));
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
