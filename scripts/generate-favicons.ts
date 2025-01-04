import { generateFavicons } from '../src/utils/imageUtils';
import { resolve } from 'path';

const logoPath = resolve(__dirname, '../src/assets/logo.png');

generateFavicons(logoPath)
  .then(() => console.log('Favicons generated successfully'))
  .catch(console.error);