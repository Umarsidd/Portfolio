// Mock data for Mohd Umar Siddiqui's Portfolio

export const personalInfo = {
  name: "Mohd Umar Siddiqui",
  title: "Full Stack Developer",
  tagline: "Building scalable web applications with 3+ years of expertise in MERN Stack, Cloud Technologies & Agile Development",
  email: "softengineer0001@gmail.com",
  phone: "+91 9506425353",
  location: "Lucknow, India",
  linkedin: "https://linkedin.com/in/mohd-umar-siddiqui",
  github: "https://github.com/Umarsidd",
  resumeUrl: "/resume.pdf"
};

export const stats = [
  { label: "Years Experience", value: "3+" },
  { label: "Projects Completed", value: "15+" },
  { label: "Technologies Mastered", value: "25+" },
  { label: "Client Satisfaction", value: "100%" }
];

export const skills = {
  frontend: [
    "React.js",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Redux"
  ],
  backend: [
    "Node.js",
    "Express.js",
    "Python",
    "Java",
    "REST APIs",
    "Microservices",
    "FastAPI"
  ],
  database: [
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Redis",
    "Database Optimization"
  ],
  cloudDevops: [
    "AWS",
    "Google Cloud Platform",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "CI/CD"
  ],
  tools: [
    "Git",
    "PySpark",
    "Power BI",
    "JWT Authentication",
    "Agile/Scrum"
  ]
};

export const experience = [
  {
    id: 1,
    company: "Tata Consultancy Services",
    position: "System Engineer",
    duration: "January 2022 - May 2025",
    location: "Lucknow, India",
    achievements: [
      "Developed and maintained full-stack web applications using HTML, CSS, JavaScript, and backend technologies, resulting in 30% increase in user retention",
      "Collaborated with cross-functional teams including QA, developers, and product owners in Agile/Scrum environment to deliver high-quality software solutions",
      "Implemented internationalization features for RTL languages, enhancing global application usability and market reach",
      "Designed and optimized complex SQL queries and database schemas, improving application performance and data retrieval efficiency",
      "Built customizable reporting templates and maintained On Demand Report (ODR) database systems for dynamic user reporting",
      "Performed proactive database optimization to prevent data lag and ensure optimal system performance"
    ]
  }
];

export const education = [
  {
    id: 1,
    degree: "Master of Computer Application (MCA)",
    institution: "IGNOU",
    duration: "2024 - 2025",
    status: "In Progress"
  },
  {
    id: 2,
    degree: "Bachelor of Computer Application (BCA)",
    institution: "University of Lucknow",
    duration: "2018 - 2021",
    status: "Completed"
  }
];

export const certifications = [
  {
    id: 1,
    name: "Google Cloud Platform - Associate Cloud Engineer",
    issuer: "Google Cloud",
    year: "2023"
  },
  {
    id: 2,
    name: "TCS Cricket League Award",
    issuer: "Tata Consultancy Services",
    year: "2023"
  }
];

export const projects = [
  {
    id: 1,
    title: "Full-Stack Food Delivery Application",
    category: "Web Application",
    description: "Comprehensive food delivery platform with secure JWT authentication, advanced filtering, Redux state management, and integrated payment gateway. Features include customizable ordering system, cart functionality, and real-time order tracking.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux", "JWT", "Payment Gateway"],
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
    featured: true
  },
  {
    id: 2,
    title: "Scholarship Registration Portal",
    category: "Web Application",
    description: "Scalable web application for scholarship management with document upload functionality, form validations, and admin dashboard. Implemented secure JWT authentication, email notifications via Nodemailer, and efficient database integration.",
    technologies: ["React.js", "Node.js", "MongoDB", "JWT", "Nodemailer", "Express.js"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800",
    featured: true
  },
  {
    id: 3,
    title: "E-Commerce Dashboard",
    category: "Web Application",
    description: "Admin dashboard for e-commerce platform with real-time analytics, inventory management, order tracking, and customer insights. Built with modern React patterns and responsive design.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Chart.js"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    featured: true
  },
  {
    id: 4,
    title: "Task Management Mobile App",
    category: "Mobile Concept",
    description: "Mobile-first task management application with drag-and-drop functionality, team collaboration features, and real-time synchronization across devices.",
    technologies: ["React Native", "Firebase", "Redux", "Push Notifications"],
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800",
    featured: false
  },
  {
    id: 5,
    title: "Weather Analytics API",
    category: "API Project",
    description: "RESTful API providing weather data analytics with historical trends, forecasting capabilities, and third-party integrations. Optimized for high-volume requests with caching strategies.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker"],
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800",
    featured: false
  },
  {
    id: 6,
    title: "User Authentication Microservice",
    category: "API Project",
    description: "Secure authentication microservice with OAuth2 implementation, role-based access control, and session management. Designed for scalability and integration with multiple applications.",
    technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "OAuth2", "Docker"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800",
    featured: false
  }
];

// Mock function to simulate contact form submission
export const mockContactSubmission = (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Save to localStorage
      const existingContacts = JSON.parse(localStorage.getItem('contacts') || '[]');
      existingContacts.push({
        ...formData,
        id: Date.now(),
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('contacts', JSON.stringify(existingContacts));
      resolve({ success: true, message: 'Message sent successfully!' });
    }, 1000);
  });
};
