const { UserRepository } = require('../repository/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_KEY } = require('../config/serverConfig');

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async createUser(data) {
        try {
            const user = await this.userRepository.createUser(data);
            return user;
        } catch (error) {
            console.log(error);
            console.log("Something went wrong in create service layer");
            throw error;
        }
    }

    async signIn(email, plainPassword) {
        // step1: fetch the user using the email
        const user = await this.userRepository.getByEmail(email);
        // step2: compare password sent by user with hashed password
        const passwordMatch = this.checkingPassword(plainPassword, user.password);
        // If the password doesn't match
        if(!passwordMatch) {
            console.log("Password doesn't match");
            throw {error: "Incorrect password"}
        }
        // step3: if passwords matched then create a new token and send it to the user
        const newJwt = this.createToken({email: user.email, id: user.id}); // should send plain object in the parameter
        return {userId:user.id,newJwt};
    }

    isAdmin(userId) {
        try {
            return this.userRepository.isAdmin(userId)
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw error;
        }
    }

    isCustomer(userId) {
        try {
            return this.userRepository.isCustomer(userId);
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw error;
        }
    }

    // isAuthenticated verifies wheather the user exist in db or not.
    isAuthenticated(token) { // The token will be sent in the headers.
        try {
            const response = this.verifyToken(token); // token: {email: '', id: '', iat: '', exp: ''}
            if(!response){
                throw {error: "Invalid Token"}
            }
            const user = this.userRepository.getById(response.id);
            if(!user) {
                throw {error: 'No user with the corresponding token exists'};
            }
            return user.id; // This userId is going to store in apiGateway request
           
        } catch (error) {
            console.log(error);
            console.log("Something went wrong in isAuthenticated function service layer");
            throw error;
        }
    }

    createToken(user) {
       try {
        const result = jwt.sign(user, JWT_KEY, {expiresIn: '1h'});
        return result;
       } catch (error) {
        console.log("Something went wrong in createtoken function service layer");
        console.log(error);
        throw error;
       }
    }

    verifyToken(token) {
        try {
        const response = jwt.verify(token, JWT_KEY);
        return response;
        } catch (error) {
            console.log("Something went wrong in verify token service layer");
            throw error;
        }
    }

    checkingPassword(inputTextPassword, hashedPassword) {
        try {
            return bcrypt.compareSync(inputTextPassword, hashedPassword);
        } catch (error) {
            console.log("Something went wrong in checking password function service layer");
            throw error;
        }
    }

    async getById(userId){
        try {
            const user = await this.userRepository.getById(userId);
            return user;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }
}

module.exports = UserService;