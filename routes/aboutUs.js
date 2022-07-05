import express from 'express';
import verifyToken from '../controllers/verifyToken.js';

const routerAbout = express.Router();

routerAbout.get('/', verifyToken, async (req, res)=>{
    // verifyToken()
    // const token = req.cookies.token;
    // console.log(token);
    res.render('acercaDeNosotros');
});

export default routerAbout;