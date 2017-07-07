'use-strict';

var helper = require('test-helper');
var request = require('supertest');
var assert = require('chai').assert;
var testApp = helper.app;

describe('services test', function() {

	it('GET (valid)', function() {
		return request(testApp)
			.get('/test')
			.expect(200)
			.expect(function(res) {
				assert.deepEqual(res.body, {
					GET: 'SUCCESS'
				});
			});
	});

	it('POST (valid)', function() {
		var req = {
			firstName: 'Craig',
			lastName: 'Welch'
		};

		return request(testApp)
			.post('/test')
			.send(req)
			.expect(200)
			.expect(function(res) {
				assert.deepEqual(res.body, {
					POST: req
				});
			});
	});

	it('POST (invalid)', function() {
		var req = {
			firstName: 'Craig'
		};

		return request(testApp)
			.post('/test')
			.send(req)
			.expect(400)
			.expect(function(res) {
				assert(res.body !== null);
				assert(res.body.errorMsg === "Schema Validation Error");
			});
	});
});
