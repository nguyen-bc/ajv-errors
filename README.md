# AJV-ERRORS
[![Build Status](https://travis-ci.org/nguyen-bc/ajv-errors.svg?branch=master)](https://travis-ci.org/nguyen-bc/ajv-errors)
[![Coverage Status](https://coveralls.io/repos/github/nguyen-bc/ajv-errors/badge.svg?branch=master)](https://coveralls.io/github/nguyen-bc/ajv-errors?branch=master)

### INSTALL
```shell
yarn add ajv-errors
```
### USAGE
```javascript
var ajvErrors = require('ajv-errors');
var ajv = new Ajv({ allErrors: true });
var isValid = ajv.validate(schema, data);

if (!isValid) {
  var errors = ajvErrors(ajv.errors);
  // errors will be an object like below
  /* { 
      field1: 'error message',
      field2: 'error message'
    }
  */
}
```