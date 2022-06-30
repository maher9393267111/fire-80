import React from "react";
import { motion } from "framer-motion";
const Section4 = () => {
  return (
    <div className=" mt-4 h-[100vh]">
      <motion.div
        className=""
        whileInView={{ y: [180, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <h1>section4</h1>

        <div>
          <h1>section-4</h1>
        </div>
      </motion.div>
    </div>
  );
};

export default Section4;
