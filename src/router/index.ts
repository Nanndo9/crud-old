import { Router } from 'express';
import * as apiController from '../controllers/apiController';
import multer from 'multer';

const router = Router();

const upload = multer({
    dest: './tmp',
    fileFilter: (req, file, cb) => {
        const allowed: string[] = ['image/jpg', 'image/jpeg', 'image/png'];

        cb(null, allowed.includes(file.mimetype));
    },
    limits: { fieldSize: 2000000 },
});

router.get('/', apiController.defaultOne);
router.get('/frases', apiController.getPhrase);
router.get('/frases/:id', apiController.getOnePhrase);
router.post('/frases', apiController.createPhrase);
router.put('/frases/:id', apiController.editPhrase);
router.delete('/frases/:id', apiController.deletePhrase);
router.get('/frase/random', apiController.randomGet);
router.post('/upload', upload.single('avatar'), apiController.uploadFile);

export default router;
