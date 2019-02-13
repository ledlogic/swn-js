/* SWN Skills */

swn.classes = {
	data : {
		"expert" : {
			name : "Expert"
		},
		"psychic" : {
			name : "Psychic"
		},
		"warrior" : {
			name : "Warrior"
		},
		"adventurer" : {
			name : "Adventurer"
		}
	},
	
	selClass: null,

	init: function() {
	},
	
	complete: function() {
		console.log("swn.classes.complete");
		
		$(".swn-cmd-classes-accept").addClass("swn-hidden");
	}
};
