import express, { Request, Response, NextFunction } from 'express';
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = 3001;

interface Post {
  message: string,
  author: string,
  numbers: number
};

const messages: Post[] = [];

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json(messages);
});

app.post('/', (req: Request, res: Response, next: NextFunction) => {
  const newMsg: Post = {
    message: req.body.msg,
    author: req.body.author,
    numbers: req.body.numbers
  };
  messages.push(newMsg);
})

app.listen(port, () => console.log(`Running on Port ${port}`));