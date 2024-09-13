import { FC } from "react";

const Resume: FC = () => {
  return (
    <div
      id="resume"
      className="flex flex-col relative items-center gap-y-[80px] px-[64px]"
    >
      <div className="relative flex text-6xl text-white text-center">
        RESUME
      </div>
      <div className="bg-secondary-brown py-[48px] px-[36px]">
        <a target="_blank" href="/resume">
          <img className="relative flex" src={"/assets/KylePerryResume.jpg"} />
        </a>
      </div>
    </div>
  );
};

export default Resume;
