/* SWN Math */

swn.math = {

	die : function(qty, die, mod) {
		var ret = mod;
		for (var i = 0; i < qty; i++) {
			ret += swn.math.dieN(die);
		}
		return ret;
	},

	dieN : function(die) {
		return Math.floor(Math.random() * die) + 1
	},

	attr : function() {
		var ret = swn.math.die(3, 6, 0);
		return ret;
	},

	modifier : function(attr) {
		switch (true) {
		case attr == 3:
			return -2;
		case attr >= 4 && attr <= 8:
			return -1;
		case attr >= 8 && attr <= 13:
			return 0;
		case attr >= 14 && attr <= 17:
			return 1;
		case attr == 18:
			return 2;
		}
		return NaN;
	},

	background : function() {
		var len = _.size(swn.backgrounds);
		var b = swn.math.die(1, len, -1);
		var keys = _.keys(swn.backgrounds);
		var key = keys[b];
		return key;
	},

	letter : function() {
		var ret = String.fromCharCode(65 + swn.math.dieN(26) - 1);
		return ret;
	},

	digit : function() {
		var ret = (swn.math.dieN(10) - 1) + "";
		return ret;
	},

	/* generate a name - following structure from We (1924). */
	genWeName : function() {
		var letterCount = 1;
		var digitCount = 4;
		return swn.math.genName(letterCount, digitCount);
	},

	/* generate a name - following structure from THX-1138 (1971). */
	genThxName : function() {
		var letterCount = 3;
		var digitCount = 5;
		return swn.math.genName(letterCount, digitCount);
	},

	/* generate future name, with a combination of letters and numbers */
	genName : function(letterCount, digitCount) {
		var name = "";
		for (var i = 0; i < letterCount; i++) {
			name += swn.math.letter();
		}
		name += "-";
		var number = "";
		for (var i = 0; i < digitCount; i++) {
			number += swn.math.digit();
		}
		number = parseInt(number, 10);
		name += number;
		return name;
	}
};
