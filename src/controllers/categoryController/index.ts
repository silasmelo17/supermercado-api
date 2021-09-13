
import { Request, Response } from 'express';

import models from '@Models/index';



async function findAllCategories( req: Request, res: Response ) {
    try {
        const result = await models.Category.findAll();

        return res.status(200).json(result);
    } catch(err) {
        return res.status(500).json(err)
    }
}



export default {
    findAllCategories
};
