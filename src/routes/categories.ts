
import express from 'express'

import categoryController from '@Controllers/categoryController/index';



const router = express.Router();

router.get( '/categories', categoryController.findAllCategories )



export default router;
