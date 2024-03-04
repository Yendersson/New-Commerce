import express from "express";
import User from '../model/user.js';
// import JWT from 'jsonwebtoken';
import verifyToken from "../controllers/verifyToken.js";

const routerUser = express.Router()

routerUser.get('/:id',/* verifyToken,*/ async(req, res) => {

    let {id} = req.params
    try {
        const dataUser = await User.findById({_id: id}).lean();
        console.log(typeof dataUser)
        res.render('profile', {datos: dataUser})
    } catch (error) {

        console.log('error en el get de los datos del usuario', error.message);

        res.status.json(error)   
    }
})

export default routerUser
