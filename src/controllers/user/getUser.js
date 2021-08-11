const getUser = (userService) => {
  return async (req, res) => {
    const users = await userService.getUser(req.params.id);
    res.status(200).json(users);
  };
};

module.exports = getUser;
