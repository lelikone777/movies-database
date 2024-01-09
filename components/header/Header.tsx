import Link from "next/link";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { ModeToggle } from "@/components/theme/ModeToggle";

export default function Header() {
  return (
    <div className="mx-auto flex max-w-6xl items-center justify-between p-3">
      <div className="flex gap-4">
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex items-center gap-4">
        <ModeToggle />
        <Link href={"/"} className="flex items-center gap-1">
          <span className="rounded-lg bg-amber-500 px-2 py-1 text-2xl font-bold">
            IMDb
          </span>
          <span className="hidden text-xl sm:inline">Clone</span>
        </Link>
      </div>
    </div>
  );
}
