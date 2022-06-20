import express from 'express';
import methods from '../controllers/products.js'
import upload from '../libs/storage.js';

const router = express.Router();

router.get('/', methods.getMethod);

router.get('/:id', methods.getMethodOne);


router.post('/', upload.array('image', 4), methods.postMethod);

router.delete('/:id', (req,res) => {
    res.send('delete')
})

router.put('/:id', (req,res)=>{
    res.send('Put');
})

export default router;