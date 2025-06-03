const User = require("../models/User");

module.exports.registerUser = (req, res, next) => {
  const { body } = req;

  const user = new User(body);
  user.addUser();

  delete user.password;
  res.status(201).send(user);
};

module.exports.getAllUsers = (req, res, next) => {
  const usersArray = User.findAll();
  res.status(200).send(usersArray);
};

module.exports.getOneUser = (req, res, next) => {
  const { userId } = req.params;
  const user = User.findOne(Number(userId));

  if (userId) {
    res.status(200).send(user);
  } else {
    res.status(400).end;
  }
};

module.exports.deleteOneUser = (req, res, next) => {
  const { userId } = req.params;
  const user = User.findOne(Number(userId));

  if (userId) {
    user.deleteUser();
    res.status(200).send(user);
  } else {
    res.status(400).end;
  }

};

module.exports.updateInfoUser = (req, res, next) => {
  const {
    body,
    params: { userId },
  } = req;
  const user = User.findOne(Number(userId));

  if (user) {
    const updateUser = user.updateInfoUser(body);
    res.status(200).send(updateUser);
  } else {
    res.status(400).end();
  }
};
