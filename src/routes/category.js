import express from 'express'
import categorias from '../controllers/category.js'
import methods from '../controllers/products.js'

const routerCategory = express.Router();

//PRODUCTOS POR CATEGORIAS
routerCategory.get('/ropa_accesorios', categorias.ropaAccesorios);

routerCategory.get('/electrodomesticos', categorias.electrodomesticos);

routerCategory.get('/hogar_muebles', categorias.hogar);

routerCategory.get('/revista_arte', categorias.revistas);

// routerCategory.get('/product/:id?', methods.getMethodOne);


export default routerCategory;

