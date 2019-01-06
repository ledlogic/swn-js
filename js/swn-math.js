swn.math = {
	die: function(qty, die, mod) {
		var ret = mod;
		for (var i=0; i<qty; i++) {
			ret += Math.floor(Math.random() * die) + 1 
		}
		return ret;
	},
	attr: function() {
		var ret = swn.math.die(3, 6, 0);
		return ret;
	},
	modifier: function(attr) {
		switch (true) {
			case attr == 3 : return -2;
			case attr >= 4 && attr <= 8 : return -1;
			case attr >= 8 && attr <= 13 : return 0;
			case attr >= 14 && attr <= 17 : return 1;
			case attr == 18 : return 2;
		}
		return NaN;
	}
};
