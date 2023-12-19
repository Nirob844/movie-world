import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { CategoryController } from './category.controller';
import { CategoryValidation } from './category.validation';

const router = express.Router();

router.get('/', CategoryController.getAllFromDB);
router.get('/:id', CategoryController.getDataById);
router.post(
  '/create-category',
  validateRequest(CategoryValidation.createCategorySchema),
  auth(ENUM_USER_ROLE.ADMIN),
  CategoryController.insertIntoDB
);
router.patch(
  '/:id',
  validateRequest(CategoryValidation.updateCategorySchema),
  auth(ENUM_USER_ROLE.ADMIN),
  CategoryController.updateOneInDB
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  CategoryController.deleteByIdFromDB
);

export const CategoryRoutes = router;
