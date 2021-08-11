const UserService = require('../servises/UserService');
const UserRepository = require('../repositories/UserRepository');

const userRepo = new UserRepository();
const userService = new UserService(userRepo);

module.exports = userService;