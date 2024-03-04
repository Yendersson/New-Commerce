
class Auth{

    static auth(req, res, next){
        if (req.session) {
           return next()
        } 
        return res.sendStatus(401);
    }
}

export default Auth;