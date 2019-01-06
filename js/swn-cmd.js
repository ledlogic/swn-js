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
		$(".swn-cmd-attributes-roll button").addClass("swn-hidden");
		
		// render attributes selector
		swn.render.attributesSelect();
	},
	/**
	 * attributeSelect: if the user selects the array option, they can select attributes from an array
	 */
	attributeSelect: function() {
		var $that = $(this);
		var attr = $that.data("swn-attr");
		var value = parseInt($that.val(), 10);
		var modifier = value === 0 ? "" : swn.render.signed(swn.math.modifier(value));
		
		console.log(["attr",attr]);
		console.log(["value",value]);

		// show previous option in other selects
		var prevValue = swn.attrs[attr];
		var $showOpts = $(".swn-cmd-attr-select").find("option[value=" + prevValue + "]");
		console.log(["$showOpts", $showOpts]);
		$showOpts.show();

		// set new value
		swn.attrs[attr] = value;	
		
		$(".swn-attr-modifier[data-swn-attr=" + attr + "]").html(modifier);

		if (value != 0) {
			var $hideOpts = $(".swn-cmd-attr-select").not("[data-swn-attr=" + attr + "]").find("option[value=" + value + "]");
			$hideOpts.hide();
		}
		
		if (swn.cmds.attributesSelectComplete()) {
			$(".swn-cmd-attr-accept").removeClass("swn-hidden");
		}
	},
	attributesSelectComplete: function() {
		for (attr in swn.attrs) {
			var a = swn.attrs[attr];
			if (a === 0) {
				return false;
			}
		}
		return true;
	},
	attributeSelectAccept: function() {
		$(".swn-cmd-attr-accept").addClass("swn-hidden");
	}
};