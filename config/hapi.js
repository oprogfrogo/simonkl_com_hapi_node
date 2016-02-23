'use strict';

const environment = require('./environment');
const Path = require('path');

const corsOrigins = environment.getEnvironmentVariable(
    'ENIGMA_ENCRYPTOR_CORS',
    {
        development: 'http://localhost:*',
        test: 'http://localhost:*'
    }
).split(',').map(item => item.trim());

const config = {
    connection: {
        host: '0.0.0.0',
        port: 3000,
        routes: {
            cors: {
                origin: corsOrigins
            }
        }
    },
    hapi: {
        connections: {
            state: {
                clearInvalid: true
            }
        }
    },
    email: {
        templates: Path.join(__dirname, '../src/views/emails')
    }
};

module.exports = config;
