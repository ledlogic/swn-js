$(document).ready(function() {
	swn.init();
})

/* SWN App singleton */

var swn = {

	/* background: swn background */
	background : null,

	/* name: swn character name */
	name : null,

	log : function(s) {
		if (typeof (window.console) != "undefined") {
			console.log(s);
		}
	},

	init : function() {
		console.log("swn.init");
		swn.cmds.init();
		swn.attrs.init();
		swn.skills.init();
	}
};