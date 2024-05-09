
const mongoose = require('mongoose');

const policeStationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  location: { type: String, required: true },
  headPoliceName: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: Number, required: true },
  headPoliceImage: { type: String, required: true }, 
  policeStationImage: { type: String, required: true } 
});

const PoliceStation = mongoose.model('PoliceStation', policeStationSchema);

module.exports = PoliceStation;
