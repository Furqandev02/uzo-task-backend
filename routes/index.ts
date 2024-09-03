import { Router } from 'express';
import adminRoutes from './AdminRoute';
import userRoutes from './UserRoute';

const router = Router();

router.use('/admin', adminRoutes);
router.use('/user', userRoutes);

export default router;
