var test = require('tape');
var getIrregularVerb = require('../index.js');

test('simple test', function(t) {
	t.equal(getIrregularVerb('find').length, 1);
	t.end();
});

