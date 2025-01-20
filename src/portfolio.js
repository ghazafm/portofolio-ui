/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ghaza",
  title: "Hi, I'm Fauzan Ghaza Madani",
  subTitle: emoji(
    "Aspiring Data Scientist, Data Engineer, and Network Engineer 🚀"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1_YHFYjetcpbQNQnxCXIP4d3d5mkD7k7N/view?usp=sharing",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ghazafm",
  linkedin: "https://www.linkedin.com/in/fauzanghaza/",
  gmail: "contact@fauzanghaza.com",
  gitlab: "https://gitlab.com/ghazafm",
  // facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@fauzanghaza",
  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  instagram: "https://www.instagram.com/fauzan_ghaza/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "PASSIONATE ENGINEER EXPLORING DATA, NETWORKS, AND MACHINE LEARNING",
  skills: [
    emoji(
      "⚡ Build and deploy scalable Machine Learning models with MLOps pipelines"
    ),
    emoji(
      "⚡ Design and optimize network architectures with tools like GNS3 and Cisco technologies"
    ),
    emoji(
      "⚡ Develop dynamic web applications using Laravel and modern frameworks"
    ),
    emoji(
      "⚡ Analyze large datasets for actionable insights using Data Science and NLP"
    ),
    emoji(
      "⚡ Containerize and orchestrate services with Docker and Kubernetes"
    ),
    emoji(
      "⚡ Mentor and guide students in programming, networking, and operating systems"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "kubernetes",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "gns3",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "mlflow",
      fontAwesomeClassname: "fas fa-code-branch"
    },
    {
      skillName: "bentoml",
      fontAwesomeClassname: "fas fa-box-open"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "network-engineering",
      fontAwesomeClassname: "fas fa-project-diagram"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Brawijaya",
      logo: require("./assets/images/brawijayaLogo.png"),
      subHeader: "Bachelor of Computer Science in Informatics Engineering",
      duration: "July 2022 - December 2025 (Expected)",
      desc: "Focused on Data Science, Machine Learning, and Network Engineering. Achieved a GPA of 3.65/4.00.",
      descBullets: [
        "Led the Information-Centric Networking Laboratory, innovating with IoT and ML integration",
        "Presented a sentiment analysis project using NLP on 10,000+ tweets during the 2024 Indonesian election",
        "Mentored 150+ students in networking, programming, and operating systems as a laboratory assistant"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Science & Machine Learning", // Insert stack or technology you have experience in
      progressPercentage: "85%" // Insert relative proficiency in percentage
    },
    {
      Stack: "Network Engineering",
      progressPercentage: "80%"
    },
    {
      Stack: "Data Engineering",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section; change your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Coordinator of Laboratory",
      company: "Information Centric Networking (ICN) Laboratory",
      companylogo: require("./assets/images/icnLogo.png"),
      date: "September 2024 - Present",
      desc: "Lead team collaborations and oversee research in Information-Centric Networking at FILKOM UB.",
      descBullets: [
        "Streamlined lab management, optimizing resource allocation and team coordination for 20+ members",
        "Led the Water Potability Project integrating IoT, Backend, Machine Learning, and Network Security",
        "Initiated 5 knowledge-sharing sessions, engaging 50+ participants"
      ]
    },
    {
      role: "Data Scientist",
      company: "Basic Computing Community (BCC)",
      companylogo: require("./assets/images/bccLogo.png"),
      date: "May 2024 - Present",
      desc: "Empowering computer science students at Brawijaya University through impactful digital projects.",
      descBullets: [
        "Developed an NLP model for sentiment analysis of 10,000+ tweets during the 2024 Indonesian election",
        "Created a dashboard to visualize actionable insights for stakeholders"
      ]
    },
    {
      role: "Laboratory Assistant",
      company: "Faculty of Computer Science (FILKOM) University of Brawijaya",
      companylogo: require("./assets/images/filkomLogo.png"),
      date: "August 2023 - December 2024",
      desc: "Guided students in Computer Networking, Operating Systems, and Basic Programming courses.",
      descBullets: [
        "Mentored 150+ students in networking protocols, OS management, and programming",
        "Facilitated 11 hands-on networking labs, improving collaborative learning",
        "Created 8 live coding sessions, boosting programming performance by 25%",
        "Revamped the Computer Networking module for 300+ students"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME OF THE IMPACTFUL PROJECTS I HAVE CONTRIBUTED TO",
  projects: [
    {
      image: require("./assets/images/waterPotabilityProject.png"),
      projectName: "Water Potability ML Service",
      projectDesc:
        "Developed a Dockerized machine learning service for water potability analysis, leveraging MLflow for model tracking, MinIO for artifact storage, and PostgreSQL for metadata.",
      footerLink: [
        {
          name: "View Repository",
          url: "https://github.com/ghazafm/water-potability-service"
        }
      ]
    },
    {
      image: require("./assets/images/stressCheckerProject.png"),
      projectName: "Stress Checker Machine Learning Project",
      projectDesc:
        "An end-to-end system to predict stress levels using health, academic, and social data. Deployed using BentoML and MLflow for seamless serving and tracking.",
      footerLink: [
        {
          name: "View Repository",
          url: "https://github.com/ghazafm/stress-checker-model"
        }
      ]
    },
    {
      image: require("./assets/images/ngaringanProject.png"),
      projectName: "Population Administration System for Ngaringan Village",
      projectDesc:
        "Developed a web app using Laravel to streamline population data management with dynamic dashboards and role-based access.",
      footerLink: [
        {
          name: "View Repository",
          url: "https://github.com/ghazafm/ngaringan-population-system"
        }
      ]
    },
    {
      image: require("./assets/images/socialMediaSentimentProject.png"),
      projectName: "Social Media Sentiment Analysis",
      projectDesc:
        "Built an NLP model for sentiment analysis on 10,000+ tweets regarding the 2024 Indonesian election, delivering actionable insights through a dashboard.",
      footerLink: [
        {
          name: "View Repository",
          url: "https://github.com/ghazafm/social-media-sentiment"
        }
      ]
    },
    {
      image: require("./assets/images/richdjoeWebsite.png"),
      projectName: "Richdjoe Barbershop Website",
      projectDesc:
        "Designed and developed a dynamic website for Richdjoe Barbershop using Laravel, featuring booking systems, service listings, and admin tools.",
      footerLink: [
        {
          name: "View Live Website",
          url: "https://richdjoebarbershop.com"
        },
        {
          name: "View Repository",
          url: "https://github.com/ghazafm/richdjoe-website"
        }
      ]
    },
    {
      image: require("./assets/images/LaplaceProject.png"),
      projectName: "Laplace Project",
      projectDesc:
        "Created a LinkedIn scraper using Selenium to extract profile data and store it in JSON format for analytical purposes.",
      footerLink: [
        {
          name: "View Repository",
          url: "https://github.com/ghazafm/linkedin-profile-scraper"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Awards, and Projects I'm Proud Of!",

  achievementsCards: [
    {
      title: "1st Place - Stress Checker Machine Learning Project",
      subtitle:
        "Won 1st place at Informatics Festival 2024 for developing a stress-predicting ML model with a robust deployment pipeline using BentoML and MLFlow.",
      image: require("./assets/images/stressCheckerAward.png"),
      imageAlt: "Informatics Festival Award",
      footerLink: [
        {
          name: "Project Repository",
          url: "https://github.com/ghazafm/stress-checker-model"
        }
      ]
    },
    {
      title: "CCNA: Enterprise Networking, Security, and Automation",
      subtitle:
        "Earned the Cisco CCNA certification, demonstrating expertise in scalable networks, dynamic routing, and network security.",
      image: require("./assets/images/ccnaLogo.png"),
      imageAlt: "CCNA Logo",
      footerLink: [
        {
          name: "View Credential",
          url: "https://www.credly.com/badges/ccna-credential-link"
        }
      ]
    },
    {
      title: "CCNA: Switching, Routing, and Wireless Essentials",
      subtitle:
        "Achieved certification from Cisco in advanced routing and wireless essentials, solidifying expertise in modern networking technologies.",
      image: require("./assets/images/ccnaLogo.png"),
      imageAlt: "CCNA Switching, Routing, and Wireless Essentials",
      footerLink: [
        {
          name: "View Credential",
          url: "https://www.credly.com/badges/ccna-switching-routing-credential-link"
        }
      ]
    },
    {
      title: "CCNA: Introduction to Networks",
      subtitle:
        "Certified in foundational networking concepts, covering LAN/WAN technologies, IP addressing, and network troubleshooting.",
      image: require("./assets/images/ccnaLogo.png"),
      imageAlt: "CCNA Introduction to Networks",
      footerLink: [
        {
          name: "View Credential",
          url: "https://www.credly.com/badges/ccna-intro-networks-credential-link"
        }
      ]
    },
    // {
    //   title: "Google - Level 1: Cloud Networking",
    //   subtitle:
    //     "Certified in Google Cloud Networking Level 1, demonstrating proficiency in building and managing cloud networks.",
    //   image: require("./assets/images/googleCloudLogo.png"),
    //   imageAlt: "Google Cloud Logo",
    //   footerLink: [
    //     {
    //       name: "View Credential",
    //       url: "https://www.credly.com/badges/cloud-networking-link"
    //     }
    //   ]
    // },
    {
      title: "Silver Medal - NASPO 2021",
      subtitle:
        "Awarded the Silver Medal at the National Applied Science Project Olympiad for outstanding technical excellence.",
      image: require("./assets/images/naspoLogo.png"),
      imageAlt: "NASPO Award",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Sharing knowledge and insights in Data Science, Networking, and MLOps.",
  displayMediumBlogs: "true", // Set to true when ready to display fetched Medium blogs
  blogs: [], // No blogs currently
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Talks",
  subtitle: emoji(
    "Sharing Knowledge and Insights Through Speaking Engagements"
  ),

  talks: [
    {
      title: "Introduction to MLOps for Machine Learning Projects",
      subtitle:
        "Practical MLOps Workshop at BCC, University of Brawijaya, 2024",
      slides_url:
        "https://www.canva.com/design/DAGWlTW1cts/Nl2Au72DAs6ltuMfoga6vA/view?utm_content=DAGWlTW1cts&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h6b9aa5c650",
      event_url: "https://bcc.filkom.ub.ac.id/"
    },
    {
      title: "Pelatihan Pengembangan Infrastruktur dan Layanan Berbasis Web",
      subtitle:
        "Teater Heuristik, FILKOM UB, Malang, Indonesia, 26th October 2024",
      slides_url:
        "https://www.canva.com/design/DAGbBbHoyfo/rtFjRu4bafCdTrKZfi3YjA/view?utm_content=DAGbBbHoyfo&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hea09e60dae",
      event_url: "https://icn-filkom.ub.ac.id/article/1"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Sharing experiences and discussing technology trends",

  // Currently no podcast link, leave empty for now
  podcast: [], // Add podcast embed links here when available
  display: false // Set to true when ready to display this section
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Interested in collaborating on a project or just want to say hello? Feel free to reach out!",
  // number: "+62-87802065965",
  email_address: "contact@fauzanghaza.com"
};

// Twitter Section

const twitterDetails = {
  userName: "fauzanghaza", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
