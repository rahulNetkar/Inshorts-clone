import express from "express";
import Connection from "./components/db.js";
import DefaultData from "./default.js";
import route from './routes/route.js'
import cors from 'cors';
import bodyParser from "body-parser";

const port = 8000;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use('/', route);

Connection();

app.listen(port, () => {
    console.log(`Server is live at port ${port}`)
})

DefaultData();