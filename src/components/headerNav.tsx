import Link from "next/link";
import { FC } from "react";

const HeaderNav: FC = () => {
  return (
    <div className="flex gap-8 p-4 bg-sky-800 text-white">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/resume">Resume</Link>
    </div>
  );
};

export default HeaderNav;
