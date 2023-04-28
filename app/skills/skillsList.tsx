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
    img: "/images/skills/linux.png",
    name: "Linux",
  },
  {
    id: 1,
    className: "origin-bottom",
    variants: verticalVariant,
    img: "/images/skills/django.jpg",
    name: "Django",
  },
  {
    id: 2,
    className: "origin-top",
    variants: verticalVariant,
    img: "/images/skills/python.png",
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
    img: "/images/skills/html.png",
    name: "HTML5",
  },
  {
    id: 5,
    className: "origin-bottom",
    variants: verticalVariant,
    img: "/images/skills/css.png",
    name: "CSS3",
  },
  {
    id: 6,
    className: "origin-right",
    variants: horizontalVariant,
    img: "/images/skills/bootstrap.png",
    name: "Bootstrap",
  },
  {
    id: 7,
    className: "origin-left",
    variants: horizontalVariant,
    img: "/images/skills/tailwind.png",
    name: "Tailwind",
  },
  {
    id: 8,
    className: "origin-right",
    variants: horizontalVariant,
    img: "/images/skills/react.png",
    name: "React",
  },
  {
    id: 9,
    className: "origin-top",
    variants: verticalVariant,
    img: "/images/skills/blender.png",
    name: "Blender",
  },
  {
    id: 10,
    className: "origin-bottom",
    variants: verticalVariant,
    img: "/images/skills/threejs.png",
    name: "THREE.js",
  },
  {
    id: 11,
    className: "origin-left",
    variants: horizontalVariant,
    img: "/images/skills/github.png",
    name: "Github",
  },
]
