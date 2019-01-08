$(document).ready(function() {
	swn.init();
})

/* SWN App singleton */

var swn = {
	/* character attributes are stored in this model */
	attrs: {
		"str": 0,
		"dex": 0,
		"con": 0,
		"int": 0,
		"wis": 0,
		"cha": 0,
	},
	attrDefaults: [
	    14, 12, 11, 10, 9, 7
	],
	/* attrOverridden: user has option to override one attribute when rolling. */
	attrOverridden: false,
	background: null,
	
	init: function() {
		swn.cmds.init();
	}
};