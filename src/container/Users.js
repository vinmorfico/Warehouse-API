const UserService = require('../servises/UserService');
const UserRepository = require('../repositories/UserRepository');
const UserController = require('../controllers/UserController')

const userRepo = new UserRepository();
const userService = new UserService(userRepo);
const userController = new UserController(userService);

module.exports = userController;