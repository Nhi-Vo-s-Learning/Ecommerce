const http = require('http');
const app = require('./config/express');
const logger = require('./config/logger');
const { port } = require('./config/vars');

const httpServer = http.createServer(app);

httpServer.listen(port, () => {
    logger.info(`Server is running on port ${port}`);
});

