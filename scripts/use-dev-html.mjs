import { copyFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
copyFileSync(resolve(root, 'index.dev.html'), resolve(root, 'index.html'));
