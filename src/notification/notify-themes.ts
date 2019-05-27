export type NotifyTheme = {
	icon: {
		color: string;
	};
	box: {
		backgroundColor: string;
		color: string;
	};
};
const allThemes: object = {
	info: {
		icon: {
			color: "#fff"
		},
		box: {
			backgroundColor: "#2195f2",
			color: "#fff"
		}
	},
	success: {
		icon: {
			color: "#fff"
		},
		box: {
			backgroundColor: "#00ad7c",
			color: "#fff"
		}
	},
	dark: {
		icon: {
			color: "#fff"
		},
		box: {
			backgroundColor: "#252525",
			color: "#fff"
		}
	},
	warn: {
		icon: {
			color: "#fff"
		},
		box: {
			backgroundColor: "#FE9700",
			color: "#fff"
		}
	},
	error: {
		icon: {
			color: "#fff"
		},
		box: {
			backgroundColor: "#db3951",
			color: "#fff"
		}
	},
	default: {
		icon: {
			color: "#151515"
		},
		box: {
			backgroundColor: "#eee",
			color: "#151515"
		}
	}
};
export default function themes(theme: string) {
	try {
		// @ts-ignore
		return allThemes[theme];
	} catch (error) {
		// @ts-ignore
		return allThemes.default;
	}
}
