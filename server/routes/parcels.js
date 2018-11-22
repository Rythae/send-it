import ParcelController from "../controllers/parcelController";
import { parcelValidation } from '../middleware/parcelValidator';

import { Router } from 'express';

const router = new Router();

router.get('/',
    ParcelController.getAllParcel
);

router.get('/:id',
    ParcelController.getSpecificParcel
);

router.put('/:id/cancel',
    ParcelController.cancelParcel
);

router.put('/:id/status',
    ParcelController.changeParcelStatus
);
router.post('/',
    parcelValidation,
    ParcelController.createParcel
);

export default router;