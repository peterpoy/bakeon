const site_base = import.meta.env.BASE_URL;


export const menuMain = [
    {
        name: "Home",
        url: `${site_base}`,
        highlighted: false,
    },
    {
        name: "Hours",
        url: `${site_base}#hours`,
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
        name: "Order",
        url: "https://www.ubereats.com/ca/store/bake-on/lDGUq6zwVQaXi_zM81_gMw?srsltid=AfmBOoraggix6ruDr5Jz3Evx2C-riBlnsbOyvhTa5skfLvbqq9bj2tbf",
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
