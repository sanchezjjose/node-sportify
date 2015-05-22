var Helper = function() {}

Helper.prototype.isAuthenticated = function(req, res, next) {

  if (req.cookies.PLAY_SPORTIFY_SESSION)
    return next();

  res.redirect('/login');
}

module.exports = Helper;