import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center items-center py-5 mt-10">
      <Image
        src="/images/logo-transparent.svg"
        width={30}
        height={30}
        alt="Remenex"
      />
      <p className="max-w-sm text-sm text-neutral-300">
        © {new Date().getFullYear()} Remenex, Inc.
      </p>
    </footer>
  );
}
