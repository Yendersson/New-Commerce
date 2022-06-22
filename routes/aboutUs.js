import express from 'express';

const routerAbout = express.Router();

routerAbout.get('/', (req, res)=>{
    res.render('acercaDeNosotros');
});

export default routerAbout;