import { FC } from "react";

const Resume: FC = () => {
  return (
    <div className="flex flex-col">
      <iframe
        className="h-screen w-screen"
        src={"/assets/KylePerryResume.pdf"}
      />
    </div>
  );
};

export default Resume;
