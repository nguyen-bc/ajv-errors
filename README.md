# NEN-AJV-ERRORS
[![Build Status](https://travis-ci.org/nguyen-bc/ajv-errors.svg?branch=master)](https://travis-ci.org/nguyen-bc/ajv-errors)

make errors of [ajv](https://yarnpkg.com/en/package/ajv) to be more human readable format.

### INSTALL
```shell
yarn add ajv-errors
```
### USAGE
```javascript
var ajvErrors = require('ajv-errors');
var Ajv = require('ajv');
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