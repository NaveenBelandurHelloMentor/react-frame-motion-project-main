"use client";

import React from "react";
import style from "./page.module.css";
import Header from "../components/Header/Header";
import { useState, useEffect } from "react";
import { easeIn, motion } from "framer-motion";

const User = () => {
  const [data, setData] = useState();
  const [length, setLength] = useState(5);
  const [title,setTitle] = useState('More')

  const handleClick = () => {
    setTitle('Less')
    setLength(data?.length);
  };

  useEffect(() => {
    const FetchData = async () => {
      const DataPost = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const UserJson = await DataPost.json();
      setData(UserJson);
    };
    return FetchData;
  }, []);

  const Left = {
    hidden: {
      x: "-100vw",
    },
    visiable: {
      x: 0,
    },
    transition: {
      type: "String",
      easeIn,
    },
  };

  return (
    <>
      <Header />
      <section className={style.list_container}>
        <h1 className={style.list_box}>Number Of Posts - {data?.length}</h1>
        <motion.div variants={Left} initial="hidden" animate="visiable">
          {data?.slice(0, length).map((da) => {
            return (
              <>
                <motion.li
                  className={style.list_box}
                  whileHover={{ scale: 1.1, color: "yellow" }}
                >
                  {da.name}
                </motion.li>
              </>
            );
          })}
        </motion.div>

        <motion.button
          className={style.list_btn_container}
          onClick={handleClick}
        >
           {`See ${title}`}
        </motion.button>
      </section>
    </>
  );
  a;
};

export default User;
