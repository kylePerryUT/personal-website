"use client";

import { FC } from "react";

const HeaderNav: FC = () => {
  const scrollToSection = (targetSectionRef: React.RefObject<HTMLElement>) => {
    targetSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative flex text-xl text-white justify-between font-permanent-marker">
      <div className={"p-8 text-3xl"}>KP</div>
      <div className={"flex gap-8 p-4"}>
        <button
          className={"flex justify-items-center px-4 cursor-pointer"}
          onClick={() =>
            scrollToSection({ current: document.getElementById("home") })
          }
        >
          HOME
        </button>
        <button
          className={"flex justify-items-center px-4 cursor-pointer"}
          onClick={() =>
            scrollToSection({ current: document.getElementById("about") })
          }
        >
          ABOUT
        </button>
        <button
          className={"flex justify-items-center px-4 cursor-pointer"}
          onClick={() =>
            scrollToSection({ current: document.getElementById("projects") })
          }
        >
          PROJECTS
        </button>
        <button
          className={"flex justify-items-center px-4 cursor-pointer"}
          onClick={() =>
            scrollToSection({ current: document.getElementById("education") })
          }
        >
          EDUCATION
        </button>
        <button
          className={"flex justify-items-center px-4 cursor-pointer"}
          onClick={() =>
            scrollToSection({ current: document.getElementById("resume") })
          }
        >
          RESUME
        </button>
        <button
          className={"flex justify-items-center px-4 cursor-pointer"}
          onClick={() =>
            scrollToSection({ current: document.getElementById("contact") })
          }
        >
          CONTACT
        </button>
      </div>
    </div>
  );
};

export default HeaderNav;
