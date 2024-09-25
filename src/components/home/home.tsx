import { FC } from "react";
import Header from "./header";

const Home: FC = () => {
  return (
    <div
      id="home"
      className={
        "bg-perry-family h-screen w-screen bg-center bg-cover relative"
      }
    >
      <div
        className={
          "flex flex-col h-full justify-between relative text-white font-permanent-marker"
        }
      >
        <div className="flex flex-col">
          <Header />
          <div className="flex flex-col items-center text-center">
            <div className={"flex text-7xl pt-8 pb-20"}>Hello Im Kyle</div>
            <div className={`flex w-2/3 text-xl font-roboto-condensed pb-16`}>
              I'm a creative problem solver and excellent communicator with a
              passion for developing beautiful, user-friendly interfaces. I
              thrive on tackling complicated challenges and am always open to
              constructive criticism and feedback. Whether it's through HTML,
              CSS, JavaScript, or various front-end frameworks, I love creating
              innovative solutions that wow the customer. Currently, I am
              working to expand my skillset not only with front-end languages
              and technologies but also with the back-end. I enjoy the
              challenges, complexity, and different problems that I can work on
              when working across the stack.
            </div>
            <div className={"flex w-2/3 text-3xl"}>
              Being a software engineer is more than a career, its a journey I
              embrace with enthusiasm every day.
            </div>
          </div>
        </div>
        <div className={"flex flex-col"}>
          <div className={"bg-primary-brown h-4"} />
          <div className={"bg-secondary-brown h-2"} />
        </div>
      </div>
    </div>
  );
};

export default Home;
