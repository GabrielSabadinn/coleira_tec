
let bpmData = [];

const createBpm = (req, res) => {
  const { bpm } = req.body;
    console.log("BPM RECEBIDO : " + bpm)
  bpmData.push({ bpm, timestamp: new Date() });

  return res.status(201);
};

const getBpm = (req, res) => {
  if (bpmData.length === 0) {
    return res.status(404).json({ message: 'Nenhum BPM registrado' });
  }

  const latestBpm = bpmData[bpmData.length - 1];
  return res.json({ bpm: latestBpm.bpm, timestamp: latestBpm.timestamp });
};

module.exports = {
  createBpm,
  getBpm,
};
