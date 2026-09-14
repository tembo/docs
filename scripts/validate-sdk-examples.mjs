import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { resolve } from 'node:path';

const directory = resolve(process.argv[2] ?? '.');
const require = createRequire(resolve(directory, 'package.json'));
const ts = require('typescript');
const installed = require('@tembo-io/sdk/package.json');
const overlay = JSON.parse(readFileSync(new URL('../openapi.sdk.overlay.json', import.meta.url), 'utf8'));
assert.equal(installed.version, overlay.info.version, 'Examples must match the installed npm release');
assert.ok(overlay.actions.length > 0, 'Expected SDK examples');
assert.equal(new Set(overlay.actions.map((action) => action.target)).size, overlay.actions.length, 'Duplicate endpoints');
const sources = new Map(overlay.actions.map((action, index) => {
    const samples = action.update['x-codeSamples'];
    assert.equal(samples.length, 1);
    assert.equal(samples[0].lang, 'typescript');
    return [resolve(directory, `example-${index}.mts`), samples[0].source];
}));
const options = {
    noEmit: true,
    strict: true,
    target: ts.ScriptTarget.ES2023,
    module: ts.ModuleKind.NodeNext,
    moduleResolution: ts.ModuleResolutionKind.NodeNext,
};
const host = ts.createCompilerHost(options);
const original = host.getSourceFile.bind(host);
host.getSourceFile = (file, version, onError, create) => sources.has(file)
    ? ts.createSourceFile(file, sources.get(file), version, true)
    : original(file, version, onError, create);
const program = ts.createProgram([...sources.keys()], options, host);
const diagnostics = ts.getPreEmitDiagnostics(program);
if (diagnostics.length) {
    console.error(ts.formatDiagnosticsWithColorAndContext(diagnostics, {
        getCurrentDirectory: () => directory,
        getCanonicalFileName: (file) => file,
        getNewLine: () => '\n',
    }));
}
assert.equal(diagnostics.length, 0, 'SDK examples must typecheck');
console.log(`Validated ${sources.size} examples against SDK ${installed.version}. No API calls made.`);
