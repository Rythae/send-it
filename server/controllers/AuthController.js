import UserModel from '../models/User';
import Helper from '../models/Helper';


const User = new UserModel();

/**
 * @exports
 * @class UserControl
 * 
 */
export default class AuthController {
    /**
     * @staticmethod
     * @param {object} req - Request object
     * @param {object} resp - Response object
     * @return {json} resp.json
     */
   
    static async userSignup(req,resp) {
        const userData = req.body;
        userData.isAdmin = 0;
        userData.password = Helper.hashPassword(req.body.password);

        const user = await User.create(userData);

        return resp.status(201).send({
            message: 'success', 
            user
        });
    }

    /**
     * @staticmethod
     * @param {object} req - Request object
     * @param {object} resp - Response object
     * @return {json} resp.json
     */
   
    static async userLogin(req,resp) {

        const userFound = await User.getByEmail(req.body.email);
        if(!userFound) {
            return resp.status(401).send({
                message: 'User not authenticated'
            });
        }

        let passwordFound = Helper.comparePassword(userFound.password, req.body.password);

        if(!passwordFound) {
            return resp.status(400).send({
                message: 'email or password is wrong', 
            });   
        }

        const token = Helper.generateToken({
            id: userFound.id,
            email: userFound.email
        });

        return resp.status(201).send({
            message: 'success', 
            data: {
                id: userFound.id,
                email: userFound.email,
                token
            }
        });
    }

}
