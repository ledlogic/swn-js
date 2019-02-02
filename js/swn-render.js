/* SWN Render */

swn.render = {
	/* general rendering methods */
	signed: function(n) {
		var ret = n;
		if (n > 0) {
			n = "+" + n;
		}
		return n;
	},
	
	/* basics rendering methods */
	basics: function() {
		var name = swn.name ? swn.name : "";
		var backgroundName = swn.background ? (swn.backgrounds[swn.background].name ? swn.backgrounds[swn.background].name : "") : "";

		var h=["<h3>Basics</h3>"];
		h[h.length]="<table class=\"swn-basics-table\">";
		h[h.length]="<tr>";
		h[h.length]="<tr>";
		h[h.length]="<td class=\"swn-attr-label\">Name</td>";
		h[h.length]="<td class=\"swn-attr-value\">" + name + "</td>";
		h[h.length]="</tr>";
		if (backgroundName) {
			h[h.length]="<td class=\"swn-attr-label\">Background</td>";
			h[h.length]="<td class=\"swn-attr-value\">" + backgroundName + "</td>";
			h[h.length]="</tr>";
		}
		h[h.length]="</table>";
		$(".swn-basics").html("").append(h.join("\n"));
		$(".swn-basics").removeClass("swn-hidden");
		$(".swn-cmd-attr-override").on("click", swn.cmds.attributeOverride);		
	},
	basicsSelect: function() {
		var s = ["<select class=\"browser-default custom-select swn-cmd-background-select\">"];
		s[s.length] = "<option value=\"\"></option>";
		
		var keys = _.keys(swn.backgrounds);
		_.each(keys, function(key) {
			s[s.length] = "<option value=\"" + key + "\">" + swn.backgrounds[key].name + "</option>";
		});
		s[s.length] = "</select>";
		s[s.length]="<span class=\"swn-cmd swn-cmd-background-accept\"><button>Accept</button></span>";
		var select = s.join("");
		
		var h=["<h3>Basics</h3>"];
		h[h.length]="<table class=\"swn-basics-table\">";
		h[h.length]="<tr>";
		h[h.length]="<tr>";
		h[h.length]="<td class=\"swn-attr-label\">Background</td>";
		h[h.length]="<td>" + select + "</td>";
		h[h.length]="</tr>";
		h[h.length]="</table>";
		$(".swn-basics").html("").append(h.join("\n"));
		$(".swn-basics").removeClass("swn-hidden");
		
		$(".swn-cmd-background-accept").on("click", swn.cmds.backgroundSelectAccept);		
	},
	
	/* attribute rendering methods */
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
		for (var attr in swn.attrs) {
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
		$(".swn-attributes").removeClass("swn-hidden");
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
		$(".swn-attributes").removeClass("swn-hidden");
		$(".swn-cmd-attr-select").on("change", swn.cmds.attributeSelect);
		$(".swn-cmd-attr-accept").on("click", swn.cmds.attributeSelectAccept);
	},
	
	/* skills rendering methods */
	skills: function() {
		var h=["<h3>Skills"];
		h[h.length]="</h3>";
		h[h.length]="<table class=\"swn-skills-table\">";
		h[h.length]="<tr>";
		h[h.length]="<td class=\"swn-skills-label\">Skill</td>";
		h[h.length]="<td class=\"swn-skills-label\">Rating</td>";
		_.each(swn.skills, function(skill) {
			var skillName = skill.name;
			var skillRating = swn.render.signed(skill.rating);
			h[h.length]="<tr>";
			h[h.length]="<td class=\"swn-skill-name\">" + skillName + "</td>";
			h[h.length]="<td class=\"swn-skill-rating swn-skill-rating" + skillRating + "\">" + skillRating + "</td>";
			h[h.length]="</tr>";
		});
		h[h.length]="</table>";
		$(".swn-skills").html("").append(h.join("\n"));
		$(".swn-skills").removeClass("swn-hidden");
	}

};
