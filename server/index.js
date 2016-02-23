'use strict';

const config = require('../config');
const Hapi = require('hapi');
const Path = require('path');
const Hoek = require('hoek');
const Handlebars = require('handlebars');
const Routes = require('./routes');

const createServer = function createServer(callback) {

    const server = new Hapi.Server({
        connections: {
            routes: {
                files: {
                    relativeTo: Path.join(__dirname, 'public')
                }
            }
        }
    });

    server.connection(config.hapi.connection);

    server.register(require('./plugins'), function (err) {

        Hoek.assert(!err, err);

        /* $lab:coverage:off$ */
        if (err) {
            throw err;
        }
        /* $lab:coverage:on$ */

        // Set our strategy
        server.auth.strategy('session', 'cookie', {
            password: 'worldofepoch', // cookie secret
            cookie: 'session', // Cookie name
            isSecure: false, // required for non-https applications
            ttl: 24 * 60 * 60 * 1000 // Set session to 1 day
        });

        // Set our view engine, we'll use handlebars
        server.views({
            engines: {
                html: Handlebars
            },
            relativeTo: __dirname,
            path: './views',
            layout: false
        });

        server.ext('onRequest', function (request, reply) {

            return reply.continue();
        });

        // Add the routes
        server.route(Routes.endpoints);

        callback(err, server);
    });
};

module.exports = {
    createServer
};
