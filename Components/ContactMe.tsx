import React, { ChangeEvent, useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { MdLocationOn } from "react-icons/md";
import emailjs from "emailjs-com";

const Contact: React.FC = () => {
  const [formDetails, setFormDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState({
    message: "",
    success: false,
  });

  const [buttonText, setButtonText] = useState("Send Message");

  const onFormUpdate = (field: string, value: string) => {
    setFormDetails({
      ...formDetails,
      [field]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setButtonText("Sending...");

    const templateParams = {
      firstName: formDetails.firstName,
      lastName: formDetails.lastName,
      email: formDetails.email,
      phone: formDetails.phone,
      message: formDetails.message,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setButtonText("Send Message");
          setStatus({
            message: "Message sent successfully!",
            success: true,
          });
          setFormDetails({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error);
          setButtonText("Send Message");
          setStatus({
            message: "Failed to send message. Please try again.",
            success: false,
          });
        }
      );
  };

  return (
    <section className="py-16 bg-[#121212] text-white">
      <div className="pt-[4rem] md:pt-[2rem] pb-[4rem] md:pb-[2rem]">
        <h1 className="heading">
          Contact <span className="text-yellow-400">Me</span>
        </h1>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-4">
          <h3 className="text-4xl font-semibold mb-8">
            Get In <span className="text-yellow-400">Touch</span>
          </h3>
          <div className="space-y-6">
            <div
              data-aos="zoom-in"
              className="flex items-center shadow-md shadow-[#06092e41] duration-500 p-4 rounded-md"
            >
              <p className="rounded-full bg-gray-700 bg-opacity-50 p-4">
                <BsFillTelephoneFill size={20} />
              </p>
              <span className="ml-4">O451******</span>
            </div>
            <div
              data-aos="zoom-in"
              className="flex items-center shadow-md shadow-[#06092e41] duration-500 p-4 rounded-md"
            >
              <p className="rounded-full bg-gray-700 bg-opacity-50 p-4">
                <CgMail size={20} />
              </p>
              <span className="ml-4">bikaladhikari5@gmail.com</span>
            </div>
            <div
              data-aos="zoom-in"
              className="flex items-center shadow-md shadow-[#06092e41] duration-500 p-4 rounded-md"
            >
              <p className="rounded-full bg-gray-700 bg-opacity-50 p-4">
                <MdLocationOn size={20} />
              </p>
              <span className="ml-4">Sydney, Australia</span>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0 p-4">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                value={formDetails.firstName}
                placeholder="First Name"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  onFormUpdate("firstName", e.target.value)
                }
                className="p-4 rounded-lg bg-[#1a1f26] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#55e6a5]"
                required
              />
              <input
                type="text"
                value={formDetails.lastName}
                placeholder="Last Name"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  onFormUpdate("lastName", e.target.value)
                }
                className="p-4 rounded-lg bg-[#1a1f26] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#55e6a5]"
                required
              />
              <input
                type="email"
                value={formDetails.email}
                placeholder="Email Address"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  onFormUpdate("email", e.target.value)
                }
                className="p-4 rounded-lg bg-[#1a1f26] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#55e6a5]"
                required
              />
              <input
                type="tel"
                value={formDetails.phone}
                placeholder="Phone No."
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  onFormUpdate("phone", e.target.value)
                }
                className="p-4 rounded-lg bg-[#1a1f26] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#55e6a5]"
                required
              />
            </div>
            <textarea
              rows={6}
              value={formDetails.message}
              placeholder="Message"
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                onFormUpdate("message", e.target.value)
              }
              className="w-full p-4 rounded-lg bg-[#1a1f26] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#55e6a5]"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full py-4 rounded-lg bg-[#55e6a5] text-[#02050a] font-bold hover:bg-[#47cc90] transition duration-300"
            >
              {buttonText}
            </button>
            {status.message && (
              <div
                className={`mt-4 text-center ${
                  status.success ? "text-green-500" : "text-red-500"
                }`}
              >
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
