import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { MovieController } from './movie.controller';
import { MovieValidation } from './movie.validaton';

const router = express.Router();

router.get('/', MovieController.getAllFromDB);
router.get('/:id', MovieController.getDataById);
router.get('/:categoryId/category', MovieController.getDataByCategoryId);
router.post(
  '/create-Movie',
  validateRequest(MovieValidation.createMovieSchema),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
  MovieController.insertIntoDB
);
router.patch(
  '/:id',
  validateRequest(MovieValidation.updateMovieSchema),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
  MovieController.updateOneInDB
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
  MovieController.deleteByIdFromDB
);

export const MovieRoutes = router;
