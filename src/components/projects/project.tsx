import React from "react";
import Image from "next/image";

export interface Project {
  title: string;
  description: string;
  skills: string[];
  links: string[];
  image?: string;
  video?: string;
}

interface ProjectProps {
  className?: string;
  project: Project;
}

const Project: React.FC<ProjectProps> = (props) => {
  const renderVideoOrImage = () => {
    if (props.project.video) {
      return (
        <video
          className="rounded-md w-full"
          controls
          src={props.project.video}
        />
      );
    }

    if (props.project.image) {
      return (
        <div className="rounded-md">
          <Image src={props.project.image} alt={props.project.title} />
        </div>
      );
    }
  };
  return (
    <div
      className={`${props.className} flex flex-col w-2/3 text-center items-center gap-y-2`}
    >
      <div className="text-3xl">{props.project.title}</div>
      <div className="text-xl font-roboto-condensed">
        {props.project.description}
      </div>
      <div className="flex flex-row justify-center items-center content-center flex-wrap gap-x-10">
        {props.project.skills.map((skill, index) => (
          <div
            key={`${skill}_${index}`}
            className="bg-primary-blue font-bungee-inline py-1 px-4 rounded-md my-2"
          >
            {skill}
          </div>
        ))}
      </div>
      <div className="flex flex-row gap-x-10 flex-wrap justify-center">
        {props.project.links.map((link, index) => (
          <a
            key={`${link}_${index}`}
            href={link}
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer font-roboto-condensed"
          >
            {link}
          </a>
        ))}
      </div>
      {renderVideoOrImage()}
    </div>
  );
};

export default Project;
