import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { ReviewAndRatingController } from './ReviewAndRating.controller';

const router = express.Router();

router.get('/', ReviewAndRatingController.getAllFromDB);
router.get('/:id', ReviewAndRatingController.getDataById);
router.post(
  '/create-review&rating',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
  ReviewAndRatingController.insertIntoDB
);
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
  ReviewAndRatingController.updateOneInDB
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
  ReviewAndRatingController.deleteByIdFromDB
);

export const ReviewAndRatingRoutes = router;
