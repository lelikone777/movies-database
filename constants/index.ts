import { IconType } from "react-icons";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { GoHome } from "react-icons/go";

export const NavbarLinks: { title: string; url: string }[] = [
  {
    title: "В прокате сейчас",
    url: "now-playing",
  },
  {
    title: "С лучшими оценками",
    url: "top-rated",
  },
  {
    title: "Популярные",
    url: "popular",
  },
  {
    title: "Скоро выйдут",
    url: "upcoming",
  },
];

export const HeaderLinks: { title: string; url: string; icon: IconType }[] = [
  {
    title: "На главную",
    url: "/",
    icon: GoHome,
  },
  {
    title: "О сайте",
    url: "/about",
    icon: IoMdInformationCircleOutline,
  },
];
