'use strict';

/**
 * Sorts letters in words alphabetically, and then the received words in a sentence too.
 * It will capitalize the first letter of each word, and lowercase the rest.
 * @param {string} string - input string
 */

const sort = string => {
	if (typeof(string) !== 'string') {
		throw new TypeError(`${typeof(string)} не является строкой`);
	}

	const words = string.toLowerCase().split(" ");

	const collator = new Intl.Collator();

	const sortedWords = words.map(word => 
		word.split("").sort((a, b) => 
			collator.compare(a, b)).join("")).sort((a, b) => 
			collator.compare(a, b));

	const sortedWordsCorrectForm = sortedWords.map(word => word[0].toUpperCase() + word.slice(1)).join(" ");

	return sortedWordsCorrectForm;
}
