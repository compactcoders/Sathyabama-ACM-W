const dvpBrochure = new URL("../assets/images/data-visualisation/visualising-data-in-python.jpg", import.meta.url).href;
const dvp1 = new URL("../assets/images/data-visualisation/dvp1.jpg", import.meta.url).href;
const dvp2 = new URL("../assets/images/data-visualisation/dvp2.jpg", import.meta.url).href;
const dvp3 = new URL("../assets/images/data-visualisation/dvp3.jpg", import.meta.url).href;

const taBrochure = new URL("../assets/images/tech-alchemy/tech-alchemy.jpg", import.meta.url).href;
const ta1 = new URL("../assets/images/tech-alchemy/ta1.jpg", import.meta.url).href;
const ta2 = new URL("../assets/images/tech-alchemy/ta2.jpg", import.meta.url).href;
const ta3 = new URL("../assets/images/tech-alchemy/ta3.jpg", import.meta.url).href;

const taBrochure2 = new URL("../assets/images/code-spark/code-spark.png", import.meta.url).href;
const ta11 = new URL("../assets/images/code-spark/code-spark11.jpg", import.meta.url).href;
const inBrochure2 = new URL("../assets/images/innovation/innovation.png", import.meta.url).href;
const ino1 = new URL("../assets/images/innovation/code-spark.jpg", import.meta.url).href;
const ino2 = new URL("../assets/images/innovation/code-spark1.jpg", import.meta.url).href;
const ino3 = new URL("../assets/images/innovation/code-spark2.jpg", import.meta.url).href;

const events = [
    { 
        id: 1,
        name: "Data Visualization with Python",
        date: "10-04-2024",
        description1: "Visualizing Data with Python event was an engaging and hands-on session focused on helping participants understand the power of data visualization. The workshop guided attendees through the process of turning complex datasets into clear, impactful visual stories using Python programming. Throughout the session, participants were introduced to popular Python libraries such as Matplotlib, Seaborn, and Plotly. These tools allowed them to explore different chart types including bar graphs, line plots, scatter plots, heatmaps, and interactive dashboards. The emphasis was not only on coding but also on understanding when and how to use specific visualizations for different kinds of data. ",
        description2: "The event included real-time demonstrations, collaborative exercises, and practical examples drawn from real-world scenarios. Attendees had the opportunity to work on small-scale visualization projects, apply their learning immediately, and gain valuable insights into data analysis and storytelling. Overall, the session provided a strong foundation in data visualization techniques using Python, empowering participants to confidently represent data in visually meaningful ways. ",
        brochureImage: dvpBrochure,
        images: [dvp1, dvp2, dvp3],
        brochure: dvpBrochure
    },
    {
        id: 2,
        name: "Tech Alchemy",
        date: "18-09-2024, 19-09-2024",
        description1: "On Day 1 of the Tech Alchemy event series, ACM-W SIST hosted a Canva Mastery workshop for 2nd- and 3rd-year CSE students, introducing them to the essentials of Canva for graphic design. Led by 3rd-year CSE students Janani S and Janapriya S, the workshop included a detailed website walkthrough, where participants learned to navigate Canva’s interface, explore templates, and access design resources like fonts and colour palettes. Tips on using icons, colour combinations, and layout techniques helped attendees elevate their designs. The hands-on segment guided students through creating event posters, encouraging them to apply the learned techniques, with real-time feedback enhancing their understanding. The session ended with a Q&A, allowing participants to share their work, discuss future applications of Canva, and engage in peer learning. The workshop saw 47 students in attendance, who provided positive feedback, appreciating the practical, interactive format.",
        description2: "In the hands-on portion, participants created an event poster based on a sample topic, allowing them to apply the design techniques they had just learned and explore Canva’s range of design elements. They were guided in choosing suitable colour schemes, selecting readable fonts, and using alignment tools to achieve a professional layout. Real-time feedback was provided, helping students refine their designs and gain a clearer understanding of design principles.",
        brochureImage: taBrochure,
        images: [ta1, ta2, ta3],
        brochure: taBrochure
    },
    {
        id: 3,
        name: "Code Spark",
        date: "25-02-2025",
        description1: "ACM-W Sathyabama Student Chapter, in collaboration with the School of Computing, organized a hands-on workshop CODE SPARK for 2nd- and 3rd-year students. The workshop aimed to introduce Visual Studio Code (VS Code) and provide a comprehensive guide on setting up, coding, and debugging within the IDE. The session, led by Ms. Bharathi kannamma(2nd year, B.E.CSE) and Ms. Boomika (3rd Year, B.E. CSE), started with a detailed introduction to VS Code, explaining its importance in modern development. Participants were guided through the installation process of VS Code and Python, followed by a step-by-step walkthrough of configuring VS Code for Python development. The workshop featured live demonstrations on navigating the IDE, writing and executing Python code, debugging errors, and customizing the interface for efficiency. Students were given real-time exercises, encouraging them to explore essential shortcuts, extensions, and best practices to improve their coding workflow. The session concluded with an interactive Q&A, allowing students to clarify doubts, troubleshoot common setup issues, and discuss real-world applications of VS Code in software development.",
        description2: "The CODE SPARK workshop successfully introduced students to Visual Studio Code, equipping them with the skills needed to install, configure, and effectively use the IDE for programming. The interactive format and expert student instructors provided a valuable and engaging learning experience, ensuring that students left the session confident in their ability to navigate and work with VS Code efficiently.",
        brochureImage: taBrochure2,
        images: [ta11, ta1, ta2],
        brochure: taBrochure2
    },
    {
        id: 4,
        name: "Web Restyle",
        date: "10-02-2025",
        description1: "The Web Restyle event was a dynamic and creativity-driven challenge designed to test and enhance participants’ full-stack web development skills. In this time-bound session, teams were provided with a pre-built full-stack codebase, which they were tasked with improving, customizing, or reimagining within the given timeframe. Participants explored various aspects of frontend and backend development, from refining user interfaces and improving responsiveness to optimizing performance and adding new functionalities. The event encouraged creative problem-solving, modern design practices, and effective collaboration.",
        description2: "The main goal was not just to restyle the web application, but to elevate its functionality, user experience, and visual appeal. Whether through improved layouts, added features, or sleek design enhancements, participants showcased their ability to think critically and build on existing systems. Web Restyle offered a practical platform for budding developers to apply their knowledge, demonstrate their creativity, and work under real-world constraints—mirroring the challenges faced in professional development environments.",
        brochureImage: inBrochure2,
        images: [ino1, ino2, ino3],
        brochure: inBrochure2
    }
];

export default events;
