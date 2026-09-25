
/* ============================================================
   All hero copy lives here — edit text freely without touching
   animation logic (script.js) or presentation (styles.css).
   index.html carries the same strings as a no-JS fallback.
   ============================================================ */
const heroContent = {
  nav: [
    { label: "Work", href: "#work", active: true },
    { label: "About", href: "#section-03" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#method" },
    { label: "Contact", href: "#contact" },
  ],

  cta: { label: "Let’s Talk", href: "#contact" },

  headline: "Siva Rani ❤️",
  role: ["Python Full Stack", "Developer"],
  meta: ["Python", "Web", "Code"],

  notification: {
    name: "Siva Rani ❤️",
    time: "now",
    lead: "Python",
    message: "full stack learner — building clean and practical web applications.",
  },

  section2: {
    sideLeft: ["Passion", "Growth."],
    sideRight: ["Passion.", "Creativity."],
  },

  /* My Works — add projects here (image + metadata per card); the Works
     carousel builds itself from this array. `teaser: true` cards are
     decorative edge slices and never become the active project. */
  works: {
    brand: "Siva Rani ❤️",
    projects: [
      { key: "ecommerce",  name: "E-Commerce",  img: "assets/e-commerce.jpg",  w: 498, h: 405,
        cat: "Python · E-Commerce", year: "2026", accent: "#4da3ff",
        title: "Shopping application with cart and checkout functionality" },
      { key: "employee-record-manager", name: "Employee Record manager", img: "assets/employee_record-manager.jpg", w: 383, h: 363,
        cat: "Python · Management", year: "2026", accent: "#a8e063",
        title: "Employee management system for adding, searching, updating and deleting records" },
      { key: "login-signup",   name: "Login & Signup System",   img: "assets/login-signup.jpg",   w: 186, h: 362,
        cat: "Python · Authentication", year: "2026", accent: "#f28b3c",
        title: "User authentication system with signup, login and account management" },
    ],
  },

  /* ---- BIG ROBOT section (the original large Nexbot experience) ----
     All copy is editable here; the 3D and the scroll journey never
     touch these strings. */
  bigRobot: {
    labels: { left: "Python Full Stack Learner", right: "Python · Web · Code" },
    eyebrow: "( 05 · The Learner )",
    titleLines: ["I learn by building.", "I grow by creating."],
    description: "I’m learning by building projects, solving problems, and understanding how code works.",
    hint: "Scroll to move through the ideas.",

    /* the panels that travel through the 3D space — add or edit freely */
    techIdeas: [
      {
        no: "01",
        title: "Python Programming",
        description: "Learning to solve problems with Python and build practical applications.",
        tags: ["Python", "Functions", "Dictionaries", "File Handling", "OOP"],
      },
      {
        no: "02",
        title: "Web Development",
        description: "Learning to turn ideas into simple, useful web experiences.",
        tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "Web Development"],
      },
    ],

  },

  /* ---- EDITORIAL / SKILLS section (scroll-choreographed) ----
     The statement enters from the left, the skills from the right,
     one item at a time. Copy only — the timeline lives in script.js. */
  editorial: {
    eyebrow: "( 06 · The Skills )",
    statement: ["Learning through code.", "Building through curiosity."],
    note: "I’m learning by building, experimenting, and improving with every project.",
    skills: {
      title: "I Work With",
      groups: [
        { name: "Programming", items: ["Python"] },
        { name: "Web", items: ["HTML", "CSS", "JavaScript"] },
        { name: "Tools", items: ["Git", "GitHub", "VS Code"] },
      ],
    },
    mindset: {
      title: "Learn → Build → Practice → Improve",
      lines: [
        "I learn by building.",
        "I build by creating projects.",
        "I improve by understanding my mistakes.",
        "And I keep learning with every project.",
      ],
    },
    exploring: {
      title: "Currently Exploring",
      items: [
        "Building better web experiences",
        "Strengthening Python programming",
        "Learning JavaScript",
        "Improving problem-solving skills",
        "Exploring full stack development",
      ],
    },
    ending: { lines: ["Still learning.", "Still building.", "Still curious."], note: "And probably always will be." },
  },

  /* ---- SMALL ROBOT section (its own minimal chapter) ---- */
  smallRobot: {
    eyebrow: "( 06 · Keep Learning )",
    titleLines: ["Always learning", "what comes next."],
    description: "I keep exploring, building projects - Improving my skills.",
    note: "Move your cursor · it follows",
  },

  /* ---- FOOTER ----
     Edit freely. `social` is empty on purpose: add entries like
     { label: "GitHub", href: "https://github.com/..." } and they
     appear automatically. Remove `email` if you would rather not
     publish an address. */
  footer: {
    eyebrow: "( 07 · Contact )",
    headline: ["Let's build", "something good."],
    line: "Open to internships and interesting projects.",
    email: "sivarani657@gmail.com",
    emailLabel: "Say hello",
    columns: [
      {
        title: "Sections",
        items: [
          { label: "Hero", href: "#top" },
          { label: "Creative", href: "#work" },
          { label: "About", href: "#section-03" },
          { label: "Selected Works", href: "#projects" },
          { label: "The Mind", href: "#think" },
        ],
      },
      {
        title: "Method",
        items: [
          { label: "How I think", href: "#method" },
          { label: "What I work with", href: "#method" },
          { label: "Currently exploring", href: "#method" },
          { label: "Still curious", href: "#curious" },
        ],
      },
    ],
    social: [],
    legal: "© 2026 Siva Rani ❤️",
    note: "Built with code and curiosity.",
    backToTop: "Back to top",
  },

  /* About Me chapter — replace these placeholder strings with the final copy. */
  about: {
    boxes: {
      who:   { title: "Who I Am",   sub: "Siva Rani ❤️ — Python full stack learner." },
      what:  { title: "What I Do",  sub: "Python · Web · Code" },
      think: { title: "How I Think", sub: "Learn · Build · Improve · Grow" },
    },
    views: {
      who: {
        eyebrow: "01 — Who I Am",
        head: "Siva Rani ❤️",
        text: "Python full stack learner — building practical applications and learning through projects.",
      },
      what: {
        eyebrow: "02 — What I Do",
        head: "Code Into Solutions.",
        text: "Learning to turn ideas into practical applications with Python, web technologies and clean code. Built with passion, driven by creativity.",
      },
      think: {
        eyebrow: "03 — How I Think",
        head: "Idea to Impact",
        text: "Learn · Build · Experiment · Improve.",
      },
    },
  },
};