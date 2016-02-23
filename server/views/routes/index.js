'use strict';

const Pages = require('../../controllers/pages');

/**
 * Contains the list of all routes, i.e. methods, paths and the config functions
 * that take care of the actions
 */
exports.endpoints = [
    { method: 'GET',    path: '/',                                  config: Pages.index }
];
