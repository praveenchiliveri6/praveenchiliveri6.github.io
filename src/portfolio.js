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
  username: "Praveen Chiliveri",
  title: "Hi all, I'm Praveen",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1jUFJGVjYpfejqWRnhhLTNz5Y789hMf1Z/view", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/praveenchiliveri6",
  linkedin: "https://www.linkedin.com/in/praveen-chiliveri/",
  gmail: "praveenchiliveri6@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Full Stack Development",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Frontend Excellence: Enhanced application UI with React; introduced plug-n-play architecture, boosting development speed and cutting load times by 10%. Integrated dynamic visualizations with Highcharts.js."
    ),
    emoji("⚡ Backend Proficiency: Crafted API endpoints with Flask and PostgreSQL, and integrated them with React-based UI, ensuring smooth user experience."),
    emoji(
      "⚡ DevOps Integration: Adopted Docker for containerized service deployment, fostering consistent cross-platform development. Utilized Azure DevOps and SonarQube for efficient deployments and quality control."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fab fa-c-plus-plus"
    },
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Flask",
      fontAwesomeClassname: "fas fa-server"
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Arizona State University",
      logo: require("./assets/images/ASULogo1.jpg"),
      subHeader: "Master of Computer Science",
      duration: "August 2022 - May 2024",
      desc: "GPA: 4.0/4.0",
      courses: "Operating Systems, Algorithms, Software Security, Blockchain, Data Processing at Scale, Machine Learning, Information Assurance & Security, Mobile Computing, Software Verification, Validation & Testing",
    },
    {
      schoolName: "National Institute of Technology, Calicut",
      logo: require("./assets/images/nitc_logo.png"),
      subHeader: "Bachelor of Technology in Electronics & Communication Engineering",
      duration: "August 2015 - May 2019",
      courses: "Data Structures & Algorithms, Computer Networks, Artificial Intelligence, Graph Theory, Cryptography",
    }
  ]
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "SDE Intern",
      company: "Amazon",
      companylogo: require("./assets/images/amazon_logo_4.png"),
      date: "May 2023 – Aug 2023",
      descBullets: [    "Designed, implemented, and released a functionality within a LLM based conversational chatbot to enable seamless notebook sharing among users via shareable links.", 
         "Engineered a feature that allows the users to configure the settings for each conversation independently enhancing the user experience.",
             "Built and launched a feature to improve collaboration by enabling users to contribute important notebooks to gallery which displays only the approved notebooks and others can easily preview and re-use these notebooks for further experimentation."]
    },
    {
      role: "Software Engineer II",
      company: "Philips Innovation Campus",
      companylogo: require("./assets/images/philips_logo_1.png"),
      date: "Oct 2021 – July 2022",
      descBullets: [ "Developed a python package to transfer huge files from Vendor Cloud to Philips PaaS Cloud via multi-part download/upload mechanism",
      "Automated the package deployment process by building a GitHub Actions CI/CD pipeline.",
        "Owned the development of the project and accomplished despite tight deadlines, resulting in additional data transfer projects from the customer.", 
         "Supervised two interns, providing hands-on guidance on PaaS, Python, Database, and Jenkins within the project, fostering skill development."]
    },
    {
      role: "Software Engineer",
      company: "Philips Innovation Campus",
      companylogo: require("./assets/images/philips_logo_1.png"),
      date: "June 2019 – Sept 2021",
      descBullets: [    "Streamlined a manual process by designing a Python package to transfer huge files from customer environments to the designated customer-specific folder within the S3 Bucket.",  
        "Researched, developed, and successfully rolled out NGINX proxy application in cloud foundry, which acts as bridge between Tableau application and IAM, that facilitates seamless IAM authentication for large number of Tableau application users.",
           "Created a Flask-based backend application facilitating data analysts in quickly identifying the correct filenames by retrieving original file names through their corresponding hashed value."]
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
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
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
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google KickStart Competition",
      subtitle:
        "Secured a global rank of 165 out of 15K participants in Google 2023 Farewell Round and 323 in Google Kickstart 2022 Round G.",
      image: require("./assets/images/google_kickstart_logo.png"),
      imageAlt: "Google KickStart Competition",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1PwXBYwusEdUGIQ3yNdssp7Qn3rDcNWjH/view"
        }
      ]
    },
    {
      title: "Leetcode Biweekly Contest",
      subtitle:
        "Secured a global rank of 239 out of 20K participants in Leetcode Biweekly 96th Contest.",
      image: require("./assets/images/leetcode_logo_3.png"),
      imageAlt: "Leetcode Biweekly Contest",
      footerLink: [
        {
          name: "leaderboard",
          url: "https://leetcode.com/contest/biweekly-contest-96/ranking/10/"
        },
        {
          name: "profile",
          url: "https://leetcode.com/praveenchiliveri/"
        }
      ]
    },

    {
      title: "Codeforces Round 764",
      subtitle: "Secured a global rank of 893 out of 20K participants in Codeforces Round 764.",
      image: require("./assets/images/codeforces.jpg"),
      imageAlt: "Codeforces Round 764",
      footerLink: [
        {
          name: "leaderboard",
          url: "https://codeforces.com/contest/1624/standings/participant/126398421"
        },
        {
          name: "profile",
          url: "https://codeforces.com/profile/praveenchiliveri6"
        }
      ]
    },

    {
      title: "Hackerearth October Circuits 2023",
      subtitle: "Secured a global rank of 14 out of 2200 participants in October Circuits 2023 contest.",
      image: require("./assets/images/hackerearth_logo.png"),
      imageAlt: "Hackerearth October Circuits 2023",
      footerLink: [
        {
          name: "leaderboard",
          url: "https://www.hackerearth.com/challenges/competitive/october-circuits-23/leaderboard/"
        },
        {
          name: "profile",
          url: "https://www.hackerearth.com/@praveen931"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
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
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
