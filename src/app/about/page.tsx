import HeaderNav from "@/components/headerNav";
import { FC } from "react";

const About: FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderNav />
      <div className="flex">This is my about me page.</div>
    </div>
  );
};

export default About;
