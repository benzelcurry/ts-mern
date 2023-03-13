import express, { Request, Response, NextFunction } from 'express';
const app = express();
const port = 3001;

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    message: 'Hello, world!'
  });
});

app.listen(port, () => console.log(`Running on Port ${port}`));