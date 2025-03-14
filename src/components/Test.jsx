import { motion } from "motion/react";

const shapeVariants = {
  animateRect: {
    x: 300,
    y: -200,
    opacity: 1,
    transition: {
      duration: 3,
    },
  },
  initialRect: { x: 0, y: 0, opacity: 0 },
  animateCircle: {
    x: 300,
    y: -200,
    opacity: 1,
    transition: {
      duration: 3,
    },
  },
  initialCircle: { x: 0, y: -100, opacity: 0 },
};

const listVariants = {
  initial: {
    x: -100,
    y: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 3,
      // 每个子项持续1秒钟
      staggerChildren: 1,
    },
  },
};
const Test = () => {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.div
        style={{ width: 300, height: 300, background: "red" }}
        variants={shapeVariants}
        initial="initialRect"
        animate="animateRect"
        // animate={{ x: 300, y: -200, opacity: 1 }}
        // initial={{ x: 0, y: 0, opacity: 0 }}
        // transition={{
        //   duration: 2,
        //   ease: "easeInOut",
        //   repeat: Infinity,
        //   delay: 2,
        // }}
      ></motion.div>
      <motion.div
        style={{
          width: 300,
          height: 300,
          background: "green",
          borderRadius: "100%",
        }}
        variants={shapeVariants}
        initial="initialCircle"
        animate="animateCircle"
      ></motion.div>

      <motion.ul variants={listVariants} initial="initial" animate="animate">
        <motion.li variants={listVariants}>Javascript</motion.li>
        <motion.li variants={listVariants}>React</motion.li>
        <motion.li variants={listVariants}>Next.js</motion.li>
      </motion.ul>
    </section>
  );
};

export default Test;
