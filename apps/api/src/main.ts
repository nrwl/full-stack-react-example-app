/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/

import * as express from 'express';

const app = express();

type Ticket = {
  title: string;
  id: number;
};

const tickets: Ticket[] = [
  {
    title: `Install updates`,
    id: 1
  },
  {
    title: `Restore the backup`,
    id: 2
  }
];

app.get('/api/tickets', (req, res) => {
  res.send(tickets);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
