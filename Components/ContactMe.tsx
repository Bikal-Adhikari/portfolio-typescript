import { useState, ChangeEvent, FormEvent } from "react";

const ContactMe = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState<{ success?: boolean; message?: string }>(
    {}
  );

  const onFormUpdate = (category: string, value: string) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setButtonText("Sending...");
    // Simulate sending message
    setTimeout(() => {
      setButtonText("Send");
      setFormDetails(formInitialDetails);
      setStatus({ success: true, message: "Message sent successfully" });
    }, 2000);
  };

  return (
    <section className="py-16 bg-[#121212] text-white">
      <div className=" pt-[4rem] md:pt-[2rem] pb-[4rem] md:pb-[2rem]">
        <h1 className="heading">
          Contact <span className="text-yellow-400">Me</span>
        </h1>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex justify-center md:justify-center">
          <div className="w-full h-full md:w-[500px] md:h-[400px] relative">
            <h3 className="text-4xl font-semibold mb-8">
              Get In <span className="text-yellow-400"> Touch</span>
            </h3>
          </div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0">
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

export default ContactMe;
