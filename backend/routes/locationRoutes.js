import express from 'express';
const router = express.Router();
import { registerLocation, getAllLocations } from '../controllers/locationController.js'; // Assuming you have a controller method to fetch all locations

const basePath = '/api';


router.post(`${basePath}/registerLocation`, registerLocation);


router.get(`${basePath}/locations`, getAllLocations);

export default router;
