import {Request,Response } from 'express';

class IndexController{

    public index (req: Request,res: Response){
        res.json({text: 'Holi'});
    } 
}

const indexController = new IndexController();
export default indexController;