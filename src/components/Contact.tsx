"use client";
import React, { useState } from "react";
import Button from "./UI/Button";
import { MotionSection } from "./UI/MotionComponents";
import { SubmitHandler, useForm } from "react-hook-form";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { register, handleSubmit, reset } = useForm<ContactForm>({
    defaultValues: {},
  });
  const [loading, setLoading] = useState(false);

  const submit: SubmitHandler<ContactForm> = async (data) => {
    const message = `AVANCODER PORTFOLIO \n\n Name: ${data.name} \n Email: ${data.email} \n Subject: ${data.subject} \n Message: ${data.message}`;

    // fetch config settings
    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "cache-control": "no-cache",
      },
      body: JSON.stringify({
        chat_id: process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID,
        text: message,
      }),
    };

    // Sending message to telegram bot
    try {
      setLoading(true);

      const response = await fetch(
        "https://api.telegram.org/bot" +
          process.env.NEXT_PUBLIC_TELEGRAM_BOT_ID +
          "/sendMessage",
        settings
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      window.alert("Message successfully sent!");
      reset();
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MotionSection
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.2, ease: "anticipate" }}
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

      <form
        onSubmit={handleSubmit(submit)}
        className="bg-darkPrimary rounded-r-3xl p-10 w-[600px]"
      >
        <div className="contact-group flex">
          <div className="w-[80%] mr-1">
            <label
              className="block text-lg mb-1 text-lightGray"
              htmlFor="contact_name"
            >
              Your name
            </label>

            <input
              {...register("name")}
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
              {...register("email")}
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
            {...register("subject")}
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
            {...register("message")}
            className="bg-darkLight focus:bg-dark transition-all focus:shadow-inner outline-none rounded-md p-2 w-full"
            id="contact_message"
            cols={30}
            rows={4}
            minLength={15}
            required
          />
        </div>

        <div className="mt-4 flex justify-end">
          <Button disabled={loading} size="small">
            {loading ? (
              "Sending..."
            ) : (
              <>
                <i className="fa-regular fa-paper-plane" /> Send
              </>
            )}
          </Button>
        </div>
      </form>
    </MotionSection>
  );
};

export default Contact;
