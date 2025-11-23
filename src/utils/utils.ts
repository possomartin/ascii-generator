import path from 'path';
import multer from 'multer';
import { fileURLToPath } from 'url';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.resolve(__filename, '../../../public');

export const page = path.join(__dirname, 'index.html');

const diskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __dirname);
    },

    filename: (req, file, cb) => {
        cb(null, 'wallpaper-'+file.fieldname);
    }
});

export const upload = multer({ storage: diskStorage});
