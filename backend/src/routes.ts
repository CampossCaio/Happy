import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';

import OrphanagerController from './controllers/OrphanagerController';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagerController.index);
routes.get('/orphanages/:id', OrphanagerController.show);
routes.post('/orphanages', upload.array('images'), OrphanagerController.create);


export default routes;