import express from 'express';
import routerIndex from './src/routes/index.js';
import router from './src/routes/product.js';
import routerAuth from './src/routes/auth.js';
import routerAbout from './src/routes/aboutUs.js';
import routerFaq from './src/routes/faq.js';
import routerCarrito from './src/routes/carrito.js';
import routerUser from './src/routes/users.js';
import conexion from './src/model/connection.js';
import exphbs from 'express-handlebars'
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import session from 'express-session';

const app = express();

// SETEADO DE HANDLEBARS 
app.engine('.hbs', exphbs.engine({ extname:'.hbs', defaultLayout:'main.hbs' }))
app.set('view engine','.hbs')
app.set('views','./src/views')

//MORGAN
app.use(logger('dev'))
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(session({
    secret: 'testSession',
    resave: true,
    saveUninitialized: true,
    cookie:{
        maxAge: 60000,
    }
}))

//CONEXION A MONGOOSE
await conexion()

//COOKIES
app.use(cookieParser())

//RUTAS A UTILIZAR
app.use('/', routerIndex);
//app.use('/category', routerCategory);
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