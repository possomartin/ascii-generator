import express from "express";
import bodyParser from "body-parser";
import { __dirname, page } from './utils/utils.js';
import indexRouter from "./routes/indexRouter.js";


const app = express();
const port = process.env.PORT;

app.use(express.static(__dirname));

app.get('/' , (req, res) => {
    res.sendFile(page);
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(indexRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});
