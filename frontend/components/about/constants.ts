import { AboutData } from "./types";

export const ABOUT_DATA: AboutData = {
  title: "About Me",
  subtitle: "Computer Science student passionate about full-stack development, AI, and research.",
  description: [
    "I'm a Computer Science undergraduate at Dibrugarh University Institute of Engineering and Technology (DUIET), passionate about full-stack web development, software engineering, and creating intuitive digital experiences.",

    "Alongside my B.Tech, I'm pursuing the IIT Madras BS Degree in Data Science and Applications. I enjoy building scalable projects, exploring AI, conducting research, and continuously learning modern technologies."
  ],
  image: {
    src: "/about_profile_image.png",
    alt: "Portrait of Raktim Sonowal"
  },
  stats: [
    {
      label: "Projects",
      value: "3+",
    },
    {
      label: "Technologies",
      value: "10+",
    },
    {
      label: "Learning",
      value: "Daily",
    },
  ]
};
