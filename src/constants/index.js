import { meta, shopify, starbucks, capgemini, tcs, enstrapp, enstrappitsolutions, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    angular,
    bootstrap,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    intellij,
    jira,
    maven,
    eclipse,
    jquery,
    seimense,
    incident,
    inspection,
    qserve,
    visualstudiocode,
    ionic
} from "../assets/icons";

import { BiError } from "react-icons/bi";
import { PiDotsNineLight } from "react-icons/pi";
import { FcInspection } from "react-icons/fc";
import { IoServer } from "react-icons/io5";

export const skills = [
    {
        imageUrl: angular,
        name: "Angular",
        type: "Frontend",
    },
    {
        imageUrl: bootstrap,
        name: "Bootstrap",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: eclipse,
        name: "Eclipse",
        type: "Version Control",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: ionic,
        name: "Ionic",
        type: "Frontend",
    },
    {
        imageUrl: intellij,
        name: "IntelliJ",
        type: "Version Control",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: jira,
        name: "Jira",
        type: "Version Control",
    },
    {
        imageUrl: jquery,
        name: "JQuery",
        type: "Frontend",
    },
    {
        imageUrl: maven,
        name: "maven",
        type: "Version Control",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: visualstudiocode,
        name: "Visual Studio Code",
        type: "Version Control",
    },
];

export const experiences = [
    {
        title: "Front End Developer",
        company_name: "Capgemini",
        icon: capgemini,
        iconBg: "#accbe1",
        date: "July 2022 - April 2024",
        points: [
            "Engaged in requirement analysis, actively participating in grooming sessions to thoroughly comprehend customer needs and project requirements.",
            "Led requirement analysis sessions, actively participating in grooming sessions to grasp and analyze customer needs effectively.",
            "Took charge of bug-fixing tasks, and implementing new functionalities by actively participating in coding and development activities.",
        ],
    },
    {
        title: "Angular Developer",
        company_name: "TCS",
        icon: tcs,
        iconBg: "#fbc3bc",
        date: "Feb 2022 - July 2022",
        points: [
            "Developing and maintaining web applications using Angular and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Front End Developer",
        company_name: "Enstrapp IT Solutions",
        icon: enstrapp,
        iconBg: "#A5D6A7",
        date: "Nov 2019 - Feb 2022",
        points: [
            "Played a key role in the development process, emphasizing the swift restoration of service operations to sustain optimal service quality and availability.",
            "Actively engaged in the project, aimimg to minimize disruptions to business operations and maintain the utmost service quality and availability throughout the development lifecycle of the web application.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Jyothsna67',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/peddhintij',
    }
];

export const projects = [
    {
        iconUrl: PiDotsNineLight,
        theme: 'btn-back-red',
        name: 'Seimense Healthineers',
        description: 'Involved in developing and implementing the end-to-end CRM solution as part of the Shareville program at Siemens Healthineers. Played a pivotal role in configuring and defining device parameters within Tacton, ensuring accurate pricing generation based on configurations.',
    },
    {
        iconUrl: BiError,
        theme: 'btn-back-yellow',
        name: 'Incident Management',
        description: 'Played a key role in the development and implementation of the Incident Management web application, designed to swiftly restore normal service operations and minimize disruptions to business operations. Implemented functionalities within the application to serve as a notification trigger for incidents, efficiently alerting the management group to take necessary actions promptly.',
    },
    {
        iconUrl: FcInspection,
        theme: 'btn-back-blue',
        name: 'E-inspection',
        description: 'Facilitated the development of the E-Inspection web application with a core focus on swiftly restoring normal service operations to minimize disruptions to business operations. Actively engaged in the project, aiming to minimize disruptions to business operations and maintain the utmost service quality and availability throughout the development lifecycle of the E-Inspection web application.',
    },
    {
        iconUrl: IoServer,
        theme: 'btn-back-red',
        name: 'Q-serve',
        description: 'Engaged in a pivotal role within Wipro GE Healthcare Company, specifically focusing on a wide array of medical equipment and diagnostic products, notably medical imaging systems. Contributed significantly to the project by executing QA tests that guaranteed the XR-based equipment operated within specified limits, aligning with stringent safety guidelines. This approach upheld the safety protocols and ensured regulatory compliance with X-ray radiation emission levels.',
    },
];