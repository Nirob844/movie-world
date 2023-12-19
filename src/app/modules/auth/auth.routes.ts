import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AuthController } from './auth.controller';
import { AuthValidation } from './auth.validation';

const router = express.Router();

router.post(
  '/registration',
  validateRequest(AuthValidation.registrationSchema),
  AuthController.registrationUser
);
router.post(
  '/login',
  validateRequest(AuthValidation.loginSchema),
  AuthController.loginUser
);

export const AuthRoutes = router;
