var config = {},
    isDev = process.env.NODE_ENV == 'development';

config.SPORTIFY_SERVICE_HOST = isDev ? 'localhost' : 'sportify-app.herokuapp.com';
config.SPORTIFY_SERVICE_PORT = '9000';

module.exports = config;
