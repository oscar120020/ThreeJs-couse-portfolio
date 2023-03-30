import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";
import Tilt from "react-tilt";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          className="py-5 px-12 bg-tertiary rounded-[20px] min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white font-bold text-center text-[20px]" >{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] leading-[30px] max-w-3xl"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
        temporibus repudiandae nisi minima suscipit corporis repellendus placeat
        tempore sit distinctio. Maxime molestias blanditiis quis voluptas iste
        nesciunt alias eius qui. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Reprehenderit repellat, deserunt quis voluptatum
        corrupti aliquam ab sit. Aliquam commodi corporis sunt distinctio dicta
        quo incidunt, suscipit saepe veritatis nisi nihil.
      </motion.p>

      <div className="mt-20 flex justify-center flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
