import { Router } from 'express';

import * as authController from '../controllers/auth.controller';

const router = Router();

router.post('/signin', authController.signin);

export default router;
