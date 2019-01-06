swn.render = {
	attributes: function() {
		var h=["<h3>Attributes"];
		if (!swn.attrOverridden) {
			h[h.length]="<span class=\"swn-cmd swn-cmd-attr-override\" data-swn-attr=\"skip\"><button>Skip Override</button></span>";
		}
		h[h.length]="</h3>";
		h[h.length]="<table class=\"swn-attr-table\">";
		for (attr in swn.attrs) {
			h[h.length]="<tr>";
			h[h.length]="<td class=\"swn-attr-label\">" + attr + "</td>";
			h[h.length]="<td>" + swn.attrs[attr] + "</td>";
			
			if (!swn.attrOverridden && swn.attrs[attr] < 14) {
				h[h.length]="<td><button class=\"swn-cmd-attr-override\" data-swn-attr=\"" + attr + "\">Set to 14?</button></td>";
			}
			h[h.length]="</tr>";
		}
		h[h.length]="</table>";
		$(".swn-attributes").html("").append(h.join("\n"));
		$(".swn-attributes").addClass("active");
		$(".swn-cmd-attr-override").on("click", swn.cmds.attributeOverride);
	}
};
