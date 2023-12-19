import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { TrailerController } from './trailer.controller';
import { TrailerValidation } from './trailer.validation';

const router = express.Router();

router.get('/', TrailerController.getAllFromDB);
router.get('/:id', TrailerController.getDataById);
router.post(
  '/create-trailer',
  validateRequest(TrailerValidation.createTrailerSchema),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
  TrailerController.insertIntoDB
);
router.patch(
  '/:id',
  validateRequest(TrailerValidation.updateTrailerSchema),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
  TrailerController.updateOneInDB
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
  TrailerController.deleteByIdFromDB
);

export const TrailerRoutes = router;
