import { motion } from 'framer-motion';
import React from 'react';
import { technologies } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn } from '../utils/motion';
import { BallCanvas } from './canvas';

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((tech, index) => (
        <motion.div 
          key={tech.name}
          className="w-28 h-28 cursor-pointer"
          variants={fadeIn("right", "spring", index * 0.10, 0.50)}
        >
          <BallCanvas icon={tech.icon} />
        </motion.div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "");