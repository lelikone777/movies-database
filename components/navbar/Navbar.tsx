import NavbarItem from "./NavbarItem";
import { NavbarLinks } from "@/constants";

export default function Navbar() {
  return (
    <div className="flex justify-center gap-6 bg-amber-100 p-4 dark:bg-gray-600 lg:text-lg">
      {NavbarLinks.map((link) => (
        <NavbarItem key={link.title} title={link.title} url={link.url} />
      ))}
    </div>
  );
}
