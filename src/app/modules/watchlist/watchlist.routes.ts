import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { WatchListController } from './watchlist.controller';
import { WatchListValidation } from './watchlist.validation';

const router = express.Router();

router.get(
  '/',
  auth(ENUM_USER_ROLE.CUSTOMER, ENUM_USER_ROLE.ADMIN),
  WatchListController.getAllFromDB
);
router.post(
  '/create-watchlist',
  validateRequest(WatchListValidation.createWatchListSchema),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
  WatchListController.insertIntoDB
);

router.patch(
  '/:id',
  validateRequest(WatchListValidation.updateWatchListSchema),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
  WatchListController.updateOneInDB
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
  WatchListController.deleteByIdFromDB
);

export const WatchListRoutes = router;
