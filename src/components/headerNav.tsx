"use client";
import Link from "next/link";
import { FC } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const HeaderNav: FC = () => {
  const path = usePathname();
  console.log(path);

  enum PATHS {
    HOME = "/",
    ABOUT = "/about",
    PROJECTS = "/projects",
    RESUME = "/resume",
  }

  const isPathActive = (pathName: string) => pathName === path;

  return (
    <div className="flex gap-8 p-4 bg-sky-800 text-white">
      <button
        className={clsx(
          "flex justify-items-center rounded px-4 cursor-pointer",
          {
            "bg-sky-500": isPathActive(PATHS.HOME),
          }
        )}
      >
        <Link href={PATHS.HOME}>Home</Link>
      </button>
      <button
        className={clsx(
          "flex justify-items-center rounded px-4 cursor-pointer",
          {
            "bg-sky-500": isPathActive(PATHS.ABOUT),
          }
        )}
      >
        <Link href={PATHS.ABOUT}>About</Link>
      </button>
      <button
        className={clsx(
          "flex justify-items-center rounded px-4 cursor-pointer",
          {
            "bg-sky-500": isPathActive(PATHS.PROJECTS),
          }
        )}
      >
        <Link href={PATHS.PROJECTS}>Projects</Link>
      </button>
      <button
        className={clsx(
          "flex justify-items-center rounded px-4 cursor-pointer",
          {
            "bg-sky-500": isPathActive(PATHS.RESUME),
          }
        )}
      >
        <Link href={PATHS.RESUME}>Resume</Link>
      </button>
    </div>
  );
};

export default HeaderNav;
