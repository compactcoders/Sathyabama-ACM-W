const dvpBrochure = new URL("../assets/images/data-visualisation/visualising-data-in-python.jpg", import.meta.url).href;
const dvp1 = new URL("../assets/images/data-visualisation/dvp1.jpg", import.meta.url).href;
const dvp2 = new URL("../assets/images/data-visualisation/dvp2.jpg", import.meta.url).href;
const dvp3 = new URL("../assets/images/data-visualisation/dvp3.jpg", import.meta.url).href;

const taBrochure = new URL("../assets/images/tech-alchemy/tech-alchemy.jpg", import.meta.url).href;
const ta1 = new URL("../assets/images/tech-alchemy/ta1.jpg", import.meta.url).href;
const ta2 = new URL("../assets/images/tech-alchemy/ta2.jpg", import.meta.url).href;
const ta3 = new URL("../assets/images/tech-alchemy/ta3.jpg", import.meta.url).href;

const events = [
    { 
        id: 1,
        name: "Data Visualization with Python",
        date: "10-04-2024",
        description1: " ",
        description2: " ",
        brochureImage: dvpBrochure,
        images: [dvp1, dvp2, dvp3],
        brochure: dvpBrochure
    },
    {
        id: 2,
        name: "Tech Alchemy",
        date: "18-09-2024, 19-09-2024",
        description1: "Day 1: ACM-W SIST hosted a Canva Mastery workshop for 2nd and 3rd-year CSE students...",
        description2: "Day 2: 'Creative Quest' - An engaging puzzle-solving workshop for students...",
        brochureImage: taBrochure,
        images: [ta1, ta2, ta3],
        brochure: taBrochure
    }
];

export default events;
