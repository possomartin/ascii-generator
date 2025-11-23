import { __dirname, upload } from '../../utils/utils.js';
import express, { type Request, type Response } from 'express';

const asciiRouter = express.Router();

asciiRouter.post('/storeImage', upload.array('photos'), (req: Request, res: Response) => {
    console.log('Req Body: ', req.files);
    res.send({ message: 'success', request: req.files })
});


export default asciiRouter;
