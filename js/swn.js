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
	/* background: swn background */
	background: null,
	/* name: swn character name */
	name: null,
	
	log: function(s) {
		if (typeof(window.console) != "undefined") {
			console.log(s);
		}
	},
	
	init: function() {
		swn.cmds.init();
		
		// initialize skill ratings
		_.each(swn.skills, function(skill) {
			skill.rating = -1;
		});
	}
};