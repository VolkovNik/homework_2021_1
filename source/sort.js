'use strict';

/**
 * Sorts letters in words alphabetically, and then the received words in a sentence too.
 * It will capitalize the first letter of each word, and lowercase the rest.
 * @param {string} string - input string
 * @returns {string} - output string, where letters in words sorted alphabetically and words also sorted
 */

const sort = (inputUnsortedString) => {
	if (typeof inputUnsortedString !== 'string') {
		throw new TypeError(`${typeof inputUnsortedString} не является строкой`);
	}

	if (!/^[a-zа-яёA-ZА-ЯЁ ]+$/.test(inputUnsortedString)) {
		throw new SyntaxError(`${inputUnsortedString} содержит не только буквы`);
	}

	const words = inputUnsortedString.toLowerCase().split(' ');

	const collator = new Intl.Collator();

	const sortedWords = words.map((word) => word
		.split('').sort((a, b) => collator
		.compare(a, b)).join(''))
		.sort((a, b) => collator.compare(a, b));

	return sortedWords.map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');
}
