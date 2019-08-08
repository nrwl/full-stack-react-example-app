/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/

import * as express from 'express';

const app = express();

app.get('/agent', (req, res) => {
  res.send({ name: 'Julie K' });
});

const port = process.env.port || 3334;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/agent`);
});
server.on('error', console.error);
