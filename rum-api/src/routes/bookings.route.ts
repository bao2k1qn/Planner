import { Router } from 'express';

import * as authMiddlewares from '../middlewares/auth.middlewares';
import * as bookingsController from '../controllers/bookings.controller';

const router = Router();

router.get('/', authMiddlewares.protect, bookingsController.getBookings);
router.get('/:bookingId', authMiddlewares.protect, bookingsController.getBooking);
router.post('/', authMiddlewares.protect, bookingsController.createBooking);
router.patch('/:bookingId', authMiddlewares.protect, bookingsController.updateBooking);
router.delete('/:bookingId', authMiddlewares.protect, bookingsController.deleteBooking);

export default router;
