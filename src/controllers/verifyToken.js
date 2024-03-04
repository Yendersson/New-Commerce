import JWT from "jsonwebtoken";

//________________________AUTHENTICACION JWT___________

const verifyToken = (req, res, next)=>{
    const authCookie = req.cookies.token;
    if(authCookie !== ''){
        
        JWT.verify(authCookie, 'yender', (error, user)=>{
            if(error) res.status(401).json('Token is not valid');
            req.user = user;
            next()
        });
    }else{
        return res.status(401).json({data: 'You are not authenticated'});
    }
}

export default 
    verifyToken