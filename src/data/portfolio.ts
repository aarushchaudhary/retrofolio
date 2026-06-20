export const playerStats = {
  name: "AARUSH CHAUDHARY",
  title: "BACKEND & SYSTEMS ARCHITECT",
  bio: "I like making complex systems run fast and scale beautifully. I'm currently a Computer Science Engineering (Data Science) undergraduate, but my real education happens when I'm knee-deep in building distributed backends and AI-integrated software.",
};

export const mainQuest = {
  title: "PROJECT: NMPRALEKH",
  description: "A full-stack Management Information System portal built for NMIMS University across all 9 campuses. Manages faculty/student activities, publications, patents, and placements — with a complete role-based access control system.",
  status: "COMPLETED",
  techStack: ["Django", "PostgreSQL", "Redis", "Celery", "PgBouncer"],
  link: "https://github.com/aarushchaudhary/nmpralekh",
};

export type QuestStatus = "COMPLETED" | "IN_PROGRESS" | "FAILED" | "PENDING_DEPLOYMENT";

export const questLog = [
  {
    id: 1,
    title: "BioShield-IoT",
    description: "A biometric data processor using non-invertible 'BioHash' cryptography. Features an Android physical smart lock emulator, Python FastAPI backend, React dashboard, and live IoT polling via Redis.",
    status: "PENDING_DEPLOYMENT" as QuestStatus,
    techStack: ["FastAPI", "React", "Redis", "Android", "IoT"],
    liveLink: "#",
    githubLink: "https://github.com/aarushchaudhary/BioShield-IoT",
    difficulty: "LEVEL: INSANE"
  },
  {
    id: 2,
    title: "NMIMS Clinica",
    description: "A comprehensive Python desktop application for managing clinical operations, patient records, and medical inventory at the NMIMS campus clinic. Built with PySide6 for a modern native GUI.",
    status: "COMPLETED" as QuestStatus,
    techStack: ["Python", "PySide6", "SQLite"],
    liveLink: "#",
    githubLink: "https://github.com/aarushchaudhary/nmims-clinica",
    difficulty: "LEVEL: NORMAL"
  },
  {
    id: 3,
    title: "Afterlife Protocol",
    description: "A secure, automated system for transferring digital assets to beneficiaries. Combines the trustless Algorand Blockchain with AWS (RDS & S3) scalability and real-time monitoring via a Python Oracle on EC2.",
    status: "PENDING_DEPLOYMENT" as QuestStatus,
    techStack: ["Algorand", "Python", "AWS", "EC2"],
    liveLink: "#",
    githubLink: "https://github.com/aarushchaudhary/afterlife",
    difficulty: "LEVEL: HARD"
  },
  {
    id: 4,
    title: "NMIMS Campus Assistant",
    description: "An AI-powered web platform to streamline info access. Built with Python and a Retrieval-Augmented Generation (RAG) architecture, acting as an intelligent central hub for campus resources like library inventories and policies.",
    status: "PENDING_DEPLOYMENT" as QuestStatus,
    techStack: ["Python", "RAG", "AI"],
    liveLink: "#",
    githubLink: "https://github.com/Rachit-Jain-24/NMIMS-CAMPUS-ASSISTANT",
    difficulty: "LEVEL: INSANE"
  },
  {
    id: 5,
    title: "NMIMS Quiz App",
    description: "A comprehensive web-based quiz application designed for educational institutions, featuring real-time monitoring, automated grading, and advanced proctoring capabilities.",
    status: "PENDING_DEPLOYMENT" as QuestStatus,
    techStack: ["React", "Node.js", "WebSockets"],
    liveLink: "#",
    githubLink: "https://github.com/aarushchaudhary/nmims_quiz_app",
    difficulty: "LEVEL: HARD"
  }
];

export const characterBio = {
  introduction: `I like making complex systems run fast and scale beautifully. I'm currently a Computer Science Engineering (Data Science) undergraduate, but my real education happens when I'm knee-deep in building distributed backends and AI-integrated software. Recently, I architected a Domain-Specific Federated RAG system to solve "context collision" in massive datasets—a project that boosted response accuracy by 23% and was just published in the 2026 IEEE ICOECIT proceedings. Before that, I built a containerized Management Information System from scratch using Django, PostgreSQL, and Redis to handle concurrent data operations across nine university campuses.

For me, engineering is a team sport. I founded my university's first IEEE Student Branch and lead technical initiatives for our coding club because I love fostering a community where students actually build things instead of just studying theory. Mentoring peers in data structures, algorithms, and system design hasn't just helped them—it has made me a much sharper developer.

I spend most of my time working with Python, C++, AWS, Podman, Linux and other Unix like Systems. Right now, I'm looking for a Software Engineering Internship for Summer 2027. I want to join a fast-paced team where I can tackle massive scalability challenges, write clean code, and build infrastructure that makes a tangible impact.`,
  characterClass: "BACKEND & SYSTEMS ARCHITECT",
  currentLevel: 42
};

export const skillsTree = [
  { skillName: "Python", levelPercentage: 90, category: "Proficient" },
  { skillName: "C / C++", levelPercentage: 80, category: "Advanced" },
  { skillName: "SQL (PostgreSQL, MySQL, MariaDB)", levelPercentage: 90, category: "Proficient" },
  { skillName: "R", levelPercentage: 70, category: "Data Science Specific" },
  { skillName: "Backend Frameworks (Django, FastAPI)", levelPercentage: 85, category: "Advanced" },
  { skillName: "DevOps & Cloud (AWS, Linux, Podman)", levelPercentage: 85, category: "Advanced" },
  { skillName: "Distributed Systems (Redis, Celery)", levelPercentage: 80, category: "Advanced" },
  { skillName: "AI & RAG Architectures", levelPercentage: 85, category: "Advanced" },
];

export const otherSkills = [
  "JavaScript & Web Dev (React, Next.js, Node.js, HTML/CSS, Tailwind)",
  "NoSQL (MongoDB, Supabase)",
  "Data Structures & Algorithms",
  "Bash / Shell Scripting & SSH",
  "Git & GitHub",
  "Microsoft Power BI",
  "Operations Research",
  "Hardware & Robotics (Arduino, Raspberry Pi, IoT)",
  "AutoCAD & Tinkercad",
  "PHP"
];

export const experienceTimeline = [
  {
    role: "Intermediate",
    company: "The Millennium School",
    duration: "Apr 2012 – Mar 2024",
    responsibilities: [
      "Foundation in core programming, computing, and electronics.",
      "Technologies: C++, Linux, and 16+ others"
    ]
  },
  {
    role: "BTech, CS Engineering (Data Science)",
    company: "SVKM's NMIMS, Hyderabad",
    duration: "Jul 2024 – Aug 2028",
    responsibilities: [
      "Undergraduate studies focused on Data Structures, Distributed Systems, AI/ML, and Operations Research.",
      "Technologies: C++, Django, Python, and 25+ others"
    ]
  },
  {
    role: "Community Service",
    company: "Hope Initiative India",
    duration: "May 2025 - Jun 2025",
    responsibilities: [
      "Volunteered for health and community service initiatives."
    ]
  },
  {
    role: "Technical Lead",
    company: "Code IT",
    duration: "Aug 2025 - Jul 2026",
    responsibilities: [
      "Leading technical initiatives and steering development operations on-site.",
      "Technologies: Next.js, Supabase, and others"
    ]
  },
  {
    role: "Chair",
    company: "IEEE Student Branch, NMIMS Hyderabad",
    duration: "Dec 2025 - PRESENT",
    responsibilities: [
      "Spearheaded the successful creation and official recognition of the IEEE Student Branch.",
      "Technologies: PHP, Supabase"
    ]
  },
  {
    role: "Student Network Team",
    company: "IEEE Hyderabad Section",
    duration: "Feb 2026 - PRESENT",
    responsibilities: [
      "Operating in a hybrid setup to manage student networking and organizational activities across the Hyderabad section."
    ]
  }
];

export const trophyRoom = [
  {
    id: 1,
    title: "Winner",
    event: "AI 4 Health AI Project Expo",
    date: "25th September 2025",
    location: "SVKM's NMIMS, STME, Hyderabad",
    year: "2025",
    rewardText: "1st Place Honors",
    description: "Secured first place at the AI 4 Health AI Project Expo held at SVKM's NMIMS, STME, Hyderabad on 25th September 2025."
  },
  {
    id: 2,
    title: "Runner Up",
    event: "Nexathon 24-Hour Hackathon on Algorand Blockchain",
    date: "4th March 2026",
    location: "Symbiosis Institute of Technology, Hyderabad",
    year: "2026",
    rewardText: "Silver Medal",
    description: "Earned the runner-up spot at the Nexathon 24-Hour Hackathon on Algorand Blockchain at Symbiosis Institute of Technology, Hyderabad on 4th March 2026."
  },
  {
    id: 3,
    title: "3rd Place",
    event: "Pitch Please Pitching Competition",
    date: "1st April 2026",
    location: "SVKM's NMIMS, STME, Indore",
    year: "2026",
    rewardText: "Podium Finish",
    description: "Achieved 3rd place in the Pitch Please Pitching Competition at SVKM's NMIMS, STME, Indore on 1st April 2026."
  },
  {
    id: 4,
    title: "IoT Track Winner",
    event: "Innovathon 24-Hour Hackathon",
    date: "2nd April 2026",
    location: "SVKM's NMIMS, STME, Indore",
    year: "2026",
    rewardText: "Best in IoT",
    description: "Emerged as the IoT Track Winner at the Innovathon 24-Hour Hackathon at SVKM's NMIMS, STME, Indore on 2nd April 2026."
  }
];

export const playerNetwork = [
  { platform: "GitHub", url: "https://github.com/aarushchaudhary", username: "@aarushchaudhary" },
  { platform: "LinkedIn", url: "https://linkedin.com/in/aarush-chaudhary", username: "/in/aarush-chaudhary" }
];