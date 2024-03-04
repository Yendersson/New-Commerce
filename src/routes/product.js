import express from 'express';
import Ctrl from '../controllers/products.controller.js';
//import upload from '../libs/storage.js';

const router = express.Router();

router.get('/', Ctrl.getProducts);
router.get('/:id', Ctrl.getOneProduct);
router.get('/category/:category', Ctrl.getByCategory);
router.post('/', Ctrl.insertProduct);
//router.post('/', upload.array('image', 4), methods.postMethod);

router.delete('/:id', (req,res) => {
    res.send('delete')
})

router.put('/:id', (req,res)=>{
    res.send('Put');
})

export default router;