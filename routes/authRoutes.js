const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys');
    }
  );

  //logs user out
  app.get(
    '/api/logout',
    (req, res) => {
      req.logout();
      res.redirect('/');
    }
  );

  //sends current user logged in
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

}