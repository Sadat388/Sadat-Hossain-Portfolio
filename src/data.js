// Edit your information here. Components read everything from this file.
export const profile = {
  name: ["Sadat", "Hossain"],
  status: "Open to web developer and data roles",
  tagline:
    "Web developer with 2+ years of experience in front-end and back-end development, plus hands-on data analysis at Grameenphone. Based in Dhaka.",
  email: "sadathossain388@gmail.com",
  location: "Dhaka, Bangladesh",
  links: [
    ["GitHub", "https://github.com/Sadat388"],
    ["LinkedIn", "https://www.linkedin.com/in/sadathossain388/"],
  ],
  about: [
    "I build dynamic web applications with HTML, CSS, JavaScript, ReactJS, NodeJS, MySQL and NoSQL, and I care about how they feel to use.",
    "I hold a BSc in Computer Science and Engineering from BRAC University (2020–2024). There I directed event management for the Robotics Club, running workshops and national events.",
    "Recently I worked on data analysis and automation at Grameenphone Ltd. through Nextern and as a remote data entry specialist for a U.S.-based organisation, [Autism Society ​Habilitation ​Organization](https://asho-ny.org/).",
  ],
};

export const categories = ["All", "Full-stack", "Front-end"];

// Replace each link with your real Vercel URL. Leave '' to hide the button.
export const projects = [
  {
    title: "E-Commerce Website",
    link: "https://sadat-store.vercel.app/",
    cat: "Full-stack",
    color: "#0E8A6A",
    date: "Nov 2023",
    tools: ["HTML", "CSS", "NodeJS", "PostgreSQL", "ReactJS"],
    blurb: "Interactive online shop with a shopping cart.",
    detail:
      "Built the shopping website so users can add products smoothly. Implemented a secure checkout process with PostgreSQL integration for order management.",
  },

  {
    title: "BMI-Calculator",
    link: "https://bmi-calculator-omega-three.vercel.app",
    cat: "Front-end",
    color: "#2F4BFF",
    date: "Feb 2025",
    tools: ["HTML", "CSS", "NodeJS", "ReactJS"],
    blurb: "Website for calculating BMI.",
    detail:
      "Users can input their height and weight to calculate their BMI. The platform provides health insights based on the calculated BMI.",
  },
  {
    title: "Calculator App",
    link: "https://sadat388.github.io/Calculator-App/",
    cat: "Front-end",
    color: "#C2410C",
    date: "Jan 2024",
    tools: ["HTML", "CSS", "JavaScript"],
    blurb: "Simple calculator for basic operations.",
    detail:
      "A clean, easy-to-read interface with accurate calculations. The redesign led to a 10% increase in app opens.",
  },
  {
    title: "Tic-Tac-Toe Game",
    link: "https://sadat388.github.io/Tic-Tac-Toe/",
    cat: "Front-end",
    color: "#7C3AED",
    date: "Jun 2024",
    tools: ["HTML", "CSS", "JavaScript"],
    blurb: "Two-player crosses and circles game.",
    detail:
      "JavaScript handles the game logic, player turns and win conditions, with a clean CSS interface.",
  },
];

export const skills = [
  {
    group: "Web",
    items: ["HTML", "CSS", "JavaScript", "ReactJS", "NodeJS", "PHP"],
  },
  { group: "Databases", items: ["MySQL", "NoSQL", "PostgreSQL"] },
  {
    group: "Programming",
    items: ["Python", "Java", "Assembly", "Verilog", "MATLAB"],
  },
  {
    group: "Data science & ML",
    items: ["Python", "TensorFlow", "PyTorch", "Keras"],
  },
  {
    group: "Other",
    items: ["MS Office", "LaTeX", "Robotics", "GitHub", "Content Writing"],
  },
];

export const experience = [
  {
    when: "Feb 2026 – Aug 2026",
    title:
      "Data Entry Specialist, Autism Society ​Habilitation ​Organization - ASHO (USA)",
    sub: "Data Collection Team, remote",
    points: [
      "Entered and maintained accurate medical and client data in the database.",
      "Handled high-volume entry while keeping accuracy, consistency and confidentiality.",
      "Reviewed submissions for completeness and corrected errors.",
    ],
  },
  {
    when: "May 2025 – Jul 2025",
    title: "People & Organization Division, Grameenphone (Nextern)",
    sub: "COE",
    points: [
      "Supported the recruitment process.",
      "Automated documents for faster analysis and visualised data.",
      "Organised events and documented the internal OneGP platform.",
    ],
  },
  {
    when: "Apr 2025 – May 2025",
    title: "Product Division, Grameenphone (Nextern)",
    sub: "Acquisition, Voice, CMP & Postpaid",
    points: [
      "Analysed and visualised data.",
      "Automated work on large datasets with code.",
      "Monitored Voice and SMS packs.",
    ],
  },
];

export const background = [
  {
    when: "2020 – 2024",
    title: "BSc Computer Science and Engineering, BRAC University",
    sub: "CGPA 3.29",
  },

  {
    when: "2017 – 2019",
    title: "Science, Dhaka College",
    sub: "GPA 5.00",
  },
  {
    when: "2007 – 2017",
    title: "Science, Ideal School & College",
    sub: "GPA 5.00",
  },
];
