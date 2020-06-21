import express from 'express';
import IndexController from '../controller/indexController';

const router = express.Router();

router.post('/login', IndexController.login);

export const indexRoutes = router;
