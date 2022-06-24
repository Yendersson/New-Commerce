import express from 'express';

const routerFaq = express.Router();

routerFaq.get('/', (req,res)=>{
    res.render('faq');
})

export default routerFaq