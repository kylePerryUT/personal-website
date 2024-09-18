import { FC } from "react";

const Contact: FC = () => {
  // Implement your component logic here
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/email", {
        method: "post",
        body: formData,
      });

      if (!response.ok) {
        console.log("falling over");
        throw new Error(`response status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log(responseData["message"]);

      alert("Message successfully sent");
    } catch (err) {
      console.error(err);
      alert("Error, please try resubmitting the form");
    }
  }

  return (
    <div
      id="contact"
      className="flex flex-col relative items-center gap-y-[80px] py-[64px] px-[128px] text-white text-center"
    >
      <div className="relative flex text-6xl">CONTACT</div>
      <div className="text-4xl">CONNECT WITH ME</div>
      <div className="flex flex-row justify-center w-1/3 space-x-[48px]">
        <a
          target="_blank"
          className="w-1/2 flex justify-center items-center box-border"
          href="https://www.linkedin.com/in/kyleperryut/"
        >
          <img src="/assets/linkedin.png" />
        </a>
        <a
          target="_blank"
          className="w-1/2 flex justify-center items-center box-border"
          href="https://github.com/kylePerryUT"
        >
          <img src="/assets/github.png" />
        </a>
      </div>
      <div className="text-4xl">DROP ME A LINE</div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full gap-y-[32px] font-roboto-condensed text-white"
      >
        <input className="p-[16px] text-black" type="text" placeholder="Name" />
        <input
          className="p-[16px] text-black"
          type="email"
          placeholder="Email"
        />
        <input
          className="p-[16px] text-black"
          type="text"
          placeholder="Subject"
        />
        <textarea
          className="p-[16px] text-black"
          placeholder="Message"
        ></textarea>
        <button className="p-[16px] w-1/4 self-end border-2 border-current text-white">
          SEND
        </button>
      </form>
    </div>
  );
};

export default Contact;
