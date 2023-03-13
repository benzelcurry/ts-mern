import express, { Request, Response, NextFunction } from 'express';
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = 3001;

const messages: {message: string}[] = [];

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json(messages);
});

app.post('/', (req: Request, res: Response, next: NextFunction) => {
  const newMsg: {message: string} = {message: req.body.msg};
  messages.push(newMsg);
})

app.listen(port, () => console.log(`Running on Port ${port}`));