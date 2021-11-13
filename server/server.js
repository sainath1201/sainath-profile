import express from 'express';

const app = express();
const port = process.env.port || 3000;

app.use('/game',express.static('client'));

app.listen(port, () => {
  console.log(`Example app at ${port}`);
});