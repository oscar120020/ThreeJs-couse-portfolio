import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from '.';
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true);

    emailjs.send("service_cjjfu2d", "template_tqhkegr", {
      from_name: form.name,
      to_name: "Oscar Martínez",
      from_email: form.email,
      to_email: 'oscarmiguel12002@gmail.com',
      message: form.message
    }, "ZP8PgqVOyulO1jHmU")
    .then(() => {
      setForm({
        name: "",
        email: "",
        message: "",
      })
      alert("Thank you. I will get back to you as soon as possible.")
    })
    .catch((err) => {
      console.log(err);
      alert("Something went wrong")
    })
    .finally(() => {
      setLoading(false);
    })
  };

  return (
    <div
      className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden"
    >
      <motion.div
        variants={slideIn("left", "spring", 0.2, 1)}
        className="flex-[0.75] bg-black-100 rounded-2xl p-8"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact.</h2>

        <form
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-5"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4" >Your Name</span>
            <input
              type="text"
              name="name"
              placeholder="What's your name?"
              value={form.name}
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium border-none"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4" >Your Email</span>
            <input
              type="email"
              name="email"
              placeholder="What's your email?"
              value={form.email}
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium border-none"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4" >Your Message</span>
            <textarea
              rows="7"
              name="message"
              placeholder="What do you want to say?"
              value={form.message}
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium border-none"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl w-fit outline-none text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "sending..." : "send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "spring", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')