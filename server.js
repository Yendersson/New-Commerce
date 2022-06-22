import express from 'express';
import routerIndex from './routes/index.js';
import router from './routes/product.js';
import routerAuth from './routes/auth.js';
import routerAbout from './routes/aboutUs.js';
import routerCategory from './routes/category.js';
import conexion from './model/connection.js';
import exphbs from 'express-handlebars'
import logger from 'morgan'


const app = express();

app.engine('.hbs', exphbs.engine({ extname:'.hbs', defaultLayout:'main.hbs' }))
app.set('view engine','.hbs')

app.use(logger('dev'))
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}));
app.use(express.json());


await conexion()

app.use('/', routerIndex);
app.use('/category', routerCategory);
app.use('/products', router);
app.use('/user', routerAuth);
app.use('/aboutUs', routerAbout);

// console.log(process.env)


const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, ()=>console.log('server listen on', PORT));
server.on('error', err=>{
    console.log(err.message)
})