import React from "react";
import { useForm, ValidationError } from "@formspree/react";

type Props = {};

const ContactForm = (props: Props) => {
  const [state, handleSubmit] = useForm("mlekajqj");

  return (
    <div className="lg:flex lg:w-3/5 justify-between mx-auto">
      <div className="flex flex-col gap-4 p-4">
        <div className="leading-8 text-gray-400">
          <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
          <p className="text-gray-400">
            The latest articles, and resources, sent to your inbox directly!
          </p>
        </div>
        <div className="flex-col w-full rounded-md ">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 justify-center w-ful lg:gap-4l"
          >
            <textarea
              placeholder=" Please enter your message. "
              id="message"
              name="message"
              className=" outline-none w-full rounded-md h-[100px] p-2 border hover:border-bd-bg border-bt-bg bg-transparent"
            ></textarea>
            <input
              placeholder=" Please enter email address "
              className="flex outline-none w-full h-[40px] rounded-md p-2 border hover:border-bd-bg border-bt-bg bg-transparent"
              id="email"
              type="email"
              name="email"
            />

            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            {state.succeeded && <p>Thank you for your message.</p>}
            <button
              className="outline-none flex mt-4 w-full mx-auto  p-2 rounded-md justify-center border-bt-bg border-b-2 border-t hover:border-bd-bg min-w-[100px] text-gray-400 hover:text-bd-bg bg-transparent"
              type="submit"
              disabled={state.submitting}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
//border-2 hover:border-bd-bg border-bt-bg
