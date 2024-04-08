import mongoose from 'mongoose';

const devicesSchema = new mongoose.Schema({
  serialNumber: {
    type: String,
    required: true,
    unique: true
  },
  type: {
    type: String, 
    required: true
  },
  image: {
    type: String, 
    required: true
  },
  status: {
    type: String, 
    required: true
  },
  locationID: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Devices = mongoose.model('Device', devicesSchema);

export default Devices;
