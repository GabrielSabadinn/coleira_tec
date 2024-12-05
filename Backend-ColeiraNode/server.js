
const express = require('express');
const cors = require('cors');
const bpmController = require('./bpmController');

const app = express();
const port = 9000;


app.use(cors());

app.use(express.json());

app.post('/sensor/create-bpm', bpmController.createBpm);

app.get('/sensor/get-bpm', bpmController.getBpm);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
