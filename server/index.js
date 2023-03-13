"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bodyParser = require('body-parser');
const cors = require('cors');
const app = (0, express_1.default)();
app.use(cors());
app.use(bodyParser.json());
const port = 3001;
const messages = [];
app.get('/', (req, res, next) => {
    res.status(200).json(messages);
});
app.post('/', (req, res, next) => {
    const newMsg = { message: req.body.msg };
    messages.push(newMsg);
});
app.listen(port, () => console.log(`Running on Port ${port}`));
