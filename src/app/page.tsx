import About from "@/components/about/about";
import Contact from "@/components/contact/contact";
import Education from "@/components/education/education";
import Home from "@/components/home/home";
import Projects from "@/components/projects/projects";
import Resume from "@/components/resume/resume";
import { FC } from "react";

const Page: FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Home />
      <About />
      <Projects />
      <Education />
      <Resume />
      <Contact />
    </div>
  );
};

export default Page;
