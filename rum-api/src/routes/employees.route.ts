import { Router } from 'express';

import * as authMiddlewares from '../middlewares/auth.middlewares';
import * as employeesController from '../controllers/employees.controller';

const router = Router();

router.get('/', authMiddlewares.protect, employeesController.getEmployees);
router.get('/:employeeId', authMiddlewares.protect, employeesController.getEmployee);
router.post('/', authMiddlewares.protect, employeesController.createEmployee);
router.patch('/:employeeId', authMiddlewares.protect, employeesController.updateEmployee);
router.delete('/:employeeId', authMiddlewares.protect, employeesController.deleteEmployee);

export default router;
