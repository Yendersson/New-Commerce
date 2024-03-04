import express  from 'express';
import cantidad from '../controllers/index.js'

const routerIndex = express.Router()

//CANTIDAD DE PRODUCTOS POR CATEGORIA
routerIndex.get('/', cantidad.getCantidadCategory);

export default routerIndex;