var config = {},
    isDev = process.env.NODE_ENV == 'development';

config.SPORTIFY_SERVICE_HOST = isDev ? (process.env.SPORTIFY_1_PORT_9000_TCP_ADDR || 'localhost') : 'sportify-app.herokuapp.com';
config.SPORTIFY_SERVICE_PORT = isDev ? '9000' : '80';

config.GOOGLE_MAPS_API_HOST = 'maps.googleapis.com';
config.GOOGLE_MAPS_API_PORT = '443';
config.GOOGLE_MAPS_SERVER_API_KEY = process.env.GOOGLE_MAPS_SERVER_API_KEY;

module.exports = config;
