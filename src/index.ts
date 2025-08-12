import express from "express";
import indexRouter from "./routes/indexRouter.js";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(indexRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});