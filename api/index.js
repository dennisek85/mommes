const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = 4444;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let dishes = [{
  name: 'Stroganoff'
}];


app.get('/dishes', (req, res) => {
  console.log(dishes);
  res.status(200).send(dishes);
});

app.post('/dishes', (req, res) => {
  const dish = req.body;
  dishes.push(dish);
  res.status(201).send(dishes);
});

app.delete('/dishes/:id', (req, res) => {
  throw new Error('Not implemented');
});

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
