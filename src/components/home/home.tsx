import { FC } from "react";
import Header from "./header";

const Home: FC = () => {
  return (
    <div
      id="home"
      className={
        "bg-perry-family h-screen w-screen bg-center bg-cover relative opacity-50"
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
            <div className={"flex text-7xl py-10"}>Hello I'm Kyle</div>
            <div className={`flex w-2/3 text-xl font-roboto-condensed pb-4`}>
              Im a passionate software developer energized by the thrill of
              creating innovative solutions. The dynamic nature of this industry
              excites me. I’m driven by a relentless curiosity to learn and
              grow.
            </div>
            <div className={"flex w-2/3 text-3xl"}>
              Being a software developer is more than a career, its a journey I
              embrace with enthusiasm every day.
            </div>
          </div>
        </div>
        <div id="color-bars-home" className={"flex flex-col"}>
          <div className={"bg-primary-brown h-4"} />
          <div className={"bg-secondary-brown h-2"} />
        </div>
      </div>
    </div>
  );
};

export default Home;
