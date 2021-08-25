const validation = (schema, property) => {
  return (req, res, next) => {
    const { error } = schema.validate(req[property]);
    const valid = error == null;

    if (valid) {
      next();
    } else {
      console.log(error.details.map(e => e.message));
      res.status(422).json({ message: 'Invalid request' });
    }
  };
};

module.exports = validation;
