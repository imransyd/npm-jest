const makeHTML = require('../uppgift-1.js');

// här kommer testen

describe('makeHTML test suite', () => {
	test('makeHTML empty string', () => {
		let actual = makeHTML('');
		let expected = '<p></p>';
		expect(actual).toBe(expected);
	});

	test('makeHTML normal string', () => {
		expect(makeHTML('yellow')).toBe('<p>yellow</p>');
	})
});