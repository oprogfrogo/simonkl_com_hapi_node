'use strict';

const config = require('../../config');
const Inert = require('inert');
const Handlebars = require('handlebars');
const vision = require('vision');

const plugins = [
    {
        register: vision
    },
    {
        register: require('hapi-mailer'),
        options: {
            transport: {
                host: '127.0.0.1',
                port: 25
            },
            views: {
                engines: {
                    html: {
                        module: Handlebars.create(),
                        path: config.hapi.email.templates
                    }
                }
            }
        }
    },
    {
        register: require('hapi-auth-cookie')
    },
    {
        register: Inert
    }
];

module.exports = plugins;
