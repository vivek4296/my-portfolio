import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";
import {
  SiLeetcode,
  SiHackerrank,
  SiHackerearth,
  SiGithub,
} from "react-icons/si";

export const HERO_CONTENT = `I am a seasoned backend developer with a strong foundation in building scalable and high-performance systems. With ~5 years of experience in Java, Spring Framework, Kafka, AWS, and multiple databases, I specialize in designing robust architectures that handle millions of users. Passionate about problem-solving and system design, I thrive on creating efficient, reliable, and innovative solutions that drive business impact and enhance user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Septemeber 2022 - Present",
    role: "Member of Technical Staff - 2",
    company: "Adobe",
    description: `• As part of the Document Cloud Services team, I contribute to the development
of key features such as commenting and sharing within Adobe Acrobat.
• Improved the process of extracting and merging comments on shared PDF files
in Adobe Acrobat, resulting in a 45 percentage performance boost in
production by creating a new service for this functionality (2024).
• Developed a resiliency service from scratch to enhance the search functionality
in Adobe Acrobat for uploaded PDFs. This feature ensures reliable retry
mechanisms for searching keywords within shared files, so if a word is present
in any shared document, it will be displayed in the search results (2023).
• Experience in developing and maintaining scalable systems that handle millions
of requests per day.
• Successfully delivered end-to-end services to production, ensuring proper
engineering practices like scaling for traffic demands, creating dashboards for
analytics, and comprehensive monitoring.`,
    technologies: [
      "Java",
      "Spring Framework",
      "Kafka",
      "AWS",
      "Rest API",
      "HBase",
      "Elastic Search",
      "Redis",
    ],
  },
  {
    year: "July 2021 - September 2022",
    role: "Associate Software Engineer",
    company: "Tekion Corps",
    description: `• Working in the Backend Team to Develop API and integrate OEMs
• Worked on JSONata to convert json into required format
• Created whole new service from scratch to dynamically inject properties in the
service at runtime`,
    technologies: [
      "Java",
      "Spring Framework",
      "Kafka",
      "JSONata",
      "Rest API",
      "Redis",
      "MongoDB",
      "PSQL",
      "Blob Storage",
    ],
  },
  {
    year: "July 2020 - July 2021",
    role: "Backend Developer",
    company: "Orange Business Services",
    description: `• Developed RESTful APIs using Spring Boot, implementing GET, POST, PATCH
operations.
• Converted PL/SQL procedures into APIs for seamless integration with the UI.
• Worked on multiple projects, delivering APIs tailored to project requirements.
• Gained hands-on experience with Git and CI/CD pipelines.`,
    technologies: ["Java", "Spring Framework", "CI/CD Pipeline", "SQL"],
  },
  {
    year: "June 2018 - July 2018",
    role: "Trainee for Big Data",
    company: "C-DAC",
    description: `• Acquired knowledge of Big Data platforms like Hadoop, Hive, and Tableau for
data analysis and visualization.
• Analyzed Kaggle housing data, delivering visual insights into customer
preferences.
• Used Hadoop to ingest CSV files and Hive for data querying.
• Visualized data using Tableau for clear, actionable insights.`,
    technologies: ["Hadoop", "R", "Tableu", "Hive"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};

export const PLATFORM_LINKS = [
  {
    name: "LeetCode",
    icon: SiLeetcode,
    color: "#FFA116",
    link: "https://leetcode.com/vivek4296/",
  },
  {
    name: "HackerRank",
    icon: SiHackerrank,
    color: "#00EA64",
    link: "https://www.hackerrank.com/profile/vivek4296",
  },
  {
    name: "HackerEarth",
    icon: SiHackerearth,
    color: "#2C3454",
    link: "https://www.hackerearth.com/@vivek4296",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "#ffffff",
    link: "https://github.com/vivek4296",
  },
];

export const EDUCATION = {
  year: "2016 - 2020",
  degree: "Btech in Computer Science and Engineering",
  institution: "Chandigarh University, Punjab",
  CGPA: "8.1",
};
