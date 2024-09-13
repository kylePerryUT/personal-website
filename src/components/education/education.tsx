import { FC } from "react";
import cx from "classnames";

const Education: FC = () => {
  const education = [
    {
      course: "Go - The Complete Guide",
      institution: "Maximilian Schwarzmuller - Udemy 2024",
    },
    {
      course: "BS Computer Science",
      institution: "University of Utah 2021",
    },
  ];

  return (
    <div
      id="education"
      className="flex relative flex-col min-h-screen bg-primary p-16 text-white"
    >
      <div className="bg-secondary-brown absolute left-1/2 w-[100%] h-[500px]" />
      <div className="flex justify-center items-center left-1/3 h-screen absolute -rotate-90">
        <svg
          className="w-[1000px] h-[1000px] text-primary-brown stroke-primary-brown"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M 50,10 90,90 10,90 z" fill="currentColor" />
        </svg>
      </div>
      <div className="flex justify-center relative text-6xl my-16">
        EDUCATION
      </div>
      <div className="relative flex flex-col gap-y-36">
        {education.map((education, index) => (
          <div
            className={cx(
              "w-7/12",
              "bg-primary-blue",
              "px-[16px]",
              "py-[24px]",
              "font-roboto-condensed",
              index % 2 === 0 ? "self-start" : "self-end"
            )}
            key={`${education.course}_${index}`}
          >
            <div className="text-2xl text-center">{education.course}</div>
            <div className="text-2xl text-center">{education.institution}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
