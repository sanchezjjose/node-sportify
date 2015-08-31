var config = {},
    isDev = process.env.NODE_ENV == 'development';

config.SPORTIFY_SERVICE_HOST = isDev ? (process.env.SPORTIFY_1_PORT_9000_TCP_ADDR || 'localhost') : 'sportify-app.herokuapp.com';
config.SPORTIFY_SERVICE_PORT = isDev ? '9000' : '80';

module.exports = config;
