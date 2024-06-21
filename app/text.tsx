import Link from "next/link";

// imports for clients & home page
import shapelog from "/public/clients/projects-shapelog.jpg";
import ascendTech from "/public/clients/projects-ascendTech.jpg";
import buyMySpot from "/public/clients/projects-buyMySpot.jpg";
import buymyspotLogo from "/public/clients/logo-buymyspot.png";
import cantooLogo from "/public/clients/logo-cantoo.png";
import artizanLogo from "/public/clients/logo-artizan.png";

import bfPangea from "../public/clients/example-bfPangea.jpg";
import monday from "../public/clients/example-monday.jpg";
import humanElement from "../public/clients/example-humanElement.jpg";
import palmTree from "../public/clients/example-palmTree.jpg";
import saphran from "../public/clients/example-saphran.jpg";
import dewpoint from "../public/clients/example-dewpoint.jpg";

import { accenture, aiml, akunaCapital, amazon, apple, atNt, bankOfAmerica, bloomberg, bubble, capitalOne, cisco, cloudComputing, databricks, datadog, dbManagement, deloitte, duolingo, ernstNyoung, figma, google, ibm, imc, intel, janeStreet, jpMorgan, meta, microsoft, mongoDB, palantir, paypal, ramp, robinhood, salesforce, seo, serviceNow, snap, stripe, tesla, tiktok, uber, uxDesign, verizon, webDev } from "./svg";

// imports for recruiting page
import alexyang from "/public/headshots/alexyang.jpg";
import jessicazhang from "/public/headshots/jessicazhang.jpg";
import johnxie from "/public/headshots/johnxie.jpg";
import trek from "/public/recruiting/trek.jpg";
import retreat from "/public/recruiting/retreat.jpg";
import techDev from "/public/recruiting/techdev.jpg";
import companyVisit from "/public/recruiting/companyvisit.jpg";
import projectExperience from "/public/recruiting/projectexperience.jpg";
import bigLittle1 from "/public/recruiting/biglittle1.jpg";
import bigLittle2 from "/public/recruiting/biglittle2.jpg";
import bigLittle3 from "/public/recruiting/biglittle3.jpg";

export const applicationPortal = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"

export const navBar = [
    {
        page: "Home",
        route: "/"
    },
    {
        page: "Clients",
        route: "/clients"
    },
    {
        page: "Team",
        route: "/team"
    },
    {
        page: "Recruiting",
        route: "/recruiting"
    }
]

export const currentlyRecruiting = false

export const recruitmentEvents = [
    {
        name: "Festifall",
        date: new Date(2024, 4, 31, 16, 24),
        time: "2:30-6 PM",
        location: "The Diag"
    },
    {
        name: "Mass Meeting I",
        date: new Date(2024, 4, 31, 16, 26),
        time: "7-8:30 PM",
        location: "League | Hussey"
    },
    {
        name: "Mass Meeting II",
        date: new Date(2024, 4, 31, 16, 28),
        time: "7-8:30 PM",
        location: "League | Hussey"
    },
    {
        name: "DEI Panel",
        date: new Date(2024, 4, 31, 16, 30),
        time: "7-8:30 PM",
        location: "League | Hussey"
    },
    {
        name: "Career Workshop",
        date: new Date(2024, 4, 31, 16, 32),
        time: "7-8:30 PM",
        location: "League | Hussey"
    },
    {
        name: "Application Due",
        date: new Date(2024, 4, 31, 16, 34),
        time: "7-8:30 PM",
        location: "League | Hussey"
    },
    {
        name: "Selection Process",
        date: new Date(2024, 4, 31, 16, 36),
        time: "TBD",
        location: "By Invite Only"
    }
]

export const memberTestimonials = [
    {
        name: "Alex Yang",
        testimonial: `“Atlas really encapsulates what I've loved most about college; 
        the curiosity, spontaneous escapades, and drive to always do more. This community 
        has given me so much, from the resources to create actual value within the tech 
        space to meeting some of the most incredible people at UofM. All the experiences 
        I’ve had never fail to remind me just how nerdy we are—not just about tech, but 
        about meteor showers, jazz, Val, and wolfing down mountains of food. Thanks to this 
        incredible community, I’ve learned a ton, grown hella, and have had some of the most 
        unforgettable experiences of my college career.”`,
        photo: alexyang,
    },
    {
        name: "Jessica Zhang",
        testimonial: `“Joining Atlas Digital was by far the best decision I made in college. 
        Personally, I cannot imagine a more perfect organization. On a professional level, 
        I’ve received invaluable mentorship on internship searches, resumes, networking, 
        and more. Academically, I’ve met some of the best project partners in the world 
        and received endless support in my coursework. Since joining, I can confidently 
        say I’m a better coder, but truthfully, I’m most grateful for our social community. 
        This organization has led me to some of my favorite memories in college and best 
        friends in the entire world. From unforgettable trips to late night talks, I’ve 
        loved every moment I've shared with these people.”`,
        photo: jessicazhang,
    },
    {
        name: "John Xie",
        testimonial: `“Atlas Digital has given me both a professional and social community. 
        Through tech dev workshops, project work, and professional mentorship, Atlas Digital 
        built me from the ground up teaching me everything from machine learning engineering 
        to best recruiting practices. Beyond the professional, Atlas Digital has helped me 
        find like-minded individuals and friendships that will last a lifetime.”`,
        photo: johnxie,
    },
];

export const faqs = [
    {
        question: "How do I apply?",
        answer: `During our recruitment cycles at the beginning of each semester, you can apply through our application portal before the deadline. Your application helps us learn about who you are and how you might contribute to our community. We understand that application season can get stressful, so we're here with you every step of the way. Good luck!`,
    },
    {
        question:
            "What are the responsibilities and time commitments associated with being a member?",
        answer: `Responsibilities and time commitments for members vary by project. On average, we expect our analysts to commit 6-8 hours per week to project work, including team meetings, client communication, and individual tasks. Additionally, members are expected to attend weekly club-wide meetings. New members are also required to participate in weekly Technical Development sessions, which are workshops specifically designed to enhance academic and professional success.`,
    },
    {
        question:
            "What specific skills/qualifications do you look for in an applicant?",
        answer: `There are no particular skills or qualifications we look for in applicants—every analyst class we recruit has a diverse array of technical skills and experiences. Instead, what we prioritize is passion. In Atlas, our members have a drive to continuously learn, develop, and innovate. As a technical consulting organization, this is especially important as our work has a real-world impact. This is why we look for applicants who are truly excited about the world of tech. We value a mindset focused on growth and learning, qualities we believe are quintessential to success in our field of work.`,
    },
    {
        question: "What will the interview be like?",
        answer: `Our interview process typically consists of behavior and technical portions. For our behavior interviews, we aim to gauge your ability to work efficiently and effectively in teams and your overall fit within our community. For our technical interviews, we strive to assess your logical thinking and problem-solving skills. These interviews are not meant to be stressful and are simply a way for us to further understand who you are.`,
    },
    {
        question: "What is a technical interview?",
        answer: `A technical interview is designed to assess your problem-solving skills and how you approach challenges. We will ask you problems tailored to your level of technical experience. These interviews are a chance for you to show us your critical thinking abilities and capacity to learn, even under pressure.`,
    },
    {
        question: "How should I prepare?",
        answer: `Ask your friends to mock interview you, refresh yourself with any previous technical work, and be sure to get some rest! Whether we ask you a question on the spot or have you work through a tough problem, we want to see what you are capable of at your best!`,
    },
];

export const pastProjects = [
    {
        name: "Shapelog",
        description:
            <div>
                ShapeLog is a fitness company whose devices feature sensors
                to collect data from weight training machines. We have implemented
                a display for their circuit class that shows the class’ progress and
                goals in real time from data collected from the machines.
            </div>,
        photo: shapelog,
        technologies: ["React", "API Development"],
    },
    {
        name: "Ascend Tech",
        description:
            <div>
                Ascend Tech is a platform that aims to take the best aspects of
                services like Glassdoor and Levels.fyi to provide a more holistic
                picture of a company and their culture using crowdsourced data.
            </div>,
        photo: ascendTech,
        technologies: ["Prisma", "Next.js"],
    },
    {
        name: "BuyMySpot",
        description:
            <div>
                BuyMySpot provides a peer-to-peer marketplace for parking solutions
                on college campuses. Check out the live website <Link
                    className="underline hover:text-ad-blue duration-200"
                    href="https://www.buymyspot.com"
                    target="_blank">here</Link>.
            </div>,
        photo: buyMySpot,
        technologies: [
            "GraphQL",
            "TypeScript",
            "React",
            "Amazon Cognito",
            "Stripe",
        ],
    },
];

export const servicesLong = [
    {
        service: "App/Web Development",
        description: `Our consultants specialize in creating high-quality mobile apps 
        and websites with rich user experiences. Using Agile development 
        techniques, we have developed a wide range of products, including 
        news aggregation services integrated with machine learning-based 
        recommendations and cross-platform wellness apps. Our analysts 
        craft elegant, minimalist interfaces with scalability and maintainability. 
        We collaborate closely with clients to ensure their visions are realized.`,
        logo: webDev,
    },
    {
        service: "UI/UX Design",
        description: `Atlas Digital specializes in user interface (UI) and user experience 
        (UX) design, creating engaging and intuitive digital experiences. Our 
        designers focus on understanding user behaviors and preferences to craft 
        interfaces that are not only visually appealing but also functional and 
        user-friendly. Whether it's a website, mobile app, or software interface, 
        we ensure that every design decision is driven by enhancing the user's 
        interaction with the product.`,
        logo: uxDesign,
    },
    {
        service: "Machine Learning/AI",
        description: `Atlas Digital specializes in a wide spectrum of AI technologies that 
      support businesses, including automating processes and analyzing data. 
      Our solutions range from machine learning to natural language processing, 
      enabling you to interface with consumers, analyze large data sets, and 
      make informed decisions.`,
        logo: aiml,
    },
    {
        service: "Search Engine Optimization",
        description: `Atlas Digital uses modern SEO techniques to increase your site traffic 
        and search engine rankings for keywords and long-tail phrases. Through 
        Technical and Content SEO, our consultants ensure that search engines 
        can efficiently index and crawl through your webpages and more easily 
        detect relevant keywords.`,
        logo: seo,
    },
    {
        service: "Database Management",
        description: `Atlas Digital specializes in designing and setting up scalable and 
        maintainable databases in SQL and NoSQL formats. We tailor databases 
        for various purposes, from user authentication to recording research 
        data. Our data scientists can also assist with analytics, providing 
        insights into customer demographics and more.`,
        logo: dbManagement,
    },
    {
        service: "Cloud Computing",
        description: `Cloud computing offers businesses scalable computing resources as a 
        service, saving time and costs on infrastructure maintenance. Atlas 
        Digital streamlines the process of deploying your service to the cloud. 
        Our consultants have extensive experience with AWS, Azure, Google Cloud, 
        Digital Ocean, and Heroku, deploying scalable, maintainable web systems 
        to the cloud without disrupting your business.`,
        logo: cloudComputing,
    },
];

export const clientTestimonials = [
    {
        name: "BuyMySpot",
        testimonial: `"They remained flexible through the project, and, even during a 
        pandemic, they were able to adjust their approaches and produce quality deliverables."`,
        photo: buymyspotLogo,
    },
    {
        name: "Cantoo",
        testimonial: `"Atlas Digital not only delivered an aesthetically beautiful user interface 
        to make our app more accessible, but also found vulnerabilities in our app's configuration 
        that would have otherwise gone unnoticed."`,
        photo: cantooLogo,
    },
    {
        name: "Artizan",
        testimonial: `“Creative, determined, and consistently professional. Atlas Digital has 
        helped engineer our platform and its experience from the ground.”`,
        photo: artizanLogo,
    },
];

export const typewriter = [
    "1st Tech Consulting Group at the University of Michigan",
    "Dual Affiliation with CoE and UMSI",
    "Professional and Social Community",
];

export const servicesShort = [
    {
        name: "App/Web Development",
        logo: webDev,
    },
    {
        name: "UI/UX Design",
        logo: uxDesign,
    },
    {
        name: "Machine Learning/AI",
        logo: aiml,
    },
    {
        name: "Search Engine Optimization",
        logo: seo,
    },
    {
        name: "Database Management",
        logo: dbManagement,
    },
    {
        name: "Cloud Computing",
        logo: cloudComputing,
    },
];

export const stats = [
    {
        stat: 65,
        suffix: "+",
        label: "Members",
    },
    {
        stat: 35,
        suffix: "+",
        label: "Alumni",
    },
    {
        stat: 20,
        suffix: "+",
        label: "Clients",
    },
    {
        stat: 10,
        suffix: "+",
        label: "Majors",
    },
];

export const whoWeAre = [
    `Atlas Digital is a student consulting organization at the University of 
    Michigan focused on providing technological and design-oriented solutions 
    to businesses, startups, and nonprofits. We actively cultivate a dynamic 
    environment for our members, fostering professional growth through hands-on 
    experiences and a supportive network of highly talented individuals.`,
    `Atlas Digital offers a unique opportunity to make a real impact within 
    a tight-knit community, where our passion for innovation drives us to 
    transform our ideas into reality.`
];

export const semesterlyGettaway = {
    name: 'Semesterly Getaway',
    slides: [
        {
            photo: trek,
            event: 'Career Trek',
            description: 'Chicago, Winter 24'
        },
        {
            photo: retreat,
            event: 'Retreat',
            description: 'Port Austin, Fall 23'
        }
    ]
};

export const professionalDevelopment = {
    name: 'Professional Development',
    slides: [
        {
            photo: techDev,
            event: 'Tech Dev',
            description: 'Ann Arbor, Winter 24'
        },
        {
            photo: companyVisit,
            event: 'Company Visits',
            description: 'Chicago, Winter 24'

        },
        {
            photo: projectExperience,
            event: 'Project Experience',
            description: 'Ann Arbor, Winter 24'
        }
    ]
}

export const mentorship = {
    name: 'Mentorship',
    slides: [
        {
            photo: bigLittle1,
            event: 'Big Little',
            description: 'Ann Arbor, Winter 24'
        },
        {
            photo: bigLittle2,
            event: 'Big Little',
            description: 'Ann Arbor, Winter 24'
        },
        {
            photo: bigLittle3,
            event: 'Big Little',
            description: 'Ann Arbor, Winter 24'
        }
    ]
}

export const exampleProjects = [
    bfPangea, monday, humanElement, palmTree, saphran, dewpoint
]

export const companyCloud = [
    atNt, meta, salesforce, google, deloitte, stripe, figma, amazon,
    mongoDB, apple, paypal, palantir, duolingo, janeStreet, capitalOne,
    uber, intel, akunaCapital, ernstNyoung, serviceNow, tesla, verizon, bubble, microsoft,
    imc, jpMorgan, bloomberg, cisco, bankOfAmerica, accenture, ibm, snap, 
    ramp, tiktok, robinhood, databricks, datadog
];

export const notRecruitingText = `We are not looking to take on any new members at the moment, as our recruitment cycle has ended. Please check back for recruitment information at the start of next semester.`