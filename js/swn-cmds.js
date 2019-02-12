/* SWN Commands */

swn.cmds = {
		
	init : function() {
		console.log("swn.cmds.init");

		$(".swn-cmd-reset").on("click", swn.cmds.reset);
		$(".swn-cmd-roll-classic button:first-of-type").on("click", swn.cmds.classicName);
		$(".swn-cmd-roll-new button:first-of-type").on("click", swn.cmds.newName);
		$(".swn-cmd-attributes-roll button:first-of-type").on("click", swn.cmds.attributesRoll);
		$(".swn-cmd-attributes-assign button:first-of-type").on("click", swn.cmds.attributesAssign);
		$(".swn-cmd-background-roll button:first-of-type").on("click", swn.cmds.backgroundRoll);
		$(".swn-cmd-background-assign button:first-of-type").on("click", swn.cmds.backgroundAssign);
		$(".swn-cmd-skills-quick button:first-of-type").on("click", swn.cmds.skillsQuick);
		$(".swn-cmd-skills-pick button:first-of-type").on("click", swn.cmds.skillsPick);
		$(".swn-cmd-skills-roll button:first-of-type").on("click", swn.cmds.skillsRoll);
	},
	
	/* global commands */
	reset: function() {
		window.location.reload();
	},

	/* name commands */
	
	classicName: function() {
		console.log("swn.cmds.classicName");

		var $that = $(this);
		if ($that.hasClass("swn-disabled")) {
			return;
		}
		
		// initialize display
		$(".swn-cmd-roll-classic button:first-of-type").addClass("swn-disabled");
		$(".swn-cmd-roll-new button:first-of-type").addClass("swn-disabled");
		$(".swn-name-rolling").removeClass("swn-hidden");
		
		// gen name
		var name = swn.math.genWeName();
		swn.name = name;
		$(".swn-name").html("[" + name + "]");
		
		// render basics
		swn.render.basics();

		$(".swn-cmd-attributes").removeClass("swn-hidden");
		$(".swn-cmd-roll-classic").addClass("swn-hidden");
		$(".swn-cmd-roll-new").addClass("swn-hidden");
	},
	
	newName: function() {
		console.log("swn.cmds.newName");
		
		var $that = $(this);
		if ($that.hasClass("swn-disabled")) {
			return;
		}

		// initialize display
		$(".swn-cmd-roll-classic button:first-of-type").addClass("swn-disabled");
		$(".swn-cmd-roll-new button:first-of-type").addClass("swn-disabled");
		$(".swn-name-rolling").removeClass("swn-hidden");
		
		// gen name
		var name = swn.math.genThxName();
		swn.name = name;
		$(".swn-name").html("[" + name + "]");
		
		// render basics
		swn.render.basics();

		$(".swn-cmd-attributes").removeClass("swn-hidden");
		$(".swn-cmd-roll-classic").addClass("swn-hidden");
		$(".swn-cmd-roll-new").addClass("swn-hidden");
	},
		
	/* attribute commands */
	
	attributesRoll: function() {
		console.log("swn.cmds.attributesRoll");
		
		var $that = $(this);
		if ($that.hasClass("swn-disabled")) {
			return;
		}
		
		// initialize display
		$(".swn-attributes-rolling").removeClass("swn-hidden");
		$(".swn-cmd-attributes-roll button:first-of-type").addClass("swn-disabled");
		$(".swn-cmd-attributes-assign button:first-of-type").addClass("swn-disabled");
		
		// roll attributes
		for (attr in swn.attrs.data) {
			var a = swn.math.attr();
			swn.attrs.data[attr] = a;
		}
		
		// render attributes
		swn.render.attributes();
		$(".swn-attributes").removeClass("swn-hidden");
	},
	
	/** 
	 * attributeOverride: if the user selects the roll option, they can select one attribute to
	 * set to 14.
	 */
	attributeOverride: function() {
		console.log("swn.cmds.attributeOverride");

		var $that = $(this);
		if ($that.hasClass("swn-disabled")) {
			return;
		}

		var $that = $(this);
		var attr = $that.data("swn-attr");
		if (attr != "skip") {
			swn.attrs.data[attr] = 14;
		}
		$(".swn-attributes-attribute-override").html("[" + attr + "]");
		
		swn.cmds.attributesComplete();
		swn.render.attributes();
	},
	
	attributesComplete: function() {
		swn.attrs.overridden = true;
		
		$(".swn-cmd-background").removeClass("swn-hidden");
		$(".swn-attributes-assigning").addClass("swn-hidden");
		$(".swn-cmd-attributes-roll").addClass("swn-hidden");
		
		$(".swn-attributes-assigned").removeClass("swn-hidden");
		$(".swn-cmd-attributes-roll").addClass("swn-hidden");
		$(".swn-cmd-attributes-assign").addClass("swn-hidden");
	},
	
	attributesAssign: function() {
		console.log("swn.cmds.attributesAssign");

		var $that = $(this);
		if ($that.hasClass("swn-disabled")) {
			return;
		}

		// initialize display
		$(".swn-attributes-assigning").removeClass("swn-hidden");
		$(".swn-cmd-attributes-roll button:first-of-type").addClass("swn-disabled");
		$(".swn-cmd-attributes-assign button:first-of-type").addClass("swn-disabled");
		
		// render attributes selector
		swn.render.attributesSelect();
	},
	
	/**
	 * attributeSelect: if the user selects the array option, they can select attributes from an array
	 */
	attributeSelect: function() {
		console.log("swn.cmds.attributeSelect");

		var $that = $(this);
		if ($that.hasClass("swn-disabled")) {
			return;
		}

		var attr = $that.data("swn-attr");
		var value = parseInt($that.val(), 10);
		var modifier = value === 0 ? "" : swn.render.signed(swn.math.modifier(value));
		
		//console.log(["attr",attr]);
		//console.log(["value",value]);

		// show previous option in other selects
		var prevValue = swn.attrs.data[attr];
		var $showOpts = $(".swn-cmd-attr-select").find("option[value=" + prevValue + "]");
		//console.log(["$showOpts", $showOpts]);
		$showOpts.show();

		// set new value
		swn.attrs.data[attr] = value;	
		
		$(".swn-attr-modifier[data-swn-attr=" + attr + "]").html(modifier);

		if (value != 0) {
			var $hideOpts = $(".swn-cmd-attr-select").not("[data-swn-attr=" + attr + "]").find("option[value=" + value + "]");
			$hideOpts.hide();
		}
		
		// if all have been selected, show complete button
		if (swn.cmds.attributesSelectComplete()) {
			$(".swn-cmd-attr-accept").removeClass("swn-hidden");
		} else {
			if (!$(".swn-cmd-attr-accept").hasClass("swn-hidden")) {
				$(".swn-cmd-attr-accept").addClass("swn-hidden");
			}
		}
	},
	
	attributesSelectComplete: function() {
		console.log("swn.cmds.attributesSelectComplete");

		for (attr in swn.attrs.data) {
			var a = swn.attrs.data[attr];
			if (a === 0) {
				return false;
			}
		}
		return true;
	},
	
	attributeSelectAccept: function() {
		console.log("swn.cmds.attributeSelectAccept");

		$(".swn-cmd-attr-accept").addClass("swn-hidden");
		
		swn.cmds.attributesComplete();
		
		swn.render.attributes();
	},
	
	attributeIncr: function() {
		console.log("swn.cmds.attributeIncr");
		
		var attr = $that.data("swn-attr");
		var incr = parseInt($that.data("swn-incr"),10);
		swn.attrs.data[attr]+=incr;
		swn.render.attributes();
	},
	
	/* background commands */
	
	backgroundRoll: function() {
		console.log("swn.cmds.backgroundRoll");

		var $that = $(this);
		if ($that.hasClass("swn-disabled")) {
			return;
		}
		
		// initialize display
		$(".swn-background-rolling").removeClass("swn-hidden");
		$(".swn-cmd-background-roll button:first-of-type").addClass("swn-disabled");
		$(".swn-cmd-background-assign button:first-of-type").addClass("swn-disabled");
		
		// roll background
		var b = swn.math.background();
		swn.background = b;
		
		$(".swn-background").html("[" + b + "]");
		
		// render basics
		$(".swn-cmd-background-accept").addClass("swn-hidden");
		$(".swn-cmd-background").removeClass("swn-hidden");
		
		swn.render.basics();
		
		// initialize display
		$(".swn-cmd-background-roll").addClass("swn-hidden");
		$(".swn-cmd-background-assign").addClass("swn-hidden");
		$(".swn-background-rolled").removeClass("swn-hidden");
		$(".swn-background-selected").addClass("swn-hidden");
		$(".swn-cmd-background-assign").addClass("swn-hidden");
		
		$(".swn-cmd-skills").removeClass("swn-hidden");
		$(".swn-cmd-skills-quick").removeClass("swn-hidden");
	},
	
	backgroundAssign: function() {
		console.log("swn.cmds.backgroundAssign");

		var $that = $(this);
		if ($that.hasClass("swn-disabled")) {
			return;
		}

		// initialize display
		$(".swn-cmd-background-roll").addClass("swn-hidden");
		$(".swn-cmd-background-assign").addClass("swn-hidden");
		//$(".swn-background-rolled").removeClass("swn-hidden");
		$(".swn-background-selected").removeClass("swn-hidden");

		// render background selector
		swn.render.basicsSelect();
	},
	
	backgroundSelectAccept: function() {
		console.log("swn.cmds.backgroundSelectAccept");

		var $that = $(this);
		if ($that.hasClass("swn-disabled")) {
			return;
		}
		
		// set background
		var b = $(".swn-cmd-background-select").val();
		swn.background = b;

		// render basics
		$(".swn-cmd-background-accept").addClass("swn-hidden");
		$(".swn-cmd-background").removeClass("swn-hidden");
		swn.render.basics();
		
		$(".swn-background-rolling").addClass("swn-hidden");
		$(".swn-background-rolled").addClass("swn-hidden");
		$(".swn-background-selected").removeClass("swn-hidden");

		$(".swn-cmd-skills").removeClass("swn-hidden");
		$(".swn-cmd-skills-quick").removeClass("swn-hidden");
	},
	
	/* skills commands */
	
	skillsQuick: function() {
		console.log("swn.cmds.skillsQuick");

		var $that = $(this);
		if ($that.hasClass("swn-disabled")) {
			return;
		}
		$(".swn-skills").removeClass("swn-hidden");
		
		var b = swn.background;
		var quick = swn.backgrounds[b].skills.quick;
		swn.skills.incrArr(quick);
		
		// render skills
		swn.render.skills();
		
		$(".swn-cmd-skills-quick").addClass("swn-hidden");
		$(".swn-cmd-skills-pick").addClass("swn-hidden");
		$(".swn-cmd-skills-roll").addClass("swn-hidden");
		
		swn.skills.checkComplete();
	},
	
	skillsPick: function() {
		console.log("swn.cmds.skillsPick");

		var $that = $(this);
		if ($that.hasClass("swn-disabled")) {
			return;
		}
		$(".swn-skills").removeClass("swn-hidden");

		var b = swn.background;
		var f = swn.backgrounds[b].skills.free[0];
		swn.log("skillsPick, f[" + f + "]")
		swn.skills.incr(f);
		
		var learning = swn.backgrounds[b].skills.learning;
		console.log(["learning", learning]);
		var learningSansAnySkill = swn.skills.arrRemoveSkill(learning, "any skill");
		for (var i = 0; i < 2; i++) {
			swn.skills.incrArr(learningSansAnySkill);
		}
		
		// render skills
		swn.render.skills();
		
		$(".swn-cmd-skills-quick").addClass("swn-hidden");
		$(".swn-cmd-skills-pick").addClass("swn-hidden");
		$(".swn-cmd-skills-roll").addClass("swn-hidden");

		swn.skills.checkComplete();
	},
		
	skillsRoll: function() {
		console.log("swn.cmds.skillsRoll");
		var $that = $(this);
		if ($that.hasClass("swn-disabled")) {
			return;
		}
		$(".swn-skills").removeClass("swn-hidden");
		
		var b = swn.background;
		var f = swn.backgrounds[b].skills.free[0];
		swn.log("skillsRoll, f[" + f + "]")
		swn.skills.incr(f);
		
		for (var i=0; i<3; i++) {
			var p = swn.math.die(1, 2, 0);
			switch (p) {
				case 1:
					var growth = swn.backgrounds[b].skills.growth;
					var iGrowth = swn.math.die(1, growth.length, 0);
					swn.log("skillsRoll, iGrowth[" + iGrowth + "]")
					var g = growth[iGrowth];
					swn.skills.incr(g);
					break;
				case 2:
					var learning = swn.backgrounds[b].skills.learning;
					var iLearning = swn.math.die(1, learning.length, 0);
					swn.log("skillsRoll, iLearning[" + iLearning + "]")
					var g = learning[iLearning];
					swn.skills.incr(g);
					break;
			}
		}
		
		// render skills
		swn.render.skills();
		
		$(".swn-cmd-skills-quick").addClass("swn-hidden");
		$(".swn-cmd-skills-pick").addClass("swn-hidden");
		$(".swn-cmd-skills-roll").addClass("swn-hidden");
		
		swn.skills.checkComplete();
	},
	
	skillIncr: function() {
		console.log("swn.cmds.skillIncr");
		var $that = $(this);
		if ($that.hasClass("swn-disabled")) {
			return;
		}
		
		var quick = $that.data("quick");
		console.log(["quick", quick]);
		$("[data-quick=" + quick + "]").addClass("swn-hidden");
		
		var skill = $that.data("skill");
		console.log(["skill", skill]);
		swn.skills.incr(skill);
		
		// render skills
		swn.render.skills();
		
		swn.skills.checkComplete();
	}
};