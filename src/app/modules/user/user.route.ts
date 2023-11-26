import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();

router.post('/api/users', UserController.createUser);

router.get('/api/users', UserController.getAllUsers);

router.get('/api/users/:userID', UserController.getSingleUser);

export const UserRoutes = router;
