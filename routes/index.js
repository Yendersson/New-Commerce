import express  from 'express';
import cantidad from '../controllers/index.js'

const routerIndex = express.Router()

routerIndex.get('/', cantidad.getCantidadCategory);

export default routerIndex;