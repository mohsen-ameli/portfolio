import { Variants } from "framer-motion"

// Horizontal animation
const horizontalVariant: Variants = {
  hidden: {
    opacity: 0,
    scaleX: 0,
  },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 1 },
  },
}

// Vertical animation
const verticalVariant: Variants = {
  hidden: {
    opacity: 0,
    scaleY: 0,
  },
  visible: {
    opacity: 1,
    scaleY: 1,
    transition: { duration: 1 },
  },
}

export const skillsList = [
  {
    id: 0,
    className: "origin-left",
    variants: horizontalVariant,
    img: "/images/skills/linux.webp",
    name: "Linux",
  },
  {
    id: 1,
    className: "origin-bottom",
    variants: verticalVariant,
    img: "/images/skills/django.webp",
    name: "Django",
  },
  {
    id: 2,
    className: "origin-top",
    variants: verticalVariant,
    img: "/images/skills/python.webp",
    name: "Python",
  },
  {
    id: 3,
    className: "origin-right",
    variants: horizontalVariant,
    img: "/images/skills/java.svg",
    name: "Java",
  },
  {
    id: 4,
    className: "origin-top",
    variants: verticalVariant,
    img: "/images/skills/html.webp",
    name: "HTML5",
  },
  {
    id: 5,
    className: "origin-bottom",
    variants: verticalVariant,
    img: "/images/skills/css.webp",
    name: "CSS3",
  },
  {
    id: 6,
    className: "origin-right",
    variants: horizontalVariant,
    img: "/images/skills/typescript.svg",
    name: "Typescript",
  },
  {
    id: 7,
    className: "origin-left",
    variants: horizontalVariant,
    img: "/images/skills/tailwind.webp",
    name: "Tailwind",
  },
  {
    id: 8,
    className: "origin-right",
    variants: horizontalVariant,
    img: "/images/skills/react.webp",
    name: "React",
  },
  {
    id: 9,
    className: "origin-top",
    variants: verticalVariant,
    img: "/images/skills/blender.webp",
    name: "Blender",
  },
  {
    id: 10,
    className: "origin-bottom",
    variants: verticalVariant,
    img: "/images/skills/threejs.webp",
    name: "THREE.js",
  },
  {
    id: 11,
    className: "origin-left",
    variants: horizontalVariant,
    img: "/images/skills/github.webp",
    name: "Github",
  },
]
