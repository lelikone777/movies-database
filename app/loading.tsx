import Image from "next/image";
export default function loading() {
  return (
    <div className="mt-16 flex justify-center">
      <Image width={152} height={152} src="spinner.svg" alt="loading..." />
    </div>
  );
}
