/* SWN Backgrounds */

swn.backgrounds = {
	"barbarian" : {
		name : "Barbarian",
		skills: {
			free: ["survive"],
			quick: ["survive", "notice", "any combat"],
			growth: ["+1 any stat", "+2 physical", "+2 physical", "+2 mental", "exert", "any skill"],
			learning: ["any combat", "connect", "exert", "lead", "notice", "punch", "sneak", "survive"]
		}
	},
	"clergy" : {
		name : "Clergy",
		skills: {
			free: ["talk"],
			quick: ["talk", "perform", "know"],
			growth: ["+1 any stat", "+2 mental", "+2 physical", "+2 mental", "connect", "any skill"],
			learning: ["administer", "connect", "know", "lead", "notice", "perform", "talk", "talk"]
		}
	},
	"courtesan" : {
		name : "Courtesan",
		skills: {
			free: ["perform"],
			quick: ["perform", "notice", "connect"],
			growth: ["+1 any stat", "+2 mental", "+2 mental", "+2 physical", "connect", "any skill"],
			learning: ["any combat", "connect", "exert", "notice", "perform", "survive", "talk", "trade"]
		}
	},
	"criminal" : {
		name : "Criminal",
		skills: {
			free: ["sneak"],
			quick: ["sneak", "connect", "talk"],
			growth: ["+1 any stat", "+2 mental", "+2 physical", "+2 mental", "connect", "any skill"],
			learning: ["administer", "any combat", "connect", "notice", "program", "sneak", "talk", "trade"]
		}
	},
	"dilettante" : {
		name : "Dilettante",
		skills: {
			free: ["connect"],
			quick: ["connect", "know", "talk"],
			growth: ["+1 any stat", "+1 any stat", "+1 any stat", "+1 any stat", "connect", "any skill"],
			learning: ["any skill", "any skill", "connect", "know", "perform", "pilot", "talk", "trade"]
		}
	},
	"entertainer" : {
		name : "Entertainer",
		skills: {
			free: ["perform"],
			quick: ["perform", "talk", "connect"],
			growth: ["+1 any stat", "+2 mental", "+2 mental", "+2 physical", "connect", "any skill"],
			learning: ["any combat", "connect", "exert", "notice", "perform", "perform", "sneak", "talk"]
		}
	},
	"merchant" : {
		name : "Merchant",
		skills: {
			free: ["trade"],
			quick: ["trade", "talk", "connect"],
			growth: ["+1 any stat", "+2 mental", "+2 mental", "+2 mental", "connect", "any skill"],
			learning: ["administer", "any combat", "connect", "fix", "know", "notice", "trade", "talk"]
		}
	},
	"noble" : {
		name : "Noble",
		skills: {
			free: ["lead"],
			quick: ["lead", "connect", "administer"],
			growth: ["+1 any stat", "+2 mental", "+2 mental", "+2 mental", "connect", "any skill"],
			learning: ["administer", "any combat", "connect", "know", "lead", "notice", "pilot", "talk"]
		}
	},
	"official" : {
		name : "Official",
		skills: {
			free: ["administer"],
			quick: ["administer", "talk", "connect"],
			growth: ["+1 any stat", "+2 mental", "+2 mental", "+2 mental", "connect", "any skill"],
			learning: ["administer", "any skill", "connect", "know", "lead", "notice", "talk", "trade"]
		}
	},
	"peasant" : {
		name : "Peasant",
		skills: {
			free: ["exert"],
			quick: ["exert", "sneak", "survive"],
			growth: ["+1 any stat", "+2 physical", "+2 physical", "+2 physical", "exert", "any skill"],
			learning: ["connect", "exert", "fix", "notice", "sneak", "survive", "trade", "work"]
		}
	},
	"physician" : {
		name : "Physician",
		skills: {
			free: ["heal"],
			quick: ["heal", "know", "notice"],
			growth: ["+1 any stat", "+2 physical", "+2 mental", "+2 mental", "connect", "any skill"],
			learning: ["administer", "connect", "fix", "heal", "know", "notice", "talk", "trade"]
		}
	},
	"pilot" : {
		name : "Pilot",
		skills: {
			free: ["pilot"],
			quick: ["pilot", "fix", "shoot,trade"],
			growth: ["+1 any stat", "+2 physical", "+2 physical", "+2 mental", "connect", "any skill"],
			learning: ["connect", "exert", "fix", "notice", "pilot", "pilot", "shoot", "trade"]
		}
	},
	"politician" : {
		name : "Politician",
		skills: {
			free: ["talk"],
			quick: ["talk", "lead", "connect"],
			growth: ["+1 any stat", "+2 mental", "+2 mental", "+2 mental", "connect", "any skill"],
			learning: ["administer", "connect", "connect", "lead", "notice", "perform", "perform", "talk"]
		}
	},
	"scholar" : {
		name : "Scholar",
		skills: {
			free: ["know"],
			quick: ["know", "connect", "administer"],
			growth: ["+1 any stat", "+2 mental", "+2 mental", "+2 mental", "connect", "any skill"],
			learning: ["administer", "connect", "fix", "know", "notice", "perform", "program", "talk"]
		}
	},
	"soldier" : {
		name : "Soldier",
		skills: {
			free: ["any combat"],
			quick: ["any combat", "exert", "survive"],
			growth: ["+1 any stat", "+2 physical", "+2 physical", "+2 physical", "exert", "any skill"],
			learning: ["administer", "any combat", "exert", "fix", "lead", "notice", "sneak", "survive"]
		}
	},
	"spacer" : {
		name : "Spacer",
		skills: {
			free: ["fix"],
			quick: ["fix", "pilot", "program"],
			growth: ["+1 any stat", "+2 physical", "+2 physical", "+2 mental", "exert", "any skill"],
			learning: ["administer", "connect", "exert", "fix", "know", "pilot", "program", "talk"]
		}
	},
	"technician" : {
		name : "Technician",
		skills: {
			free: ["fix"],
			quick: ["fix", "exert", "notice"],
			growth: ["+1 any stat", "+2 physical", "+2 mental", "+2 mental", "connect", "any skill"],
			learning: ["administer", "connect", "exert", "fix", "fix", "know", "notice", "pilot"]
		}
	},
	"thug" : {
		name : "Thug",
		skills: {
			free: ["any combat"],
			quick: ["any combat", "talk", "connect"],
			growth: ["+1 any stat", "+2 mental", "+2 physical", "+2 physical", "connect", "any skill"],
			learning: ["any combat", "connect", "exert", "notice", "sneak", "stab or shoot", "survive", "talk"]
		}
	},
	"vagabond" : {
		name : "Vagabond",
		skills: {
			free: ["survive"],
			quick: ["survive", "sneak", "notice"],
			growth: ["+1 any stat", "+2 physical", "+2 physical", "+2 mental", "exert", "any skill"],
			learning: ["any combat", "connect", "notice", "perform", "pilot", "sneak", "survive", "work"]
		}
	},
	"worker" : {
		name : "Worker",
		skills: {
			free: ["work"],
			quick: ["work", "exert", "work"],
			growth: ["+1 any stat", "+1 any stat", "+1 any stat", "+1 any stat", "exert", "any skill"],
			learning: ["administer", "any skill", "connect", "exert", "fix", "pilot", "program", "work"]
		}
	}
};