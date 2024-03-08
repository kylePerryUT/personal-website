import HeaderNav from "@/components/headerNav";
import { FC } from "react";

const Resume: FC = () => {
  return (
    <div className="flex flex-col">
      <HeaderNav />
      <iframe
        className="h-screen w-screen"
        src="/KylePerryResume.pdf#view=fitW"
      />
    </div>
  );
};

export default Resume;
