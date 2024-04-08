import asyncHandler from 'express-async-handler';
import Devices from '../models/devicesModel.js';


const registerDevices = asyncHandler(async (req, res) => {
    const { serialNumber, type, image, status, locationID} = req.body;

    const devices = await Devices.create({
        serialNumber,
        type,
        image, 
        status,
        locationID
    });

    if (devices) {
        res.status(201).json({
            _id:devices._id,
            serialNumber: devices.serialNumber,
            type: devices.type,
            image: devices.image,
            status: devices.status,
            locationID: devices.locationID
        });
    } else {
        res.status(400);
        throw new Error('Invalid location data');
    }
});

const getDevicesByLocationID = asyncHandler(async (req, res) => {
    const devices = await Devices.find({ locationID: req.params.locationID });

    if (devices) {
        res.json(devices);
    } else {
        res.status(404);
        throw new Error('Devices not found for the given location ID');
    }
});
const deleteDeviceById = asyncHandler(async (req, res) => {
    try {
        const device = await Devices.findById(req.params.id);

        if (!device) {
            res.status(404);
            throw new Error('Device not found');
        }

        await device.deleteOne();
        res.json({ message: 'Device removed successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



export { registerDevices, getDevicesByLocationID, deleteDeviceById };
