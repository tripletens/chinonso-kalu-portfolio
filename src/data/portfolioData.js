/**
 * Central Portfolio Data Configuration
 * Chinonso Kalu — Software Engineer / Application Support Engineer
 * 
 * Edit this single file to update any information across the portfolio.
 */

export const personalInfo = {
  name: "Chinonso Kalu",
  title: "Software Engineer / Application Support Engineer",
  location: "Nigeria",
  email: "kaluchinonso.dev@gmail.com",
  github: "https://github.com/tripletens",
  githubUsername: "tripletens",
  linkedin: "https://linkedin.com/in/iamkaluchinonso",
  linkedinUsername: "iamkaluchinonso",
  resumePath: "/resume.pdf",
  primaryFocus: [
    "Backend Engineering",
    "Web Applications",
    "Application Support",
    "System Integration",
    "REST APIs",
    "Databases",
    "Automation & DevOps"
  ],
  heroHeadline: "Software Engineer building reliable web applications and supporting production systems.",
  heroSupportingText: "Software Engineer with experience building and supporting web applications, backend services, APIs and database-driven systems. I work across development, troubleshooting, integration, security remediation and deployment to help keep software reliable and maintainable.",
  about: [
    "I am a software engineer with a background in Computer Science and practical experience working with web applications, backend systems and production environments.",
    "My work sits across software development and application support. I enjoy understanding how systems work, identifying problems, improving existing applications and building maintainable solutions.",
    "I have worked with PHP and Laravel, JavaScript, React, databases, REST APIs, Linux/server environments, Docker and cloud infrastructure. I am particularly interested in backend engineering, system reliability, automation and building software that solves practical problems."
  ]
};

export const focusAreas = [
  {
    id: "backend",
    title: "Backend Engineering",
    description: "Designing and developing backend services, APIs and business logic using PHP/Laravel and related technologies.",
    icon: "Server"
  },
  {
    id: "web-apps",
    title: "Web Applications",
    description: "Building database-driven web applications with modern frontend technologies and clean backend architecture.",
    icon: "Layout"
  },
  {
    id: "app-support",
    title: "Application Support",
    description: "Investigating production issues, debugging applications, resolving incidents and working with technical teams to restore services.",
    icon: "Activity"
  },
  {
    id: "apis-integrations",
    title: "APIs & Integrations",
    description: "Building and integrating REST APIs and connecting applications with external services and platforms.",
    icon: "Network"
  },
  {
    id: "databases",
    title: "Databases",
    description: "Working with relational databases including MySQL and PostgreSQL, including schema design, queries, optimization and application integration.",
    icon: "Database"
  },
  {
    id: "automation-infrastructure",
    title: "Automation & Infrastructure",
    description: "Working with Linux environments, Docker, cloud infrastructure and deployment processes while looking for opportunities to automate repetitive tasks.",
    icon: "Terminal"
  }
];

export const experience = [
  {
    role: "Software Engineer / Application Support Engineer",
    organization: "MTN Nigeria — Digital / Technology Environment",
    type: "Production Engineering & Application Support",
    responsibilities: [
      "Supporting business-critical web applications and digital services across high-availability production environments.",
      "Investigating application issues and systematically troubleshooting production problems to minimize downtime.",
      "Working closely with backend systems, databases, and application deployments to ensure reliable day-to-day operations.",
      "Performing security remediation activities and addressing vulnerabilities identified through routine and automated security scanning.",
      "Collaborating with cross-functional technical teams—including Networking, Unix, Systems Administration, Database, Information Security, and Development teams—to investigate and resolve complex incidents.",
      "Supporting integration between internal applications, third-party vendor platforms, and core enterprise systems.",
      "Monitoring application health and behaviour to proactively detect anomalies before they impact end users.",
      "Working with development and infrastructure engineering teams during change management cycles and deployment maintenance windows."
    ]
  }
];

export const projects = [
  {
    id: "school-result-portal",
    title: "Easy School Result & Parent Portal",
    badge: "Web Application",
    description: "A school result management platform designed to simplify academic result processing and parent access.",
    problem: "Manual academic grading, score collation, and paper report card distribution in educational institutions often lead to calculation errors, administrative bottlenecks, and slow parent communication.",
    solution: "Engineered a centralized web portal with teacher score entry, Excel-based bulk result importing, automatic totals/percentages/grade calculations, multi-stage approval workflows, and authenticated parent access for viewing and printing branded result sheets.",
    features: [
      "Teacher result entry & validation",
      "Excel-based bulk result import",
      "Automatic totals, percentages & grade calculation",
      "Result review & administrative approval workflow",
      "Parent authentication & student profile linking",
      "Secure result viewing and branded PDF download/printing"
    ],
    technologies: ["Laravel", "React", "MySQL", "REST API", "Docker"],
    githubUrl: null, // Shows "Repository coming soon"
    liveUrl: null
  },
  {
    id: "lythub-technologies",
    title: "Lythub / Education Technology",
    badge: "Software Solutions",
    description: "Lythub Technologies focuses on educational software and practical technology solutions for organisations and schools.",
    problem: "Educational institutions and small organizations need cohesive digital infrastructure for administration, fee processing, student portals, and web presence without overwhelming enterprise complexity.",
    solution: "Designed and deployed tailored software modules covering school management, automated grading, parent access portals, institutional web presence, payment gateway integrations, and reliable database administration.",
    features: [
      "School management & records administration",
      "Result processing engines & parent portals",
      "Secure payment gateway integrations",
      "Institutional website development & maintenance",
      "Relational database design & optimization"
    ],
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "REST APIs", "Payment Integrations"],
    githubUrl: null, // Shows "Repository coming soon"
    liveUrl: null
  },
  {
    id: "laravel-rest-api",
    title: "Task Management REST API",
    badge: "Backend Engineering",
    description: "A structured, production-ready REST API demonstrating robust Laravel backend architecture, security, and automated testing.",
    problem: "Client applications need reliable, well-documented, and consistent backend APIs with role-based access control, strict input validation, predictable responses, and high test coverage.",
    solution: "Constructed a modular REST API adhering to modern backend best practices—including JWT authentication, role & permission authorization, Form Requests, DTOs, Service and Repository layers, Eloquent API resources, pagination, filtering, search, and comprehensive automated test suites.",
    features: [
      "User registration & JWT authentication",
      "Granular role & permission authorization",
      "Projects & task lifecycle management",
      "Form Requests & Data Transfer Objects (DTOs)",
      "Dynamic filtering, search, and pagination",
      "API documentation & automated PHPUnit tests"
    ],
    technologies: ["PHP", "Laravel", "JWT", "MySQL/PostgreSQL", "PHPUnit", "Docker", "REST API"],
    githubUrl: "https://github.com/tripletens",
    liveUrl: null
  },
  {
    id: "bill-payment-engine",
    title: "Bill Payment & Integration Engine",
    badge: "System Integration",
    description: "A backend service built for reliable third-party bill payment integrations, transaction processing, and automated reconciliation.",
    problem: "Financial and utility transaction integrations face network timeouts, inconsistent third-party responses, duplicate transaction risks, and potential data divergence without idempotent transaction processing.",
    solution: "Architected a resilient integration layer utilizing database transactions, webhook verification, idempotent request handling, structured audit logging, and automated status reconciliation to ensure safe multi-provider transactions.",
    features: [
      "Third-party biller API integration",
      "Idempotent transaction processing",
      "Webhook receiver with signature validation",
      "Database transactions & rollback safety",
      "Comprehensive error handling & audit logging",
      "Automated transaction status queries & reconciliation"
    ],
    technologies: ["PHP / Laravel", "REST APIs", "MySQL", "Webhooks", "Queues", "Security Logging"],
    githubUrl: null, // Shows "Repository coming soon"
    liveUrl: null
  }
];

export const skillCategories = [
  {
    name: "Backend",
    skills: ["PHP", "Laravel", "REST APIs", "JWT", "MVC", "Service Layer", "Repository Pattern", "DTOs"]
  },
  {
    name: "Frontend",
    skills: ["JavaScript", "React", "HTML", "CSS", "Responsive Design"]
  },
  {
    name: "Databases",
    skills: ["MySQL", "PostgreSQL", "Schema Design", "Query Optimization"]
  },
  {
    name: "DevOps / Infrastructure",
    skills: ["Docker", "Linux", "AWS", "DigitalOcean", "CI/CD", "Nginx", "Git", "GitHub"]
  },
  {
    name: "Testing",
    skills: ["PHPUnit", "API Testing", "Automated Testing"]
  },
  {
    name: "Engineering Practices",
    skills: ["Application Support", "System Troubleshooting", "Security Remediation", "API Integration", "Incident Response"]
  }
];

export const engineeringPrinciples = [
  {
    number: "01",
    title: "Understand the Problem",
    description: "Before changing code, understand the business requirement, system behaviour and the root issue. Treating symptoms without understanding the cause leads to fragile software."
  },
  {
    number: "02",
    title: "Build for Maintainability",
    description: "Prefer clear architecture, separation of concerns and code that another engineer can easily understand, test, and safely extend months later."
  },
  {
    number: "03",
    title: "Debug Systematically",
    description: "Use logs, telemetry, database queries, request analysis and controlled reproducible testing rather than guessing or making blind changes in production."
  },
  {
    number: "04",
    title: "Security Matters",
    description: "Incorporate security from day one: strict input validation, authorization checks, credential management, dependency auditing, and regular vulnerability remediation."
  },
  {
    number: "05",
    title: "Automate Repetitive Work",
    description: "Look for opportunities to automate deployments, testing, monitoring, and repetitive operational tasks to reduce human error and save engineering hours."
  }
];

export const education = {
  degree: "B.Sc. Computer Science",
  institution: "Nnamdi Azikiwe University",
  year: "2018",
  classification: "Second Class Upper Division",
  cgpa: "3.56 / 5.00",
  highlights: [
    "Core focus on Algorithms, Data Structures, Database Systems, Software Engineering, and Operating Systems."
  ]
};

export const currentlyExploring = [
  "Advanced Data Structures & Algorithms",
  "System Design & Distributed Architectures",
  "Backend Architecture Patterns",
  "DevOps Automation & CI/CD Pipelines",
  "Cloud Infrastructure (AWS/DigitalOcean)",
  "High-Throughput Scalable APIs"
];
