import React from "react";
import Button from "./UI/Button";
import { MotionSection } from "./UI/MotionComponents";

const Contact = () => {
  return (
    <MotionSection
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="wrapper flex justify-center py-28 rounded-[33px]"
      id="contact"
    >
      <div className="contact-info relative bg-darkSecondary rounded-l-3xl p-10 px-20">
        <h4 className="text-3xl font-semibold">CONTACT</h4>

        <div className="contact-item absolute w-[270px] h-1 bg-light top-[55px] right-0" />
        <div className="contact-item absolute w-[270px] h-1 bg-light bottom-[55px] left-0" />

        <ul className="mt-8">
          <li className="text-2xl mt-14 flex items-center">
            <i className="text-3xl mr-4 fa-brands fa-telegram" /> @avancoder
          </li>
          <li className="text-2xl mt-14 flex items-center">
            <i className="text-3xl mr-4 fa-solid fa-envelope" /> Fayziyev.dev@
            <wbr />
            gmail.com
          </li>
          <li className="text-2xl mt-14 flex items-center">
            <i className="text-3xl mr-4 fa-solid fa-location-dot" /> Tashkent,
            Uzbekistan
          </li>
        </ul>
      </div>

      <form className="bg-darkPrimary rounded-r-3xl p-10 w-[600px]">
        <div className="contact-group flex">
          <div className="w-[80%] mr-1">
            <label
              className="block text-lg mb-1 text-lightGray"
              htmlFor="contact_name"
            >
              Your name
            </label>

            <input
              autoComplete="off"
              className="bg-darkLight focus:bg-dark transition-all focus:shadow-inner outline-none rounded-md p-2"
              type="text"
              id="contact_name"
              required
              minLength={4}
            />
          </div>

          <div className="w-full">
            <label
              className="block text-lg mb-1 text-lightGray"
              htmlFor="contact_email"
            >
              Your Email
            </label>

            <input
              autoComplete="off"
              className="bg-darkLight focus:bg-dark transition-all focus:shadow-inner outline-none rounded-md p-2 w-full"
              type="email"
              id="contact_email"
              required
            />
          </div>
        </div>

        <div className="my-8">
          <label
            className="block text-lg mb-1 text-lightGray"
            htmlFor="contact_subject"
          >
            Your subject
          </label>

          <input
            autoComplete="off"
            className="bg-darkLight focus:bg-dark transition-all focus:shadow-inner outline-none rounded-md p-2 w-full"
            type="text"
            id="contact_subject"
            minLength={8}
            required
          />
        </div>

        <div>
          <label
            className="block text-lg mb-1 text-lightGray"
            htmlFor="contact_message"
          >
            Message
          </label>

          <textarea
            className="bg-darkLight focus:bg-dark transition-all focus:shadow-inner outline-none rounded-md p-2 w-full"
            id="contact_message"
            cols={30}
            rows={4}
            minLength={15}
            required
          />
        </div>

        <div className="mt-4 flex justify-end">
          <Button size="small">
            <i className="fa-regular fa-paper-plane" /> Send
          </Button>
        </div>
      </form>
    </MotionSection>
  );
};

export default Contact;
