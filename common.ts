import fs from 'fs';
import path from 'path';

export function readFile(fileName: string): string {
  return fs.readFileSync(path.join(__dirname, fileName), 'utf-8');
}


