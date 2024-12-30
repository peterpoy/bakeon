const site_base = import.meta.env.BASE_URL;


export const menuMain = [
    {
        name: "Home",
        url: `${site_base}`,
        highlighted: false,
    },
    {
        name: "Menu",
        url:  `${site_base}/menu`,
        highlighted: false,
    },
    {
        name: "About Us",
        url: `${site_base}/about-us`,
        highlighted: false,
    },
    {
        name: "Gallery",
        url: `${site_base}/gallery`,
        highlighted: false,
    },
    {
        name: "Contact",
        url: `${site_base}/contact`,
        highlighted: false,
    },
    {
        name: "Book",
        url: `${site_base}/book`,
        highlighted: true,
    },
];

export const footerPrimary = [
    {
        title: "Navigatie",
        items: [
            { name: "home", url: `${site_base}` },
        ],
    },
];

export const footerSecondary = [
    {
        title: "support",
        items: [
            { name: "pricing", url: "/pricing" },
        ],
    },
];

export const footerTertiary = [
    {
        title: "Links",
        items: [
            { name: "privacybeleid", url: '/privacy-policy' },
            { name: "api status", url: "/api-status" },
        ],
    },
];
