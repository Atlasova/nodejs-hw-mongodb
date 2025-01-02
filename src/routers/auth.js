import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { registerUserSchema } from '../validation/auth.js';
import { loginUserSchema } from '../validation/auth.js';
import * as authController from '../controllers/auth.js';

const router = Router();

router.post(
  '/register',
  validateBody(registerUserSchema),
  ctrlWrapper(authController.registerUserController),
);

router.post(
  '/login',
  validateBody(loginUserSchema),
  ctrlWrapper(authController.loginUserController),
);

router.post(
  '/refresh',
  ctrlWrapper(authController.refreshUserSessionController),
);

router.post('/logout', ctrlWrapper(authController.logoutUserController));

export default router;
