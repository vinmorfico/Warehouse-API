const getAllUsers = (userService) => {
  return async (_req, res) => {
    const users = await userService.getAllUser();
    res.status(200).json(users);
  };
};

module.exports = getAllUsers;
