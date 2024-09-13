import { FC } from "react";
import Project from "./project";
import cx from "classnames";
const Projects: FC = () => {
  const projects = [
    {
      title: "Personal Website",
      description:
        "Built this website using Next.js, Tailwind CSS, and Vercel. I wanted to create a personal website to showcase my projects and skills.",
      skills: ["Next.js", "Tailwind CSS", "Vercel"],
      links: ["https://github.com/kylePerryUT/personal-website"],
    },
    {
      title: "Blog Site",
      description:
        "Built a personal blog site as a side project. Used Context instead of Redux to expand my knowledge of different options for managing state. Implemented hooks to wrap api calls and handle the necessary auth headers adding the JWT token as needed.",
      skills: ["React", "JavaScript", "TypeScript"],
      links: ["https://github.com/kylePerryUT/best-blogging-site-ever"],
    },
  ];
  return (
    <div
      id="projects"
      className="flex relative flex-col min-h-screen bg-primary p-16 text-white"
    >
      <div className="bg-primary-brown absolute -left-[75%] bottom-0 rounded-[100%] w-[150%] h-[1000px]" />
      <div className="bg-secondary-brown absolute -left-1/2 bottom-0 rounded-[100%] w-full h-[700px]" />
      <div className="flex justify-center relative text-6xl my-16">
        PROJECTS
      </div>
      <div className="relative flex flex-col gap-y-20">
        {projects.map((project, index) => (
          <Project
            className={cx(index % 2 === 0 ? "self-start" : "self-end")}
            project={project}
            key={`${project.title}_${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
