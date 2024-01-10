import Link from "next/link";

import { GoHome } from "react-icons/go";
import { IconType } from "react-icons";
import { IoMdInformationCircleOutline } from "react-icons/io";

interface Props {
  title: string;
  url: string;
  icon: IconType;
}

export default function MenuItem({ title, url, icon }: Props) {
  const getIconComponent = () => {
    switch (icon) {
      case GoHome:
        return <GoHome />;
      case IoMdInformationCircleOutline:
        return <IoMdInformationCircleOutline />;
      default:
        return null;
    }
  };

  return (
    <Link href={url} className="transition-colors hover:text-amber-500">
      <span className="text-2xl sm:hidden">{getIconComponent()}</span>
      <p className="hidden text-sm uppercase sm:inline">{title}</p>
    </Link>
  );
}
