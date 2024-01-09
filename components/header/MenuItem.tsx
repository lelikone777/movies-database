import Link from "next/link";

interface Props {
  title: string;
  address: string;
  Icon: any;
}
export default function MenuItem({ title, address, Icon }: Props) {
  return (
    <Link href={address} className="hover:text-amber-500">
      <Icon className="text-2xl sm:hidden" />
      <p className="hidden text-sm uppercase sm:inline">{title}</p>
    </Link>
  );
}
