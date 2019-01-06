$(document).ready(function() {
	swn.init();
})

/* SWN App singleton */

var swn = {
	/* character attributes are stored in this model */
	attrs: {
		"str": 10,
		"dex": 10,
		"con": 10,
		"int": 10,
		"wis": 10,
		"cha": 10,
	},
	/* attrOverridden: user has option to override one attribute when rolling. */
	attrOverridden: false,	
	init: function() {
		swn.initCmds();
	},
	initCmds: function() {
		$(".swn-cmd-reset").on("click", swn.cmds.reset);
		$(".swn-cmd-attributes-roll button:first-of-type").on("click", swn.cmds.attributesRoll);
		$(".swn-cmd-attributes-assign button:first-of-type").on("click", swn.cmds.attributesAssign);
	}
};