swn.render = {
	attributes: function() {
		var h=["<h3>Attributes"];
		if (!swn.attrOverridden) {
			h[h.length]="<span class=\"swn-cmd swn-cmd-attr-override\" data-swn-attr=\"skip\"><button>Skip Override</button></span>";
		}
		h[h.length]="</h3>";
		h[h.length]="<table class=\"swn-attr-table\">";
		h[h.length]="<tr>";
		h[h.length]="<td class=\"swn-attr-label\">attribute</td>";
		h[h.length]="<td class=\"swn-attr-label\">score</td>";
		h[h.length]="<td class=\"swn-attr-label\">modifier</td>";
		h[h.length]="<td class=\"swn-attr-label\"></td>";
		for (attr in swn.attrs) {
			var score = swn.attrs[attr];
			var modifier = swn.render.signed(swn.math.modifier(score));
			
			h[h.length]="<tr>";
			h[h.length]="<td class=\"swn-attr-label\">" + attr + "</td>";
			h[h.length]="<td class=\"swn-attr-score\">" + score + "</td>";
			h[h.length]="<td class=\"swn-attr-modifier\">" + modifier + "</td>";			
			if (!swn.attrOverridden && swn.attrs[attr] < 14) {
				h[h.length]="<td><button class=\"swn-cmd-attr-override\" data-swn-attr=\"" + attr + "\">Set to 14?</button></td>";
			}
			h[h.length]="</tr>";
		}
		h[h.length]="</table>";
		$(".swn-attributes").html("").append(h.join("\n"));
		$(".swn-attributes").addClass("active");
		$(".swn-cmd-attr-override").on("click", swn.cmds.attributeOverride);
	},
	attributesSelect: function() {
		var h=["<h3>Attributes"];
		if (!swn.attrOverridden) {
			h[h.length]="<span class=\"swn-cmd swn-cmd-attr-accept swn-hidden\"><button>Accept</button></span>";
		}
		h[h.length]="</h3>";
		h[h.length]="<table class=\"swn-attr-table\">";
		h[h.length]="<tr>";
		h[h.length]="<td class=\"swn-attr-label\">attribute</td>";
		h[h.length]="<td class=\"swn-attr-label\">score</td>";
		h[h.length]="<td class=\"swn-attr-label\">modifier</td>";
		h[h.length]="<td class=\"swn-attr-label\"></td>";
		
		for (var attr in swn.attrs) {
			var s = ["<select class=\"browser-default custom-select swn-cmd-attr-select\" data-swn-attr=\"" + attr + "\">"];
			s[s.length] = "<option value=\"0\">?</option>";
			for (var i=0; i < swn.attrDefaults.length; i++) {
				var val = swn.attrDefaults[i];
				s[s.length] = "<option value=\"" + val + "\">" + val + "</option>";
			}
			s[s.length] = "</select>";
			var select = s.join("");

			var score = swn.attrs[attr];			
			h[h.length]="<tr>";
			h[h.length]="<td class=\"swn-attr-label\">" + attr + "</td>";
			h[h.length]="<td class=\"swn-attr-score\">" + select + "</td>";
			h[h.length]="<td class=\"swn-attr-modifier\" data-swn-attr=\"" + attr + "\"></td>";			
			h[h.length]="</tr>";
		}
		h[h.length]="</table>";
		$(".swn-attributes").html("").append(h.join("\n"));
		$(".swn-attributes").addClass("active");
		$(".swn-cmd-attr-select").on("change", swn.cmds.attributeSelect);
		$(".swn-cmd-attr-accept").on("click", swn.cmds.attributeSelectAccept);
	},
	signed: function(n) {
		var ret = n;
		if (n > 0) {
			n = "+" + n;
		}
		return n;
	}
};
