import service from "../services/LoginService.js";

class LoginController{

    static async authentication(req, res, next) {
        try {
            const user = await service.signIn(req.body);
            if (!user) res.json({msg:"the fields does not match", error:true});
            req.session.user = user.name;
            res.json({msg:"successfully login", error:null});
        } catch (error) {
            console.log(error);
        }
    }

    static logout(req, res){
        req.session.destroy();
        res.redirect("/");
    }

}

export default LoginController;