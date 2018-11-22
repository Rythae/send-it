import AuthController from "../controllers/AuthController";
import { validateLoginInput, validateSignupInput, checkUniqueEmail } from '../middleware/AuthValidator';
import { Router } from 'express';

const authRouter = Router();

authRouter.post('/signup', validateSignupInput, checkUniqueEmail, AuthController.userSignup);
authRouter.post('/login', validateLoginInput, AuthController.userLogin);

export default authRouter;