'use strict';

const Code = require('code');
const Lab = require('lab');

const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;

describe('server', function () {

    it('exports a createServer function', function (done) {

        const server = require('../../server');

        expect(server).to.exist();
        expect(server.createServer).to.be.a.function();

        done();
    });

    it('createServer returns a created server', function (done) {

        const server = require('../../server');

        server.createServer(function (err, server) {

            expect(server).to.not.be.null();
            done();
        });
    });

});
