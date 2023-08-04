import express from 'express';
const router = express.Router();
import newUser from "../controllers/userController.js";
import {check} from 'express-validator';

const routes = () => {
    // Users routes
    router.post('/',

        [
            check('name','Name is required').not().isEmpty(),
            check('email','Add valid email').isEmail(),
            check('password','Password must be at least eight characters').isLength({min: 8}),
        ],

    newUser);

    return router;
};

export default routes;