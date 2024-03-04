import express from 'express';
import verifyToken from '../controllers/verifyToken.js';

const routerAbout = express.Router();

//RUTA ACERCA DE NOSOTROS

routerAbout.get('/', verifyToken, async (req, res)=>{
    res.render('acercaDeNosotros');
});

export default routerAbout;