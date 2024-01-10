import Link from "next/link";
import MenuItem from "./MenuItem";
import { ModeToggle } from "@/components/theme/ModeToggle";
import { HeaderLinks } from "@/constants";

export default function Header() {
  return (
    <div className="mx-auto flex max-w-6xl items-center justify-between p-3 font-semibold">
      <div className="flex gap-4">
        {HeaderLinks.map((link) => (
          <MenuItem
            key={link.title}
            title={link.title}
            url={link.url}
            icon={link.icon}
          />
        ))}
      </div>
      <div className="flex items-center gap-4">
        <ModeToggle />
        <Link href={"/"} className="flex items-center gap-2">
          <span className="rounded-lg bg-amber-500 px-2 py-1 text-2xl font-bold">
            MOVIES
          </span>
          <span className="hidden text-xl sm:inline">Database</span>
        </Link>
      </div>
    </div>
  );
}
