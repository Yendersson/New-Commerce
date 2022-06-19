import express from 'express';
import router from './routes/product.js';
import routerAuth from './routes/auth.js';
import conexion from './model/connection.js';
import exphbs from 'express-handlebars'

const app = express();

app.engine('.hbs', exphbs.engine({ extname:'.hbs', defaultLayout:'main.hbs' }))
app.set('view engine','.hbs')


app.use(express.static('public'))
app.use(express.urlencoded({extended: true}));
app.use(express.json());


await conexion()

app.get('/', (req,res)=>{

    res.render('inicio', {title: 'Welcome to my page'});
})

app.use('/v2', router);
app.use('/v2/user', routerAuth);

// console.log(process.env)


const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, ()=>console.log('server listen on', PORT));
server.on('error', err=>{
    console.log(err.message)
})