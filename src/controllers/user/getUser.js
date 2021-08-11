const getUsersById = (userService) => {
  return async (req, res) => {
    const users = await userService.getUsersById(req.params.id);
    res.status(200).json(users);
  };
};

module.exports = getUsersById;
