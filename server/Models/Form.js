const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
	userId:String,
  name: String,
  address: String,
  phoneNumber: String,
  age: Number,
  sourceStation: String,
  destinationStation: String,
  travelReason: String,
  travelDate: Date,
  travelTime: String,
  returnDate: Date,
  returnTime: String,
  photo: String,
  signature: String,
  approvalStatus: { type: Number, default: undefined },
  alertData: String, 
  alertTime: Date ,
  tripStatus: { type: Number, default: undefined },
  policeId:String,
  status: { type: Number, default: undefined },
}); 

const Form = mongoose.model('Form', formSchema);

module.exports = Form;
