import { FC } from "react";

const About: FC = () => {
  return (
    <div id="about" className="flex h-screen w-screen">
      <div className="flex flex-1 h-full bg-kyle-headshot bg-origin-content bg-cover flex-col justify-end px-[48px] pb-[100px]">
        <div className="flex flex-col">
          <div className={"flex bg-primary-brown h-4"} />
          <div className={"flex bg-secondary-brown h-2"} />
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-center px-[48px] text-white">
        <div className="text-center text-6xl pb-[32px]">Me in a Nutshell</div>
        <div className="text-center text-2xl font-roboto-condensed whitespace-pre-line">
          I’m a software engineer with three years of experience and a degree in
          computer science. I have strong skills in HTML, CSS, JavaScript,
          TypeScript, and React, and I enjoy creating easy-to-use, beautiful
          websites. I’ve also worked with Angular, C#, .NET, SQL Server, Go, and
          MongoDB, which has given me a broader understanding of both front-end
          and back-end development.
          <br />
          <br />
          I’m a great communicator and work well with different teams, ensuring
          that projects run smoothly. I’m always open to feedback from peers and
          managers, as I believe it’s essential for my growth and improvement.
        </div>
      </div>
    </div>
  );
};

export default About;
