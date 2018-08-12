var test = require('ava');
var ajvErrors = require('../../lib');

test('field name is missingProperty', t => {
  var errors = ajvErrors([{
    params: { missingProperty: 'aField' },
    dataPath: '',
    message: 'shoud provide a required property \\"aField\\"'
  }]);
  t.is(Object.keys(errors).length, 1);
  t.is(typeof errors.aField, 'string');
});

test('field name is value from dataPath if there are no params', t => {
  var errors = ajvErrors([{
    dataPath: '.aField',
    message: 'an error message'
  }]);
  t.is(Object.keys(errors).length, 1);
  t.is(typeof errors.aField, 'string');
});

test('field name is value from dataPath if params have not missingProperty', t => {
  var errors = ajvErrors([{
    params: {},
    dataPath: '.aField',
    message: 'an error message'
  }]);
  t.is(Object.keys(errors).length, 1);
  t.is(typeof errors.aField, 'string');
});

test('field name will be created by dataPath and missingProperty', t => {
  var errors = ajvErrors([{
    params: { missingProperty: 'aField' },
    dataPath: '.items[0]',
    message: 'shoud provide a required property \\"aField\\"'
  }]);
  t.is(Object.keys(errors).length, 1);
  t.is(typeof errors['items[0].aField'], 'string');
});

test('return all errors messages', t => {
  var errors = ajvErrors([{
    dataPath: '.aField1',
    message: 'an error message'
  },
  {
    dataPath: '.aField2',
    message: 'an error message'
  }
]);
  t.is(Object.keys(errors).length, 2);
  t.is(typeof errors.aField1, 'string');
  t.is(typeof errors.aField2, 'string');
});