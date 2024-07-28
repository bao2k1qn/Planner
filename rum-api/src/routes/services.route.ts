import { Router } from 'express';

import * as authMiddlewares from '../middlewares/auth.middlewares';
import * as servicesController from '../controllers/services.controller';

const router = Router();

router.get('/', authMiddlewares.protect, servicesController.getServices);
router.get('/:serviceId', authMiddlewares.protect, servicesController.getService);
router.post('/', authMiddlewares.protect, servicesController.createService);
router.patch('/:serviceId', authMiddlewares.protect, servicesController.updateService);
router.delete('/:serviceId', authMiddlewares.protect, servicesController.deleteService);

export default router;
