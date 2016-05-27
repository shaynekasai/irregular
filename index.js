var irregularVerbs = require('./irregular_verbs.json');

function getIrregularVerb(verb) {
	if (verb === '') {
		return Error('No base form verb provided.');
	}

	return irregularVerbs.filter(function(verbItem) {
		return verbItem.BF === verb;
	});
}

module.exports = getIrregularVerb;