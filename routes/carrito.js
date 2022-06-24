import express from 'express';

const routerCarrito = express.Router();

routerCarrito.get('/', (req, res)=>{
    res.render('carrito')
})

export default routerCarrito;