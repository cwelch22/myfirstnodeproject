'use-strict';

//test-helper initializes schemas
require('test-helper');
var schema = require('service-schema');
var assert = require('chai').assert;

describe('service-schema test', function() {

  it('Ensure schemas were grabbed', function() {
    assert(schema.original !== null);
    assert(Object.keys(schema.original).length > 0);
  });
});
