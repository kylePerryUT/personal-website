import { FC } from "react";

const Resume: FC = () => {
  return (
    <div id="resume" className="flex flex-col">
      <iframe
        className="h-screen w-screen"
        src="src/assets/KylePerryResume.pdf#view=fitW"
      />
    </div>
  );
};

export default Resume;
