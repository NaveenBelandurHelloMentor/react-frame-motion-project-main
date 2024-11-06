import React from "react";
import style from "./page.module.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { RiArrowDropRightLine } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";
import { FaFileAlt } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";

const SideBar = () => {
  const [clicked, setClicked] = useState(false);

  const TextFrame = {
    hidden: {
      width: "5%",
    },
    visiable: {
      width: "15%",
    },
    transition: {
      type: "spring",
      ease: "easeIn",
      duration: 1.1,
    },
  };

  const handleClick = () => {
    if (!clicked) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  };

  return (
    <>
      <section className={style.sidebar_container}>
        <motion.div
          variants={clicked && TextFrame}
          initial="hidden"
          animate="visiable"
          className={style.sidebar_box_container}
        >
          <div className={style.sidebar_logo_container}>
            <ul className={style.sidebar_logo_flex}>
              <motion.li className={style.sidebar_list}>
                <FaHome size={30} color="white" />{" "}
                <motion.p
                  whileHover={{ scale: 1.2 }}
                  className={
                    clicked ? style.slidebar_fnt_ : style.sliderbar_fnt
                  }
                >
                  Home
                </motion.p>
              </motion.li>
              <li className={style.sidebar_list}>
                <IoMdMailOpen size={30} color="white" />
                <motion.p
                  whileHover={{ scale: 1.2 }}
                  className={
                    clicked ? style.slidebar_fnt_ : style.sliderbar_fnt
                  }
                >
                  Message
                </motion.p>
              </li>
              <li className={style.sidebar_list}>
                <FaFileAlt size={30} color="white" />
                <motion.p
                  whileHover={{ scale: 1.2 }}
                  className={
                    clicked ? style.slidebar_fnt_ : style.sliderbar_fnt
                  }
                >
                  Files
                </motion.p>
              </li>
              <li className={style.sidebar_list}>
                <IoIosNotifications size={30} color="white" />
                <motion.p
                  whileHover={{ scale: 1.2 }}
                  className={
                    clicked ? style.slidebar_fnt_ : style.sliderbar_fnt
                  }
                >
                  Notification
                </motion.p>
              </li>
            </ul>
          </div>
        </motion.div>
        <span className={style.arrowIcon} onClick={handleClick}>
          <RiArrowDropRightLine />
        </span>
        <div className={style.sidebar_box_}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium facere aspernatur obcaecati modi excepturi harum
            explicabo aliquam soluta rem. Commodi voluptatibus veritatis quidem
            minima quia maiores provident cum, ex officiis.Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Praesentium facere aspernatur
            obcaecati modi excepturi harum explicabo aliquam soluta rem. Commodi
            voluptatibus veritatis quidem minima quia maiores provident cum, ex
            officiis.Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
          <p>
            Praesentium facere aspernatur obcaecati modi excepturi harum
            explicabo aliquam soluta rem. Commodi voluptatibus veritatis quidem
            minima quia maiores provident cum, ex officiis.Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Praesentium facere aspernatur
            obcaecati modi excepturi harum explicabo aliquam soluta rem. Commodi
            voluptatibus veritatis quidem minima quia maiores provident cum, ex
            officiis.Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium facere aspernatur obcaecati modi excepturi harum
            explicabo aliquam soluta rem. Commodi voluptatibus veritatis quidem
            minima quia maiores provident cum, ex officiis.Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Praesentium facere aspernatur
            obcaecati modi excepturi harum explicabo aliquam soluta rem. Commodi
            voluptatibus veritatis quidem minima quia maiores provident cum, ex
            officiis.
          </p>
          <p>
            Praesentium facere aspernatur obcaecati modi excepturi harum
            explicabo aliquam soluta rem. Commodi voluptatibus veritatis quidem
            minima quia maiores provident cum, ex officiis.Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Praesentium facere aspernatur
            obcaecati modi excepturi harum explicabo aliquam soluta rem. Commodi
            voluptatibus veritatis quidem minima quia maiores provident cum, ex
            officiis.Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium facere aspernatur obcaecati modi excepturi harum
            explicabo aliquam soluta rem. Commodi voluptatibus veritatis quidem
            minima quia maiores provident cum, ex officiis.Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Praesentium facere aspernatur
            obcaecati modi excepturi harum explicabo aliquam soluta rem. Commodi
            voluptatibus veritatis quidem minima quia maiores provident cum, ex
            officiis.
          </p>
          <p>
            Praesentium facere aspernatur obcaecati modi excepturi harum
            explicabo aliquam soluta rem. Commodi voluptatibus veritatis quidem
            minima quia maiores provident cum, ex officiis.Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Praesentium facere aspernatur
            obcaecati modi excepturi harum explicabo aliquam soluta rem. Commodi
            voluptatibus veritatis quidem minima quia maiores provident cum, ex
            officiis.Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium facere aspernatur obcaecati modi excepturi harum
            explicabo aliquam soluta rem. Commodi voluptatibus veritatis quidem
            minima quia maiores provident cum, ex officiis.Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Praesentium facere aspernatur
            obcaecati modi excepturi harum explicabo aliquam soluta rem. Commodi
            voluptatibus veritatis quidem minima quia maiores provident cum, ex
            officiis.
          </p>
          <p>
            Praesentium facere aspernatur obcaecati modi excepturi harum
            explicabo aliquam soluta rem. Commodi voluptatibus veritatis quidem
            minima quia maiores provident cum, ex officiis.Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Praesentium facere aspernatur
            obcaecati modi excepturi harum explicabo aliquam soluta rem. Commodi
            voluptatibus veritatis quidem minima quia maiores provident cum, ex
            officiis.Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium facere aspernatur obcaecati modi excepturi harum
            explicabo aliquam soluta rem. Commodi voluptatibus veritatis quidem
            minima quia maiores provident cum, ex officiis.Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Praesentium facere aspernatur
            obcaecati modi excepturi harum explicabo aliquam soluta rem. Commodi
            voluptatibus veritatis quidem minima quia maiores provident cum, ex
            officiis.
          </p>
          <p>
            Praesentium facere aspernatur obcaecati modi excepturi harum
            explicabo aliquam soluta rem. Commodi voluptatibus veritatis quidem
            minima quia maiores provident cum, ex officiis.Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Praesentium facere aspernatur
            obcaecati modi excepturi harum explicabo aliquam soluta rem. Commodi
            voluptatibus veritatis quidem minima quia maiores provident cum, ex
            officiis.Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium facere aspernatur obcaecati modi excepturi harum
            explicabo aliquam soluta rem. Commodi voluptatibus veritatis quidem
            minima quia maiores provident cum, ex officiis.Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Praesentium facere aspernatur
            obcaecati modi excepturi harum explicabo aliquam soluta rem. Commodi
            voluptatibus veritatis quidem minima quia maiores provident cum, ex
            officiis.
          </p>
          <p>
            Praesentium facere aspernatur obcaecati modi excepturi harum
            explicabo aliquam soluta rem. Commodi voluptatibus veritatis quidem
            minima quia maiores provident cum, ex officiis.Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Praesentium facere aspernatur
            obcaecati modi excepturi harum explicabo aliquam soluta rem. Commodi
            voluptatibus veritatis quidem minima quia maiores provident cum, ex
            officiis.Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium facere aspernatur obcaecati modi excepturi harum
            explicabo aliquam soluta rem. Commodi voluptatibus veritatis quidem
            minima quia maiores provident cum, ex officiis.Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Praesentium facere aspernatur
            obcaecati modi excepturi harum explicabo aliquam soluta rem. Commodi
            voluptatibus veritatis quidem minima quia maiores provident cum, ex
            officiis.
          </p>
          <p>
            Praesentium facere aspernatur obcaecati modi excepturi harum
            explicabo aliquam soluta rem. Commodi voluptatibus veritatis quidem
            minima quia maiores provident cum, ex officiis.Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Praesentium facere aspernatur
            obcaecati modi excepturi harum explicabo aliquam soluta rem. Commodi
            voluptatibus veritatis quidem minima quia maiores provident cum, ex
            officiis.Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium facere aspernatur obcaecati modi excepturi harum
            explicabo aliquam soluta rem. Commodi voluptatibus veritatis quidem
            minima quia maiores provident cum, ex officiis.Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Praesentium facere aspernatur
            obcaecati modi excepturi harum explicabo aliquam soluta rem. Commodi
            voluptatibus veritatis quidem minima quia maiores provident cum, ex
            officiis.
          </p>
        </div>
      </section>
    </>
  );
};

export default SideBar;
