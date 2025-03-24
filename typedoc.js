import { join } from 'node:path';
import { dirname, join as joinPosix } from 'node:path/posix';
import { fileURLToPath } from 'node:url';

// this one is broken on Windows
const indexTsFile = join(import.meta.dirname, 'src', 'index.ts')

// // this one works on Windows and Unix
// const indexTsFile = joinPosix(dirname(fileURLToPath(import.meta.url)), 'src', 'index.ts');

console.log({indexTsFile});

export default {
    entryPoints: [
        indexTsFile
    ],
    skipErrorChecking: false,
}