"use client";

import React from "react";
import style from "./page.module.css";
import Header from "../components/Header/Header";
import {animate, motion} from 'framer-motion'

const Card = () => {
  return (
    <>
      <Header />
      <section className={style.card_container}> 
        <motion.div drag='x' dragConstraints={{left:-550,right:550}} transition={{type:'spring',duration:0.1}} className={style.card}>
          <p>Test</p>
        </motion.div>
      </section>
    </>
  );
};

export default Card;
