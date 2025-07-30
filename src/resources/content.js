import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Cuthbert",
  lastName: "Young",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Data Science Student | Exploring Machine Learning",
  avatar: "/images/avatar.jpg",
  email: "cuthbertyoung05@gmail.com",
  location: "Asia/Jakarta",
  languages: ["English", "Bahasa Indonesia"],
  tagline: "Aspiring Data Scientist | Machine Learning Enthusiast",
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/cuthbertyoungg",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/cuthbertyoung5",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Once UI</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I&apos;m Selene, a design engineer at <Logo icon="/trademarks/wordmark-dark.svg" style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}/>, where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hi! I'm Cuthbert, a Surabaya-based third-year data science student
        passionate about turning real-world challenges into data-driven insights and solutions. 
        I enjoy working on data analysis, dashboards & visualizations, and machine learning projects 🤖.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experiences",
    experiences: [
      {
        company: "IRIS Research",
        timeframe: "2024- Present",
        role: "Researcher",
        achievements: [
          <>
            Conducted various short-term data science projects,
            including sentiment analysis and time-series modeling and
            <strong> participated in 10+ data science competitions.</strong>

          </>,
          <>
            Represented IRIS in international
            collaboration through the <strong>AeroMind – Mobility and AI Innovation Program </strong> 
             between FTMM Universitas Airlangga and <strong>Temasek Polytechnic Singapore</strong>, 
            engaging in discussions on AI and its implementation in South East Asia.
          </>,
          <>
            Achieved <strong>1st Place</strong> in the national IMITKOM USU 2025 Data Science Competition 🥇
            and ranked <strong>Top 5</strong> (out of 110+ teams) in the private leaderboard of the Kaggle-based
            Gammafest IPB 2025 challenge, predicting paper citation links using Deep Learning techniques.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/USU CERTIFICATE.jpg",
            alt: "USU CERTIFICATE",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Faculty of Advanced Technology and Multidisciplinary",
        timeframe: "2024 - Present",
        role: "Student Ambassador",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Airlangga University - Data Science Technology",
        description: <>Studying Data Science Technology with
         a focus on advanced statistics, data analysis, 
         and machine learning. Gaining hands-on experience through
          academic projects and real-world applications.
        </>,
      },
      {
        name: "Google Data Analytics Specialization Coursera",
        description: <>Completed the 8-Course Professional Certificate covering data cleaning, analysis, and visualization 
          using spreadsheets, SQL, R, Tableau, ggplot2, and RMarkdown. Gained hands-on skills through real-world case studies, 
          culminating in a capstone project simulating the role of a junior data analyst. 
          </>,
          
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
