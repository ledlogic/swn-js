/* SWN Skills */

swn.skills = {
	data: {
		"administer" : {
			name : "Administer"
		},
		"connect" : {
			name : "Connect"
		},
		"exert" : {
			name : "Exert"
		},
		"fix" : {
			name : "Fix"
		},
		"heal" : {
			name : "Heal"
		},
		"know" : {
			name : "Know"
		},
		"lead" : {
			name : "Lead"
		},
		"notice" : {
			name : "Notice"
		},
		"perform" : {
			name : "Perform"
		},
		"program" : {
			name : "Program"
		},
		"punch" : {
			name : "Punch"
		},
		"shoot" : {
			name : "Shoot"
		},
		"sneak" : {
			name : "Sneak"
		},
		"stab" : {
			name : "Stab"
		},
		"survive" : {
			name : "Survive"
		},
		"talk" : {
			name : "Talk"
		},
		"trade" : {
			name : "Trade"
		},
		"work" : {
			name : "Work"
		}
	},
	
	quick: 0,
	init: function() {
		console.log("swn.skills.init");

		// initialize skill ratings
		_.each(swn.skills.data, function(skill) {
			skill.rating = -1;
		});
	},
	incr: function(s) {
		console.log("swn.skills.incr, s[" + s + "]");
		
		var c = s.split(",");
		var skill;
		if (c.length > 1) {
			swn.skills.quick++;
			for (var i=0;i<c.length;i++) {
				var skill = c[i];
				var h = "<button class=\"cmd-quick-incr\" data-quick=\"" + swn.skills.quick + "\" data-skill=\"" + skill + "\">Incr " + skill + "</button>";	
				$(".swn-cmd-skills-quick-choices").append(h);
			}
			$(".swn-cmd-skills-quick-choices").removeClass("swn-hidden");
			$(".cmd-quick-incr").on("click", swn.cmds.skillIncr);		
		} else if (skill = swn.skills.data[s]) {
			swn.log(["skill.rating",skill.rating]);
			skill.rating++;
			swn.log(["skill.rating",skill.rating]);
		} else {
			// not exact skill
			swn.log(["not exact skill",skill]);
			switch (skill) {
			    case "any combat":
			    	break;
			    default:
			    	swn.log("Unknown skill");
			}			
		}
		
		// any compbat = stab, shoot, or punch
		// any stat
		// any physical = strength, dexterity, constitution
		// any mental = intelligence, wisdom, charisma
	}
};
