import User from "../models/User.js";
import bcrypt from "bcrypt";
import {validationResult} from 'express-validator';
const newUser = async(req, res, next) => {
    // Show express-validator error messages
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    // Verify registered user
    const {email, password} = req.body;
    let user = await User.findOne({email});
    if(user) {
        return res.status(400).json({msg: 'User already registered'});
    }
    // Create new user
    user = new User(req.body);
    // Password hash
    const salt = await bcrypt.genSalt(10);
    user.password =  await bcrypt.hash(password, salt);
    try {
        await  user.save();
        res.json({msg: "Created user"});
    } catch (error) {
        console.log(error);
    }
}

export default newUser;