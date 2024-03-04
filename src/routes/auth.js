import express from 'express';
const routerAuth = express.Router();
import User from '../model/user.js';
import JWT from 'jsonwebtoken';
import Crtl from '../controllers/login.controller.js';

//---------------------------------------------------------------------------------
//------------------------------------AUTHENTICATION-------------------------------
//---------------------------------------------------------------------------------

//RUTA DE REGISTRO

routerAuth.post('/login', Crtl.authentication);

routerAuth.get('/logout', Crtl.logout);
/*routerAuth.post('/register', async (req, res)=>{

    //COMPROBAR QUE EL CORREO SEA UNICO Y NO ESTE REPETIDO CON OTRO USUARIO
    const isEmailExist = await User.findOne({ email: req.body.email });
    if (isEmailExist) {
        return res.status(400).json({error: 'Email ya registrado'})
    }

    //SI NO ES REPETIDO PROCEDEMOS AL REGISTRO DE DATOS EN MONGO
    const user = new User({
        name: req.body.name,
        email:req.body.email,
        password: req.body.password
    });

    try {
        const savedUser = await user.save();
        res.json({
        error: null,
        data: savedUser
    })
    } catch (error) {
        res.status(500).json({error})
    }
    
})


//RUTA DE LOGIN
routerAuth.post('/login', async (req,res)=>{

    try {
        //COMPROBAMOS QUE EL USUARIO ESTE REGISTRADO MEDIANTE CORREO Y PASSWORD
        const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).json({error: 'Usuario no encontrado'});

    const validPassword = await User.findOne({password: req.body.password});
    if(!validPassword) return res.status(400).json({error: 'contraseña no valida'});

    //SI TODO ESTA BIEN LE GENERAMOS UN TOKEN DE AUTHORIZACION
    const accessToken = JWT.sign({
        id: user._id,
        isAdmin: user.isAdmin,
    },
    'yender',
    {expiresIn:"3d"}
    );

    //MANDAMOS UNA RESPUESTA EN JSON PERO SIN LA CONTRASEÑA DEL USUARIO
    const {password, ...others} = user._doc;

    res.json({
        others, accessToken, error: null,
    })


    } catch (error) {
        res.status(500).json({error});    
    }

    
})
*/
export default routerAuth