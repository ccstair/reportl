const User = require('../models/userModel');

const userController = {
  getAll(req, res) {
    User.fetchAll()
    .then(users => res.json(users))
    .catch((err) => {
      console.log(`userController.getAll - Error: ${err}`);
      res.sendStatus(500);
    });
  },

  getUserById({ params: { id }, baseUrl, originalUrl }, res) {
    User.forge({ id })
      .fetch()
      .then((user) => {
        if (user) {
          res.json(user);
        } else {
          res.status(404).json({
            error: {
              message: 'Not Found',
            },
            request: {
              endpoint: baseUrl,
              url: originalUrl,
              parameters: {
                id,
              },
            },
          });
        }
      })
      .catch((err) => {
        console.log(`userController.getUserById - Error: ${err}`);
        res.sendStatus(500);
      });
  },

  newUser({ body: userData, baseUrl, originalUrl }, res) {
    console.log("userData from within newuser function", userData)
    User.forge(userData)
      .save()
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        console.log(`userController.newUser - Error: ${err}`);
        res.status(404).json({
          error: {
            message: 'Cannot create user',
          },
          request: {
            endpoint: baseUrl,
            url: originalUrl,
            content: userData,
          },
        });
      });
  },
};

module.exports = userController;
