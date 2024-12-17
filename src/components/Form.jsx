import { TbFlareFilled } from "react-icons/tb";
import Intro from "@/components/Intro";
import { useState } from "react";

const services = [
  "Website Design",
  "Content",
  "UX Design",
  "Strategy",
  "User Research",
  "Other",
];

function Form() {

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const [selectedServices, setSelectedServices] = useState([]);

  const handleCheckbox = (value, checked) => {
    // if (checked) {
    //   setSelectedServices((prevState) => [...prevState, value]);
    // } else {
    //   setSelectedServices((prevState) => {
    //     return prevState.filter((item) => item !== value);
    //   });
    // }
    setSelectedServices((prevState) => {
      return checked ? [...prevState, value] : prevState.filter((item) => item !== value);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      ...formData,
      services: selectedServices,
    });

  };

  const handleChange = (value, property) => {
    setFormData((prevState) => {
      return { ...prevState, [property]: value };
    });
  };



  return (

    <>
      <Intro />
      <form className="flex flex-col gap-1" action={import.meta.env.VITE_SUBMIT_URL}>
        {/* Input */}
        <input
          type="text"
          name={import.meta.env.VITE_NAME_FIELD}
          id="fullname"
          placeholder="Your name"
          className="border-b border-stone-700 bg-zinc-50 p-2 placeholder-slate-700 md:bg-lime-400"
          required
          value={formData.fullname}
          onChange={(e) => handleChange(e.target.value, "fullname")}
        />
        <input
          type="email"
          name={import.meta.env.VITE_EMAIL_FIELD}
          id="email"
          placeholder="your@company.com"
          className="border-b border-stone-700 bg-zinc-50 p-2 placeholder-slate-700 md:bg-lime-400"
          required
          value={formData.email}
          onChange={(e) => handleChange(e.target.value, "email")}
        />
        <input
          type="text"
          name={import.meta.env.VITE_MESSAGE_FIELD}
          id="message"
          placeholder="Tell us a bit about your project..."
          className="h-24 border-b border-stone-700 bg-zinc-50 p-2 placeholder-slate-700 md:bg-lime-400"
          required
          value={formData.message}
          onChange={(e) => handleChange(e.target.value, "message")}
        />

        <p className="my-5 text-zinc-800">How can we help?</p>

        {/* Checkbox */}
        <section className="mb-12 grid grid-cols-2 gap-1 md:max-w-96">
          {services.map((service, idx) => {
            return (
              <label
                key={service + idx}
                className="flex cursor-pointer items-center gap-1"
              >
                <input
                  type="checkbox"
                  name={import.meta.env.VITE_SERVICES_FIELD}
                  value={service}
                  className="size-6"
                  onChange={(e) => handleCheckbox(service, e.target.checked)}
                />
                {service}
              </label>
            );
          })}
        </section>
        <button
          type="submit"
          className="flex justify-center gap-2 rounded-lg bg-stone-950 p-2 text-white"
        >
          Let's get started
          <TbFlareFilled size={20} className="text-lime-500" />
        </button>
      </form>
    </>
  );
}

export default Form;