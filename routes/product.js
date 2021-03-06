import express from 'express';
import methods from '../controllers/products.js'
import upload from '../libs/storage.js';

const router = express.Router();

//OBTENEMNOS TODOS LOS PRODUCTOS
router.get('/', methods.getMethod);

//OBTENEMOS UN SOLO PRODUCTO MEDIANTE SU CLAVE
router.get('/:id', methods.getMethodOne);

//CREAMOS UN PRODUCTO Y CARGAMOS IMAGENES 
router.post('/', upload.array('image', 4), methods.postMethod);

router.delete('/:id', (req,res) => {
    res.send('delete')
})

router.put('/:id', (req,res)=>{
    res.send('Put');
})

export default router;