const mongoose = require('mongoose');
const logger = require('./logger');
const {env, mongo} = require('./vars');

// set mongoose Promise to Bluebird
mongoose.Promise = Promise;

// Exit application on errors
mongoose.connection.on('error', (err) => {
    const error = new Error(`MongoDB connection error: ${err}`);
    logger.error(error);
});

// print mongoose logs in dev env
if (env === 'development') {
    mongoose.set('debug', true);
}

/**
 * Connect to mongo db
 *
 * @returns {object} Mongoose connection
 * @public
 */
exports.connect = () => {
    mongoose
        .connect(mongo.uri)
        .then(() => console.log('mongoDB connected...'));
    return mongoose.connection;
};