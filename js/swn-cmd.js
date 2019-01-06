/* SWN Commands */

swn.cmds = {
	/* global commands */
	reset: function() {
		window.location.reload();
	},

	/* attribute commands */
	attributesRoll: function() {
		// initialize display
		$(".swn-attributes-rolling").removeClass("swn-hidden");
		$(".swn-cmd-attributes-assign").addClass("swn-hidden");
		
		// roll attributes
		for (attr in swn.attrs) {
			var a = swn.math.attr();
			swn.attrs[attr] = a;
		}
		
		// render attributes
		swn.render.attributes();
		
		$(".swn-attributes-override").removeClass("swn-hidden");
		$(".swn-cmd-attributes-roll button:first-of-type").addClass("swn-hidden");
	},
	/** 
	 * attributeOverride: if the user selects the roll option, they can select one attribute to
	 * set to 14.
	 */
	attributeOverride: function() {
		var $that = $(this);
		var attr = $that.data("swn-attr");
		if (attr != "skip") {
			swn.attrs[attr] = 14;
		}
		$(".swn-attributes-attribute-override").html("[" + attr + "]");
		swn.attrOverridden = true;
		swn.render.attributes();
	},
	attributesAssign: function() {
		alert(3);
	}
};