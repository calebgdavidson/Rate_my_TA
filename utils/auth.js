const withAuth = (req, res, next) => {

  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    next();
  }
};
  
const hasAuth = (req, res, next) => {

  if (!req.session.loggedIn) {
    next();
  } else {
    res.redirect('/');
  }
};


  module.exports = { withAuth, hasAuth };