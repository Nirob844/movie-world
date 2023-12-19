import express from 'express';
import { AuthController } from './auth.controller';

const router = express.Router();

router.post('/registration', AuthController.registrationUser);
router.post('/login', AuthController.loginUser);

export const AuthRoutes = router;
