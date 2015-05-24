
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

// a middleware sub-stack which handles GET requests to /user/:id
// app.get('/*', function (req, res, next) {

//   // if user id is 0, skip to the next router
//   if (req.cookies.PLAY_SPORTIFY_SESSION) {
//     req.session.requestContext = {'team_id' : 654321};

//     console.log("ZZZ");
//     next('route');
//   }
//   // else pass the control to the next middleware in this stack
//   else {
//     console.log("XXX");
//     next();
//   } 

// }, function (req, res, next) {
//   // res.render('login', { title: 'Login', layout: 'login_reg' });
//   console.log('YYYY');

//   // req.location('/login');
//   res.render('login', { title: 'Login', layout: 'login_reg' }); // TODO: send error back to client

//   // res.redirect('/login');
//   // res.end();
// });

module.exports = Object.create(helper);
