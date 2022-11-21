import { envParseString, setup } from '@skyra/env-utilities';
import { getRootData } from '@sapphire/pieces';
import { join } from 'node:path';

export const mainFolder = getRootData().root;
export const rootFolder = join(mainFolder, '..');

setup(join(rootFolder, 'src', '.env'));
export const OWNER = envParseString('OWNER');
