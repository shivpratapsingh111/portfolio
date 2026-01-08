export const siteConfig = {
  name: "Shiv Pratap Singh",
  title: "Application Security Engineer",
  description: "Portfolio website of Shiv Pratap Singh",
  accentColor: "#1d4ed8",
  social: {
    email: "shivpratapsingh777.2@gmail.com",
    linkedin: "https://www.linkedin.com/in/shivpratapsingh111/",
    twitter: "https://x.com/ShivPratap0111",
    github: "https://github.com/shivpratapsingh111/",
  },
  aboutMe:
    "Computer Science undergraduate focused on application security, credited with multiple CVEs and responsible vulnerability disclosures to organizations such as Netflix, NASA, and Tata. Built automation frameworks for  reconnaissance and vulnerability scanning that cut manual effort by up to 90%. Experienced in web, API, and mobile penetration testing with documented risk reduction in production environments. Planning to obtain CEH and OSCP certifications to deepen penetration testing skills.",
  skills: ["Application Pentesting", "DAST", "OWASP Top 10", "Linux", "Python", "Bash Scripting", "Burp Suite"],
  projects: [
    {
      name: "Project Recon",
      description:
        "Developed a full-stack framework for automating reconnaissance, monitoring, and vulnerability scanning with real-time dashboard reporting, improving efficiency by reducing repetitive tasks by over 80%.",
      link: "https://github.com/shivpratapsingh111/projectRecon",
      skills: ["Python", "Shell"],
    },
    {
      name: "Fetcher",
      description:
        "It is made to fetch content of text based files from urls passed to it and save locally. Purposely to save js files.",
      link: "https://github.com/shivpratapsingh111/fetcher",
      skills: ["Go"],
    },
    {
      name: "Q2Doc",
      description:
        "Minimal document-QA app with RAG implementation built on top of FastAPI backend and a Vite React frontend.",
      link: "https://github.com/shivpratapsingh111/q2doc",
      skills: ["React", "Node.js", "Python"],
    },
    {
      name: "Find-In-JS",
      description:
        "Finds sensitive tokens, secrets and API keys based on some provided keywords or regex.",
      link: "https://github.com/shivpratapsingh111/Find-In-JS",
      skills: ["Python"],
    },
  ],
  experience: [
    {
      company: "Art of Living",
      title: "Application Security Engineer Intern",
      dateRange: "Oct 2023 - Mar 2024",
      bullets: [
        "Conducted endpoint security testing at Art of Living, identifying critical vulnerabilities such as SQL injection, resulting in a 30% reduction in potential security risks and ensuring a smooth production launch for 20+ endpoints.",
        "Delivered vulnerability briefings to development teams, resulting in 25% faster remediation cycles.",
        "Produced security assessment reports for 20+ web/API endpoints, enabling dev teams to remediate vulnerabilities 40% faster, reducing exposure windows.",
      ],
      link: "https://drive.google.com/file/d/1cDzPZQQU_7NAlbJ_5mvXWFhzd7Itv3uL/view?usp=sharing",
    },
    {
      company: "Freelance",
      title: "Application Pentesting",
      dateRange: "Jun 2023 - Present",
      bullets: [
        "Responsible vulnerability disclosures to organizations such as Netflix, NASA, and Tata.",
        "Performed 50+ security assessments, uncovering 165+ flaws with maintaining a 90.2% reporting accuracy rate on Bugcrowd.",
        "Identified and responsibly disclosed 250+ security flaws, including but not limited to RCE, SSRF, XSS, IDOR, Broken Access Control, and Business Logic issues.",
      ],
    },
  ],
  education: [
    {
      school: "Chandigarh University",
      degree: "Bachelor of Engineering (B.E.) in Computer Science and Engineering",
      dateRange: "Aug 2022 - Jun 2026",
      achievements: [
        "Delivered a live web security session to 500+ students, demonstrating OWASP Top 10 vulnerabilities with real-time examples and providing actionable remediation strategies.",
        "Founded the cybersecurity community, YAMA (600+ members), focused on offensive security and knowledge sharing.",
        "Orchestrated AWS-hosted CTF environments using Docker and Bash automation, supporting 180+ competitors.",
        "Managed 3 Capture the Flag events with over 650 participants, covering web, forensics, and reversing challenges.",
      ],
    },
  ],
  achievements: [
    {
      name: "Amazon AppSec CTF - APAC (Asia Pacific)",
      description:
        "Ranked 5th in Application Security CTF conducted by Amazon in Asia Pacific.",
      link: "https://drive.google.com/file/d/1_aK6Z55GiQ1YlSobvS5ECSEFgjEECsS3/view?usp=drive_link",
    },
    {
      name: "NCIIPC Grand Finalist (2025 & 2024)",
      description:
        "Ranked 14th among 22,000+ competitors in a national-level application penetration testing competition organized by the Indian Government.",
    },
    {
      name: "CVE-2024-38945",
      description:
        "Discovered a stored XSS vulnerability in a network management system.",
      link: "https://www.cve.org/CVERecord?id=CVE-2024-38945",
    },
    {
      name: "CVE-2023-44957",
      description:
        "Identified and reported a vulnerability in an RMS system, resulting in the assignment of a CVE.",
      link: "https://www.cve.org/CVERecord?id=CVE-2023-44957",
    },
    {
      name: "Hall of Fame",
      description:
        "Recognized by Netflix, Tata, GoPro, NASA, Pinterest, US Government (PBGC) and 115+ organizations.",
    },
  ],
  certifications: [
    {
      name: "Foundation of Cloud IoT Edge ML",
      description:
        "IIT Kanpur",
      link: "https://drive.google.com/file/d/1avySiyq8ePSjtO07mjRpRLMBQ7ZDHWmg/view?usp=sharing",
    },
    {
      name: "Cloud Computing",
      description:
        "IIT Kharagpur",
      link: "https://drive.google.com/file/d/1VAmE4LnaXvKg5TtIguf4SxUSI6HXqFzk/view?usp=sharing",
    },
    {
      name: "Multi-Core Computer Architecture",
      description:
        "IIT Guwahati",
      link: "https://drive.google.com/file/d/1L_QE-SAhE45qeSRNrU-IKRKmmZtsKear/view?usp=sharing",
    },
  ],
};
