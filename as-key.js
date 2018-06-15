'use strict';

module.exports = asKey;

function asKey(value) {
	if (typeof value === 'symbol') {
		// Avoid converting a symbol to a string.
		return value;
	}

	if (value == null || typeof value.toString !== 'function') {
		// Values that do not have a `toString` method:
		Object.prototype.toString.call(value);
	}

	// Everything else gets converted to string regularly.
	return value.toString();
}