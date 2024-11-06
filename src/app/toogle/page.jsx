"use client";

import React from "react";
import Header from "../components/Header/Header";
import style from "./page.module.css";
import { animate, easeIn, motion } from "framer-motion";
import { useState } from "react";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";

const Toogle = () => {
  const [hover, setHover] = useState(false);

  const toogleSwitch = {
    hidden: {
      x: 0,
    },
    visiable: {
      x: [0, 73],
      border: "1px solid black",
      color: "black",
      backgroundColor: "white",
    },
    test: {
      x: [73, 0],
    },
    transition: {
      easeIn,
      duration: 3,
    },
    fntLight:{
      scale:0
    },
    fntLightAnimate:{
      scale:1.1,
     
    }
  };

  const handleHover = () => {
    if (hover) {
      setHover(false);
    } else {
      setHover(true);
    }
  };

  return (
    <>
      <Header />
      <section style={{ backgroundColor: hover ? "black" : "white" }}>
        <div className={style.toogle_container}>
          <div className={style.toogle_box}>
            <motion.span
              variants={toogleSwitch}
              initial="hidden"
              animate={hover ? "visiable" : "test"}
              className={style.toogle_switch}
              onClick={handleHover}
            ></motion.span>

            <div className={style.toogle_icon_container}>
              {hover ? (
                <div className={style.toogle_icon_dark}>
                  <FaMoon color="white" />
                </div>
              ) : (
                <div className={style.toogle_icon_light}>
                  <CiLight size={25} />
                </div>
              )}
            </div>
          </div>

          <div className={style.toogle_fnt_container}>
           {hover ? < motion.p>Dark</motion.p> : <motion.p variants={toogleSwitch} hidden='fntLight' animate='fntLightAnimate' className={style.toogle_fnt_text}>Light</motion.p>}
          </div>
        </div>
      </section>
    </>
  );
};

export default Toogle;
