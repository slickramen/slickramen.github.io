/**
 * Set up the list of projects
 */
const projects = [
    { divider: true, divider_id: "tab2026", name: "Current Projects", subtitle: "Completed or Working on" },
    {
        name: "default labs",
        subtitle: "Game Collective",
        year: "2026",
        image: "default-labs.png",
        links: [
            { url: "https://www.defaultlabs.net/", text: "Website", type: "redirect"},
            { url: "/not-found", text: "More Info" }
        ]
    },
    {
        name: "Bloodshot",
        subtitle: "Game, Windows",
        year: "tbc",
        image: "bloodshot2.png",
        links: [
            // { url: "https://itch.io", text: "Presskit", type: "redirect"},
            // { url: "/not-found", text: "Publisher Demo", type: "redirect"},
            { url: "/not-found", text: "More Info" }
        ]
    },
    { divider: true, divider_id: "tab2025", name: "2025 Works", subtitle: "" },
    // {
    //     name: "Weeklink",
    //     subtitle: "Application, Web",
    //     year: "tbc",
    //     image: "weeklink.png",
    //     links: [
    //         // { url: "https://github.com/slickramen/gromit", text: "Github Repository", type: "github"},
    //         { url: "/projects/page-weeklinks", text: "More Info" }
    //     ]    
    // },
    {
        name: "Madness: Zombies",
        subtitle: "Game, Windows",
        year: "tbc",
        image: "madness-zombies.png",
        links: [
            // { url: "https://itch.io", text: "Presskit", type: "redirect"},
            // { url: "/not-found", text: "Publisher Demo", type: "redirect"},
            { url: "/not-found", text: "More Info" }
        ]
    },
    {
        name: "Hatch",
        subtitle: "Application, Web",
        year: "2025",
        image: "hatch.png",
        links: [
            { url: "https://github.com/slickramen", text: "Github Repository", type: "github"},
            { url: "/projects/page-hatch", text: "More Info" }
        ],
        skillChips: "java, springboot"
    },
    {
        name: "GAMEDIR",
        subtitle: "Application, Web",
        year: "2025",
        image: "gamedir.png",
        links: [
            { url: "https://github.com/slickramen/gamedir", text: "Github Repository", type: "github"},
            { url: "/projects/page-gamedir", text: "More Info" }
        ],
        skillChips: "react"
    },
    {
        name: "RIP Routing Implementation",
        subtitle: "Program, Python",
        year: "2025",
        image: "pta.png",
        links: [
            { url: "https://github.com/maxwmoir/rip-project", text: "Github Repository", type: "github"},
            { url: "/not-found", text: "More Info" }
        ],
        skillChips: "python"
    },
    {
        name: "Gromit",
        subtitle: "Application, Windows",
        year: "2025",
        image: "gromit.png",
        links: [
            { url: "https://github.com/slickramen/gromit-react", text: "Github Repository", type: "github"},
            { url: "/projects/page-gromit", text: "More Info" }
        ],
        skillChips: "react, express.js"
    },
    {
        name: "Git Contribution Graph",
        subtitle: "Element, Web",
        year: "2025",
        image: "gitcontribution.png",
        links: [
            { url: "https://github.com/slickramen/git-contribution-graph", text: "Github Repository", type: "github"},
            { url: "/projects/page-gitcontribution", text: "More Info" }
        ],
        skillChips: "javascript"
    },
    // {
    //     name: "Sugoi",
    //     subtitle: "Game, Windows",
    //     year: "2025",
    //     image: "sugoi.png",
    //     links: [
    //         // { url: "https://itch.io", text: "Link to itch.io", type: "itchio" },
    //         { url: "/not-found", text: "More Info" }
    //     ]
    // },
    { divider: true, divider_id: "tab2024", name: "2024 Works" },
    {
        name: "Grape Expectations!",
        subtitle: "Application, Linux / Windows",
        year: "2024",
        image: "grape.jpg",
        links: [
            // { url: "https://itch.io", text: "Presskit", type: "redirect" },
            // { url: "/not-found", text: "Publisher Demo", type: "redirect" },
            { url: "/projects/page-grape", text: "More Info" }
        ],
        skillChips: "java, javafx"
    },
    {
        name: "Alchemess",
        subtitle: "Game, Windows / Web",
        year: "2024",
        image: "alchemess2.png",
        links: [
            { url: "https://slickramen.itch.io/alchemess", text: "Link to itch.io", type: "itchio" },
            { url: "/projects/page-alchemess", text: "More Info" }
        ],
        skillChips: "gamemaker"
    },
    { divider: true, divider_id: "tab2023", name: "2023 Works" },
    {
        name:       "Seedle",
        subtitle:   "Game, Windows",
        year:       "2023",
        image:      "seedle.png",
        links: [
            // { url: "https://itch.io", text: "Link to itch.io" },
            { url: "/not-found", text: "More Info" }
        ],
        skillChips: "gamemaker"
    },
    {
        name:       "Roguebots",
        subtitle:   "Game, Windows",
        year:       "2023",
        image:      "roguebots.png",
        links: [
            // { url: "https://itch.io", text: "Link to itch.io" },
            { url: "/not-found", text: "More Info" }
        ],
        skillChips: "gamemaker"
    },
    { divider: true, divider_id: "tab2022", name: "2022 Works" },
    {
        name: "Peter's Quest",
        subtitle: "Game, Windows / Web",
        year: "2022",
        image: "petersquest.png",
        links: [
            { url: "https://slickramen.itch.io/peters-quest", text: "Link to itch.io", type: "itchio" },
            { url: "/projects/page-peters-quest", text: "More Info" }
        ],
        skillChips: "gamemaker"
    },
    { divider: true, divider_id: "tab2021", name: "2021 Works" },
    {
        name: "ULTRAFORCE: OBLITERATION",
        subtitle: "Game, Windows / Web",
        year: "2021",
        image: "ultraforce.png",
        links: [
            { url: "https://stepford.itch.io/ultra-force-obliteration", text: "Link to itch.io", type: "itchio" },
            { url: "/projects/page-ufo", text: "More Info" }
        ],
        skillChips: "gamemaker"
    },
    {
        name: "Untitled Ninja Game",
        subtitle: "Game, Windows",
        year: "2021",
        image: "ninja.png",
        links: [
            { url: "/projects/page-ninja", text: "More Info" }
        ],
        skillChips: "python / pygame"
    },
    {
        name: "Claret",
        subtitle: "Game, Web",
        year: "2021",
        image: "claret.png",
        links: [
            { url: "https://slickramen.itch.io/claret", text: "Link to itch.io", type: "itchio" },
            { url: "/projects/page-claret", text: "More Info" }
        ],
        skillChips: "gamemaker"
    },
    {
        name: "Sunnyside vs. The Eggies",
        subtitle: "Game, Web",
        year: "2021",
        image: "sunnyside.png",
        links: [
            { url: "https://stepford.itch.io/sunnyside", text: "Link to itch.io", type: "itchio" },
            { url: "/projects/page-sunnyside", text: "More Info" }
        ],
        skillChips: "gamemaker"
    },
    {
        name: "Cable Boy",
        subtitle: "Game, Windows / Web",
        year: "2021",
        image: "cableboy.png",
        links: [
            { url: "https://stepford.itch.io/cable-boy", text: "Link to itch.io", type: "itchio" },
            { url: "/projects/page-cableboy", text: "More Info" }
        ],
        skillChips: "gamemaker"
    },
    {
        name: "Musculus",
        subtitle: "Game, Windows",
        year: "2021",
        image: "musculus.png",
        links: [
            { url: "https://stepford.itch.io/musculus", text: "Link to itch.io", type: "itchio" },
            { url: "/projects/page-musculus", text: "More Info" }
        ],
        skillChips: "gamemaker"
    },
    { divider: true, divider_id: "tab2020", name: "pre. 2020 Works" },
    {
        name: "Ceptor",
        subtitle: "Game, Windows",
        year: "2020",
        image: "ceptor.png",
        links: [
            { url: "https://slickramen.itch.io/ceptor", text: "Link to itch.io", type: "itchio" },
            { url: "/projects/page-ceptor", text: "More Info" }
        ],
        skillChips: "gamemaker"
    },
    // {
    //     name: "Acumen",
    //     subtitle: "Game, Windows",
    //     year: "2020",
    //     image: "acumen.png",
    //     links: [
    //         { url: "https://itch.io", text: "Link to itch.io", type: "itchio" },
    //         { url: "/not-found", text: "More Info" }
    //     ]
    // },
    // {
    //     name: "Bump in the Night",
    //     subtitle: "Game, Windows",
    //     year: "2020",
    //     image: "bumpinthenight.png",
    //     links: [
    //         { url: "https://itch.io", text: "Link to itch.io", type: "itchio" },
    //         { url: "/not-found", text: "More Info" }
    //     ]
    // },
    {
        name: "Rogue Road",
        subtitle: "Game, Windows",
        year: "2020",
        image: "rogueroad.png",
        links: [
            { url: "https://stepford.itch.io/rogue-road", text: "Link to itch.io", type: "itchio" },
            { url: "/projects/page-rogueroad", text: "More Info" }
        ],
        skillChips: "gamemaker"
    },
    // {
    //     name: "Paper Fort",
    //     subtitle: "Game, Windows",
    //     year: "2020",
    //     image: "paperfort.png",
    //     links: [
    //         { url: "https://itch.io", text: "Link to itch.io", type: "itchio" },
    //         { url: "/not-found", text: "More Info" }
    //     ]
    // },
    {
        name: "Terrene",
        subtitle: "Game, Windows",
        year: "2020",
        image: "terrene.png",
        links: [
            { url: "https://slickramen.itch.io/terrene", text: "Link to itch.io", type: "itchio" },
            { url: "/projects/page-terrene", text: "More Info" }
        ],
        skillChips: "gamemaker"
    },
    // {
    //     name: "RED SPACE",
    //     subtitle: "Game, Windows",
    //     year: "2020",
    //     image: "redspace.png",
    //     links: [
    //         { url: "https://slickramen.itch.io/redspace", text: "Link to itch.io", type: "itchio" },
    //         { url: "/projects/page-redspace", text: "More Info" }
    //     ]
    // },
    {
        name: "Gun Gun",
        subtitle: "Game, Windows",
        year: "2019",
        image: "gungun.png",
        links: [
            { url: "https://slickramen.itch.io/gungun", text: "Link to itch.io", type: "itchio" },
            { url: "/projects/page-gungun", text: "More Info" }
        ],
        skillChips: "gamemaker"
    },
    {
        name: "DEVASTATION NATION",
        subtitle: "Game, Windows",
        year: "2019",
        image: "devastationnation.png",
        links: [
            { url: "https://stepford.itch.io/devastation-nation", text: "Link to itch.io", type: "itchio" },
            { url: "/projects/page-devastationnation", text: "More Info" }
        ],
        skillChips: "gamemaker"
    },
    // {
    //     name: "100 Bullets",
    //     subtitle: "Game, Windows",
    //     year: "2019",
    //     image: "100bullets.png",
    //     links: [
    //         { url: "https://slickramen.itch.io/100bullets", text: "Link to itch.io", type: "itchio" },
    //         { url: "/projects/page-100bullets", text: "More Info" }
    //     ]
    // },
    {
        name: "Realms of Requiem",
        subtitle: "Game, Windows",
        year: "2019",
        image: "realmsofrequiem.png",
        links: [
            { url: "https://slickramen.itch.io/realms-of-requiem", text: "Link to itch.io", type: "itchio" },
            { url: "/projects/page-ror", text: "More Info" }
        ],
        skillChips: "gamemaker"
    },
    {
        name: "BLAMM",
        subtitle: "Game, Windows",
        year: "2018",
        image: "blamm.png",
        links: [
            { url: "https://slickramen.itch.io/blamm", text: "Link to itch.io", type: "itchio" },
            { url: "/projects/page-blamm", text: "More Info" }
        ],
        skillChips: "gamemaker"
    },
    {
        name: "Blazin' Aces",
        subtitle: "Game, Windows",
        year: "2018",
        image: "blazinaces.png",
        links: [
            { url: "https://slickramen.itch.io/blazin-aces-game", text: "Link to itch.io", type: "itchio" },
            { url: "/projects/page-blazinaces", text: "More Info" }
        ],
        skillChips: "gamemaker"
    }
];

// Load Projects into page
loadProjects(projects);