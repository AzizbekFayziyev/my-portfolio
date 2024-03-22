// Types

interface projectType {
  img: string;
  title: string;
  stack: string;
  live: string;
  code: string;
}

interface navLinkType {
  title: string;
  href: string;
}

// Data

export const projectData: projectType[] = [
  {
    img: "/projects/1.png",
    title: "Portfolio Website UI",
    stack: "React.js, Tailwind CSS",
    live: "",
    code: "",
  },
  {
    img: "/projects/1.png",
    title: "Portfolio Website UI",
    stack: "React.js, Tailwind CSS",
    live: "",
    code: "",
  },
  {
    img: "/projects/1.png",
    title: "Portfolio Website UI",
    stack: "React.js, Tailwind CSS",
    live: "",
    code: "",
  },
  {
    img: "/projects/1.png",
    title: "Portfolio Website UI",
    stack: "React.js, Tailwind CSS",
    live: "",
    code: "",
  },
];

export const navLinks: navLinkType[] = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "About Me",
    href: "#about",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];
