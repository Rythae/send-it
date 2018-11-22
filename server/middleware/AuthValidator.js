import validator from 'validator';
import Helper from '../models/Helper';
import UserModel from '../models/User';

export const validateSignupInput =  (req, res, next) => {
    let error = '';
    const {
        firstname,
        lastname,
        othernames,
        email,
        username,
    } = req.body;
    
   if (!req.body.firstname || !req.body.lastname || !req.body.username || !req.body.email || !req.body.password) {
      return res.status(400).send({'message': 'Some values are missing'});
    }
    if (!Helper.isValidEmail(req.body.email)) {
      return res.status(400).send({ 'message': 'Please enter a valid email address' });
    }
    const hashPassword = Helper.hashPassword(req.body.password);

    if (error.length > 0){
        return res.status(422).send({status: 'Unprocessable Entity', error});
    }
    // console.log(error);
    next();
}

export const validateLoginInput =  (req, res, next) => {
    let error = '';
    const {
        email,
        password,
    } = req.body;
    
   if (!email || !password) {
      return res.status(400).send({'message': 'missing email or password'});
    }
    if (!Helper.isValidEmail(email)) {
      return res.status(400).send({ 'message': 'Please enter a valid email address' });
    }
    const hashPassword = Helper.hashPassword(password);

    if (error.length > 0){
        return res.status(422).send({status: 'Unprocessable Entity', error});
    }
    // console.log(error);
    next();
}

export const checkUniqueEmail =  async (req, res, next) => {
    let error = '';
    const {
        email,
    } = req.body;
    
    const User = new UserModel();

    const emailFound = await User.getByEmail(email);

    if (emailFound){
        return res.status(422).send({
            status: 'Unprocessable Entity', 
            error: 'email already exists'
        });
    }

    next();
}
