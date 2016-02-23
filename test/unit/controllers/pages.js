'use strict';

const Code = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;
const before = lab.before;
const beforeEach = lab.beforeEach;
const afterEach = lab.afterEach;
const expect = Code.expect;

describe('pages', function () {

    let server;

    before(function (done) {

        require('../../../server').createServer(function (err, createdServer) {

            server = createdServer;
            expect(err).to.not.exist();
            done(err);
        });
    });

    it('index route should return a 200', function (done) {

        const options = {
            url: '/',
            method: 'GET'
        };

        server.inject(options, function (response) {

            expect(response.statusCode).equal(200);

            done();
        });
    });

});
