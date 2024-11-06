import React from "react";
import style from "./page.module.css";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Home = () => {
  const Navigate = useRouter();
  const LeftMotion = {
    hidden: {
      x: "-100vw",
    },
    visable: {
      x: 0,
      transition: {
        type: "string",
      },
    },
  };

  const ScaleUp = {
    hidden: {
      scale: 0,
    },
    visiable: {
      scale: 1.1,
      transition: {
        type: "string",
        duration: 1,
      },
    },
  };

  const DisplayAfter = {
    hidden: {
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 1,
        type: "spring",
        stiffness: 120,
      },
    },
  };

  return (
    <section className={style.home_container}>
      <motion.div
        variants={LeftMotion}
        initial="hidden"
        animate="visable"
        className={style.home_container_box}
      >
        <motion.h3
          variants={ScaleUp}
          initial="hidden"
          animate="visiable"
          className={style.home_title}
        >
          Welcome to the Product Cart Page
        </motion.h3>
        <motion.p
          variants={ScaleUp}
          initial="hidden"
          animate="visiable"
          className={style.home_para}
        >
          Please Select the Products You Like
        </motion.p>
      </motion.div>
      <br />
      <motion.div initial="hidden" animate="visible" variants={DisplayAfter}>
        <motion.button
          whileHover={{
            background: "white",
            color: "black",
            border: "1px solid black",
          }}
          onClick={()=>Navigate.push('/users')}
          className={style.btn_container}
        >
          Submit
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Home;
