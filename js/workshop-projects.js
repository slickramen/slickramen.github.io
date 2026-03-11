/**
 * Set up the list of projects
 */
const projects = [
	{
		divider: true,
		divider_id: "tabWorkshop",
		name: "Workshop",
		subtitle: "Work-in-progress",
	},
	{
		name: "Bloodline",
		subtitle: "Game, Windows",
		year: "tbc",
		image: "bloodline.png",
		links: [
			// { url: "https://itch.io", text: "Link to itch.io" },
			{ url: "/more-info", text: "More Info" },
		],
	},
	{
		name: "Seedle",
		subtitle: "Game, Windows",
		year: "tbc",
		image: "seedle.png",
		links: [
			// { url: "https://itch.io", text: "Link to itch.io" },
			{ url: "/more-info", text: "More Info" },
		],
	},
	{
		name: "³skate",
		subtitle: "Game, Windows, Web",
		year: "tbc",
		image: "appyskate.png",
		links: [
			// { url: "https://itch.io", text: "Link to itch.io" },
			{ url: "/more-info", text: "More Info" },
		],
	},
	{
		name: "Peter's Quest II",
		subtitle: "Game, Windows",
		year: "tbc",
		image: "petersquest2.png",
		links: [
			// { url: "https://itch.io", text: "Link to itch.io" },
			{ url: "/more-info", text: "More Info" },
		],
	},
	{
		name: "Musculus II",
		subtitle: "Game, Windows",
		year: "tbc",
		image: "musculus2.png",
		links: [
			// { url: "https://itch.io", text: "Link to itch.io" },
			{ url: "/more-info", text: "More Info" },
		],
	},
	{
		name: "Roguebots",
		subtitle: "Game, Windows",
		year: "tbc",
		image: "roguebots.png",
		links: [
			// { url: "https://itch.io", text: "Link to itch.io" },
			{ url: "/more-info", text: "More Info" },
		],
	},
	{
		name: "Surgent",
		subtitle: "Game, Windows",
		year: "tbc",
		image: "acumen2.png",
		links: [
			// { url: "https://itch.io", text: "Link to itch.io" },
			{ url: "/more-info", text: "More Info" },
		],
	},
	{
		name: "Ticket to Hell",
		subtitle: "Game, Windows",
		year: "tbc",
		image: "pta.png",
		links: [
			// { url: "https://itch.io", text: "Link to itch.io" },
			{ url: "/more-info", text: "More Info" },
		],
	},
];

// Load Projects into page
loadProjects(projects);
