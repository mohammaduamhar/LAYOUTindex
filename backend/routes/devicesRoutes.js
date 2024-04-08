import express from 'express';
import { registerDevices ,getDevicesByLocationID, deleteDeviceById } from '../controllers/devicesController.js';

const deviceRouter = express.Router();
const basePath = '/api';

deviceRouter.post(`${basePath}/registerDevice`, registerDevices);

deviceRouter.get(`${basePath}/getDevicesByLocationID/:locationID`, getDevicesByLocationID);

deviceRouter.delete(`${basePath}/deleteDeviceById/:id`, deleteDeviceById);


export default deviceRouter;
