import { copyFile, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const output = resolve(root, 'dist');

await mkdir(output, { recursive: true });
for (const page of ['index.html', 'history.html']) {
  await copyFile(resolve(root, page), resolve(output, page));
  console.log(`Prepared ${page}`);
}
