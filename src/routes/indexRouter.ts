import { Router } from 'express';
import asciiRouter from './ascii/asciiRouter.js';

const indexRouter = Router();

indexRouter.use(asciiRouter);

export default indexRouter;

