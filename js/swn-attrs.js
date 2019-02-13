swn.attrs = {

	data : {
		"str" : 0,
		"dex" : 0,
		"con" : 0,
		"int" : 0,
		"wis" : 0,
		"cha" : 0,
	},

	defaults : [ 14, 12, 11, 10, 9, 7 ],

	/* overridden: user has option to override one attribute when rolling. */
	overridden : false,

	quick : 0,

	init : function() {
	},

	incr : function(s, incr) {
		console.log("swn.attrs.incr, s[" + s + "], incr[" + incr + "]");

		var c = s.split(",");
		var skill;
		if (c.length > 1) {
			for (var j = 0; j < incr; j++) {
				swn.attrs.quick++;
				for (var i = 0; i < c.length; i++) {
					var attr = c[i];
					var h = "<button"
						+ " class=\"cmd-attr-quick-incr\""
						+ " data-quick=\"" + swn.attrs.quick + "\""
						+ " data-attr=\"" + attr + "\">"
						+ "Incr " + attr
						+ "</button>";
					$(".swn-cmd-attrs-quick-choices").append(h);
				}
			}
			$(".swn-cmd-attrs-quick-choices").removeClass("swn-hidden");
			$(".cmd-attr-quick-incr").on("click", swn.cmds.attrIncr);
		}
	}

};