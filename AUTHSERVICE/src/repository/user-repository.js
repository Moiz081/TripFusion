const ValidationError  = require('../utils/validation-error');
const { User, Role } = require('../models/index');
const { StatusCodes } = require('http-status-codes');
const ClientError = require('../utils/client-error');

class UserRepository {

    async createUser(data){
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            if(error.name == 'SequelizeValidationError') {
                throw new ValidationError(error);
            }
            console.log("Something went wrong in createUser function repository layer");
            throw error;
        }
    }
    
    async getById(userId){
        try {
            const user = await User.findByPk(userId);
            return user;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }

    // async getUsers(){
    //     try {
    //         const user = await User.findAll();
    //         return user;
    //     } catch (error) {
    //         console.log("Something went wrong in createUser function repository layer");
    //         throw error;
    //     }
    // }

    async getByEmail(userEmail){
        try {
            const user = await User.findOne({
                where: {
                    email: userEmail
                }
            });
            if (!user) {
                throw new ClientError(
                    'Email not found',
                    'Invalid email sent in the request',
                    'User has entered email that doesnt exist',
                    StatusCodes.NOT_FOUND
                );
            }
            return user;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }

    async isAdmin(userId) {
        try {
            const user = await User.findByPk(userId);
            const adminRole = await Role.findOne({
                where: {
                    name: 'ADMIN'
                }
            });
            return user.hasRole(adminRole);
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }

    async isCustomer(userId) {
        try {
            const user = await User.findByPk(userId);
            const customerRole = await Role.findOne({
                where: {
                    name: 'CUSTOMER'
                }
            });
            return user.hasRole(customerRole);
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }

    // async destroyUser(userId){
    //     try {
    //         await User.destroy(userId);
    //         return true;
    //     } catch (error) {
    //         console.log("Something went wrong in createUser function repository layer");
    //         throw error;
    //     }
    // }
}

module.exports = UserRepository;