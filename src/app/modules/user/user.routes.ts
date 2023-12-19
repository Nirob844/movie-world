import express from 'express';

import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { UsersController } from './user.controller';
import { UserValidation } from './user.validations';

const router = express.Router();

router.get('/', auth(ENUM_USER_ROLE.ADMIN), UsersController.getAllFromDB);
router.get('/:id', auth(ENUM_USER_ROLE.ADMIN), UsersController.getDataById);
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(UserValidation.updateUserSchema),
  UsersController.updateOneInDB
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  UsersController.deleteByIdFromDB
);

export const UserRoutes = router;
