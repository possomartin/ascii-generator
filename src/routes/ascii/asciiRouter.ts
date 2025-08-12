import multer from 'multer';
import express, { type Request, type Response } from 'express';

const upload = multer({ dest: './public/images/'});
const asciiRouter = express.Router();

asciiRouter.post('/convert', upload.single('file'), (req: Request, res: Response) => {
    console.log('Req Body: ', req.file);
    res.send({ message: 'success', request: req.file })
});

asciiRouter.get('/', (req: Request, res: Response) => {
    console.log('Router: ', req);
    res.send({ message: 'success' }).sendStatus(200);
})

export default asciiRouter;