const router = require('express').Router();
const filmsController = require('../controllers/films');
const authController = require('../controllers/auth');

router
  .post('/login', authController.login)
  .post('/register', authController.register);

router.route('/films')
  .get(filmsController.index)
  .post(filmsController.create);

router.route('/films/:id')
  .get(filmsController.show)
  .put(filmsController.update)
  .delete(filmsController.delete);

module.exports = router;