"use strict";

const { assert } = require('chai');

const CheckRuc = require('../lib');

describe('Checking RUC', function () {
	it('Should return false if ruc is not present', function () {
		assert.equal(false, CheckRuc());
	});

	it('should return false if ruc does not have 11 digits', function () {
		assert.equal(false, CheckRuc('2029200548'));
	});

	it('should return false if ruc does not start with 10, 15, 16, 17, 20', function () {
		assert.equal(false, CheckRuc('11292005483'));
		assert.equal(false, CheckRuc('12292005483'));
		assert.equal(false, CheckRuc('18292005483'));
		assert.equal(false, CheckRuc('21292005483'));
	});

	it('should return true if ruc meet the whole criteria', function () {
		assert.equal(true, CheckRuc('10460033280'));
		assert.equal(true, CheckRuc('10460033271'));
		assert.equal(true, CheckRuc('20504561292'));
		assert.equal(true, CheckRuc('20600543050'));
	});
});
