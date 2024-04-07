import asyncHandler from 'express-async-handler';
import Location from '../models/locationModel.js';

// Controller method to register a new location
const registerLocation = asyncHandler(async (req, res) => {
    const { name, address, phone } = req.body;

    const location = await Location.create({
        name,
        address,
        phone
    });

    if (location) {
        res.status(201).json({
            _id: location._id,
            name: location.name,
            address: location.address,
            phone: location.phone
        });
    } else {
        res.status(400);
        throw new Error('Invalid location data');
    }
});


const getAllLocations = asyncHandler(async (req, res) => {
    const locations = await Location.find({});
    res.json(locations);
});

export { registerLocation, getAllLocations };
