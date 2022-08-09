import express from 'express';
import routerIndex from './routes/index.js';
import router from './routes/product.js';
import routerAuth from './routes/auth.js';
import routerAbout from './routes/aboutUs.js';
import routerCategory from './routes/category.js';
import routerFaq from './routes/faq.js';
import routerCarrito from './routes/carrito.js';
import conexion from './model/connection.js';
import exphbs from 'express-handlebars'
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import routerUser from './routes/users.js';


const app = express();


// SETEADO DE HANDLEBARS 
app.engine('.hbs', exphbs.engine({ extname:'.hbs', defaultLayout:'main.hbs' }))
app.set('view engine','.hbs')

//MORGAN
app.use(logger('dev'))
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//CONEXION A MONGOOSE
await conexion()

//COOKIES
app.use(cookieParser())

//RUTAS A UTILIZAR
app.use('/', routerIndex);
app.use('/category', routerCategory);
app.use('/products', router);
app.use('/user', routerAuth);
app.use('/aboutUs', routerAbout);
app.use('/faq', routerFaq)
app.use('/carrito', routerCarrito);
app.use('/profile', routerUser)

// console.log(process.env)

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, ()=>console.log('server listen on', PORT));
server.on('error', err=>{
    console.log(err.message)
})