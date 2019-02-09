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
			swn.log(["not exact skill",s]);
			switch (s) {
			    case "any combat":
			    	swn.skills.incr("stab,shoot,punch");
			    	break;
			    case "any skill":
			    	swn.skills.incr("stab,shoot,punch");
			    	break;
			    case "+1 any stat":
			    	swn.attrs.incr("str,dex,con,int,wis,cha", 1);
			    	break;
			    case "+2 physical":
			    	swn.attrs.incr("str,dex,con", 2);
			    	break;
			    case "+2 mental":
			    	swn.attrs.incr("int,wis,cha", 2);
			    	break;
			    default:
			    	swn.log("Unknown skill");
			}			
		}
	}
};
