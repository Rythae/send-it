import parcelRoutes from './parcels';
import authRoutes from './auth';
import ParcelController from '../controllers/parcelController';

import { Router } from 'express';

const router = Router();

router.use('/parcels', parcelRoutes);
router.use('/auth', authRoutes)
router.get('/users/:userId/parcels',
        ParcelController.getAUsersParcels
    );

export default router;

