import { IconType } from "react-icons";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { GoHome } from "react-icons/go";

export const NavbarLinks: { title: string; url: string }[] = [
  {
    title: "now-playing",
    url: "now-playing",
  },
  {
    title: "top rated",
    url: "top-rated",
  },
  {
    title: "popular",
    url: "popular",
  },
  {
    title: "upcoming",
    url: "upcoming",
  },
];

export const HeaderLinks: { title: string; url: string; icon: IconType }[] = [
  {
    title: "Home",
    url: "/",
    icon: GoHome,
  },
  {
    title: "About",
    url: "/about",
    icon: IoMdInformationCircleOutline,
  },
];
