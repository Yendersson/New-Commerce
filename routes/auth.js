import express from 'express';
const routerAuth = express.Router();
import User from '../model/user.js';
import JWT from 'jsonwebtoken';
import verifyToken from '../controllers/verifyToken.js'

routerAuth.post('/register', async (req, res)=>{

    const isEmailExist = await User.findOne({ email: req.body.email });
    if (isEmailExist) {
        return res.status(400).json({error: 'Email ya registrado'})
    }

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

routerAuth.post('/login', async (req,res)=>{

    try {
        
        const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).json({error: 'Usuario no encontrado'});

    const validPassword = await User.findOne({password: req.body.password});
    if(!validPassword) return res.status(400).json({error: 'contraseña no valida'});

    const accessToken = JWT.sign({
        id: user._id,
        isAdmin: user.isAdmin,
    },
    'yender',
    {expiresIn:"3d"}
    );

    const {password, ...others} = user._doc;

    res.json({
        others, accessToken, error: null,
    })


    } catch (error) {
        res.status(500).json({error});    
    }

    
})

export default routerAuth