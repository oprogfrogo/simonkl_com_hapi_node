'use strict';

const config = require('../config');
const log = require('mod-logger')(require('../package.json').name);

exports.index = {
    auth: {
        mode: 'try',
        strategy: 'session'
    },
    handler: function (request, reply) {

        return reply.view('index');
    }
};
