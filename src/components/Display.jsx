import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { Carport } from "./Carport";
import { slideIn } from "../utils/motion";
import { Data } from "./Data";

export const Display = () => {
  const [url, setUrl] = useState();

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Parameters</p>
        <h3 className={styles.sectionHeadText}>Carport</h3>

        <Data setUrl={setUrl} />
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <Carport url={url} />
      </motion.div>
    </div>
  );
};
