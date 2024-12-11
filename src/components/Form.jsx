import React from "react";
import { TbFlareFilled } from "react-icons/tb";
import Intro from "@/components/Intro";
import { useState } from "react";

function Form() {
  const services = [
    "Website design",
    "UI/UX design",
    "User Research",
    "Content",
    "Strategy",
    "Social Media",
    "Other",
  ];
  const [formData, setFormData] = useState({
    FullName: "",
    email: "",
    message: "",
    Services: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const handleChange = (value, property) => {
    setFormData({ ...formData, [property]: value });
  };

  const handleCheckbox = (value,checked) => {
    if(checked){
      console.log(value)
    }
  }

  return (
    <>
      <Intro />
      <form className="onSubmit={handleSubmit} flex flex-col gap-1">
        <input
          type="text"
          name="FullName"
          id="FullName"
          placeholder="Your Name"
          className="border-b border-stone-700 bg-zinc-50 p-2 placeholder-slate-700 md:bg-lime-400"
          onChange={(e) => handleChange(e.target.value, "FullName")}
          required
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="your@email.com"
          className="border-b border-stone-700 bg-zinc-50 p-2 placeholder-slate-700 md:bg-lime-400"
          onChange={(e) => handleChange(e.target.value, "email")}
          required
        />
        <input
          type="message"
          name="message"
          id="message"
          placeholder="Tell us bit more about your project"
          onChange={(e) => handleChange(e.target.value, "message")}
          className="h-24 border-b border-stone-700 bg-zinc-50 p-2 placeholder-slate-700 md:bg-lime-400"
          required
        />
        <p className="my-5 text-zinc-800">How Can We Help You?</p>

        <section className="grid grid-cols-2 gap-1 md:max-w-96">
          {services.map((service, index) => {
            return (
              <label key={service + index} className="flex items-center gap-1" onClick={()=>console.log(service)}>
                <input
                  type="checkbox"
                  name={service}
                  className="flex size-5 cursor-pointer items-center gap-1 checked:accent-lime-400"
                  onChange={(e) => console.log(e.target.checked+service)}
                />
                {service}
              </label>
            );
          })}
        </section>
        <button
          type="submit"
          className="mt-5 flex justify-center gap-2 rounded-lg bg-stone-950 p-2 text-white"
        >
          {" "}
          Let's get started{" "}
          <TbFlareFilled size={20} className="text-lime-400" />{" "}
        </button>
      </form>
    </>
  );
}

export default Form;
