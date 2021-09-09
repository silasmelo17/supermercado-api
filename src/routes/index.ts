
import express from 'express';

import users from '@Routes/users'



const router = express.Router();

router.get( '/', ( req, res ) => {
    res.status(200).json({
        message: "Hello World"
    })
})

router.use(users);



export default router;
