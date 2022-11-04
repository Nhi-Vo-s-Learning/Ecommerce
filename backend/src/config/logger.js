const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.label({ label: 'E-Invoice Logging' }),
        winston.format.prettyPrint(),
        winston.format.errors({ stack: true }),
    ),
    transports: [
        //
        // - Write to all logs with level `info` and below to `combined.log`
        // - Write all logs errors (and below) to `errors.log`.
        //
        new winston.transports.File({
            filename: 'logs/errors.log',
            level: 'error',
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.label({ label: 'E-Commerce Logging' }),
                winston.format.prettyPrint(),
                winston.format.errors({ stack: true }),
            ),
        }),
        new winston.transports.File({
            filename: 'logs/combined.log',
            level: 'debug',
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.label({ label: 'E-Commerce Logging' }),
                winston.format.prettyPrint(),
                winston.format.errors({ stack: true }),
            ),
        }),
    ],
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        level: 'debug',
    }));
} else {
    logger.add(new winston.transports.Console({
        level: 'info',
        format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.label({ label: 'E-Commerce Logging' }),
            winston.format.prettyPrint(),
            winston.format.errors({ stack: true }),
        ),
    }));
}

logger.stream = {
    write: (message) => {
        logger.info(message.trim());
    },
};

module.exports = logger;