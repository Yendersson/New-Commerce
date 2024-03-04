import User from "../model/user.js";

class UserService{

    static async getUser(id){
        
        try {
            const user = User.findById({_id:id}).lean();
            return user;
        } catch (error) {
            console.log("There is an error finding the user", error);
        }
    }

    static 

}