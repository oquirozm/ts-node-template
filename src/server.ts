import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3002;

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => console.log("Listening..."));
