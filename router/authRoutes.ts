import {Router} from 'express'
import { register , login} from '../backend/Controller/authController'

export const router = Router();

router.post('/register', register);
router.post('/login', login);