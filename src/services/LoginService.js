import User from "../model/user.js";

class LoginService{

    static async signUp(u){

        try {
            const existEmail = User.findOne({email:u.email}).lead();
            if (existEmail) return;

            const user = new User(u);
            return user.save();

        } catch (error) {
            console.log("Problems to sign up");
        }
    }

    static async signIn(login){
        
        try {
            const user = await User.findOne({email:login.email});
            if (!user) throw new Error;
            if (login.password !== user.password) throw new Error;
            return user;
        } catch (error) {
            console.log(`There is a trouble to sign in ${error}`);
        }
    }
}

export default LoginService;