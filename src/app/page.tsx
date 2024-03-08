import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

const Home: FC = () => {
  return (
    <div className="flex min-h-screen flex-row items-center justify-items-start">
      <div className="flex min-h-screen flex-col gap-16 bg-sky-800 p-4 justify-items-center">
        <Image
          className="flex-none"
          src="/StemfairHeadshot.png"
          width={250}
          height={250}
          alt="Picture of the author"
        />
        <div className="flex flex-col items-center text-white gap-16">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/resume">Resume</Link>
        </div>
      </div>
      <div className="flex flex-grow">Home Page</div>
    </div>
  );
};

export default Home;
