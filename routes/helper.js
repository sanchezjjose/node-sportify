
var helper = {

  isAuthenticated : function(req, res, next) {

	  if (req.cookies.PLAY_SPORTIFY_SESSION)
	    return next();

	  res.redirect('/login');
	},

  /**
	 * Ensures the user context is set to the session through this flow:
	 * 
	 * 1. Check session for 'userContext' object
	 * 2. If not present, fetch it via an http request
	 * 3. Set it to the session
	 */
	getUserContext : function(req, res, next) {
	  req.session.userContext = { 'team_id' : 654321 };

	  next();
	}

};

module.exports = Object.create(helper);
