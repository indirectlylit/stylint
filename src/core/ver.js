'use strict';

// called when --version or -v flags used, just displays version number
var ver = function() {
	return console.log( '\nStylint version: 1.0.0\n' );
};

module.exports = ver;