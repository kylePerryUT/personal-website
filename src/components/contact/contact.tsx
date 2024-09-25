"use client";
import { FC, useState } from "react";
import Spinner from "../loading-spinner/spinner";
import Image from "next/image";

const Contact: FC = () => {
  const [emailSending, setEmailSending] = useState(false);
  // Implement your component logic here
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    setEmailSending(true);
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    // Iterate over formData entries to log them
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

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

      form.reset();

      alert("Message successfully sent");
      setEmailSending(false);
    } catch (err) {
      console.error(err);
      alert("Error, please try resubmitting the form");
      setEmailSending(false);
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
          <Image src="/assets/linkedin.png" alt="linked in logo" />
        </a>
        <a
          target="_blank"
          className="w-1/2 flex justify-center items-center box-border"
          href="https://github.com/kylePerryUT"
        >
          <Image src="/assets/github.png" alt="github logo" />
        </a>
      </div>
      <div className="text-4xl">DROP ME A LINE</div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full gap-y-[32px] font-roboto-condensed text-white"
      >
        <input
          className="p-[16px] text-black"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="p-[16px] text-black"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <input
          className="p-[16px] text-black"
          type="text"
          placeholder="Subject"
          name="subject"
          required
        />
        <textarea
          className="p-[16px] text-black"
          placeholder="Message"
          name="message"
          required
        />
        <button
          disabled={emailSending}
          type="submit"
          className="flex flex-row justify-center p-[16px] w-1/4 self-end border-2 border-current text-white"
        >
          {emailSending ? <Spinner /> : "SEND"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
