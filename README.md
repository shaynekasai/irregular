# Irregular

[![Build Status](https://travis-ci.org/shaynekasai/irregular.svg?branch=master)](https://travis-ci.org/shaynekasai/irregular)

This is a Node.js module that allows you to search for irregular verb tenses.

# Usage

```javascript
var getIrregularVerb = require('irregular');
console.log(getIrregularVerb('find'));
```

getIrregularVerb() will return an object with the following:

- BF: Base form verb
- PS: Past simple
- PP: Past participle
- TPS: Third person singular
- PPG: Present participle gerund


