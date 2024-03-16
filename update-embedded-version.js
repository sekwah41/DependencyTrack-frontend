import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
const filePath = './package.json';
const versionPath = './src/version.json';

const packageJson = JSON.parse(fs.readFileSync(filePath).toString());

const version = {
  version: packageJson.version,
  uuid: uuidv4(),
  timestamp: new Date().toISOString(),
};

fs.writeFileSync(versionPath, JSON.stringify(version, null, 2));
