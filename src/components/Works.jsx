import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({index, name, description, tags, image, source_code_link}) => {
  return (
    <motion.div
      variants={fadeIn("top", "spring", index * 0.5, 0.75)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary sm:w-[360px] w-full p-5 rounded-2xl"
      >
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name} className="w-full h-full rounded-2xl object-cover" />
          <div className="absolute flex justify-end inset-0 m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className="w-10 h-10 black-gradient cursor-pointer rounded-full flex justify-center items-center"
            >
              <img src={github} alt="Github" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="text-secondary mt-2 text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map(tag => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, beatae
          eligendi corrupti suscipit labore recusandae aspernatur esse dolorem
          unde at. Animi nesciunt sint tempora, quam repellendus rem omnis illo
          itaque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatum beatae ipsam deleniti iusto, excepturi ducimus illum illo
          aspernatur nemo, facilis libero quidem id corporis autem repellat, in
          placeat porro eius!
        </motion.p>
      </div>

      <div className="mt-20 flex justify-center flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
