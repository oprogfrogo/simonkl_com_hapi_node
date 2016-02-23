'use strict';

const server = require('./server');
const log = require('mod-logger')(require('./package.json').name);

server.createServer(function (err, server) {

    if (err) {

        // Log error and exit
        log.error(err);
        process.exit(1);

        return;
    }

    server.start(function (err) {

        if (err) {
            log.error(`failed to start server: ${err}`);

            // Log error and exit
            log.error(err);
            process.exit(1);

            return;
        }

        log.info(`Server started at: ${server.info.uri}`);
    });

});
