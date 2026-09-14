import assert from 'node:assert/strict';
import { writeFile } from 'node:fs/promises';

const version = process.argv[2];
assert.match(version ?? '', /^\d+\.\d+\.\d+$/, 'Usage: node scripts/update-sdk-examples.mjs <released-version>');
const base = `https://raw.githubusercontent.com/tembo/sdk/v${version}`;

async function download(file) {
    const response = await fetch(`${base}/${file}`, { signal: AbortSignal.timeout(30000) });
    assert.ok(response.ok, `Cannot fetch released SDK ${file}: HTTP ${response.status}`);
    return response.text();
}

const [reference, manifestText] = await Promise.all([
    download('api.md'),
    download('scalar-sdk.manifest.json'),
]);
const manifest = JSON.parse(manifestText);
const examples = new Map();
for (const match of reference.matchAll(/```ts\n([\s\S]*?)```/g)) {
    const source = match[1].trim();
    const method = source.match(/await client\.([\w.]+)\(/)?.[1];
    if (!method) continue;
    assert.ok(!examples.has(method), `Duplicate SDK example: ${method}`);
    examples.set(method, source);
}

assert.ok(manifest.operations.length > 0, 'The SDK must contain operations');
const actions = manifest.operations.map((operation) => {
    const method = `${operation.publicResource}.${operation.publicOperation}`;
    const example = examples.get(method);
    assert.ok(example, `Missing generated example: ${method}`);
    assert.ok(operation.path.startsWith('/v1/'), `Unexpected path: ${operation.path}`);
    return {
        target: `$.paths[${JSON.stringify(operation.path)}][${JSON.stringify(operation.method.toLowerCase())}]`,
        update: {
            'x-codeSamples': [{
                lang: 'typescript',
                label: 'TypeScript SDK',
                source: `import Tembo from '@tembo-io/sdk';\n\nconst client = new Tembo();\n\n${example}\n`,
            }],
        },
    };
});

const overlay = {
    overlay: '1.0.0',
    info: {
        title: `Scalar-generated examples from @tembo-io/sdk ${version}`,
        version,
    },
    actions,
};
await writeFile(new URL('../openapi.sdk.overlay.json', import.meta.url), `${JSON.stringify(overlay, null, 4)}\n`);
console.log(`Updated ${actions.length} endpoint examples from SDK ${version}.`);
