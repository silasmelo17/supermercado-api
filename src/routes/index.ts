
import express from 'express';

import users from '@Routes/users';
import categories from '@Routes/categories';



const router = express.Router();

router.use(users);
router.use(categories);



export default router;
