import React from "react";
import style from "./page.module.css";
import { CiShoppingCart } from "react-icons/ci";
import { easeIn, motion } from "framer-motion";
import { useRouter } from "next/navigation";

const TransformHeader = {
  hidden: {
    rotate: -360,
    pathLength: 0,
  },
  visiable: {
    rotate: 0,
    pathLength: 1,
    animate: {
      transition: {
        type: "String",
        duration: 3,
        easeIn,
      },
    },
  },
};

const Header = () => {
  const Navigate = useRouter();
  return (
    <>
      <nav className={style.header_container}>
        <div className={style.header_main_icon_container}>
          <motion.div
            variants={TransformHeader}
            initial="hidden"
            animate="visiable"
          >
            <CiShoppingCart style={{ color: "white" }} size={25} />
          </motion.div>

          <motion.p
            className={style.header_fnt}
            whileHover={{
              color: "#B98989",
              scale: 1.1,
              transition: { type: "spring", duration: 1 },
            }}
          >
            Product Cart
          </motion.p>
        </div>
        <div className={style.header_nav_body}>
          <motion.p
            whileHover={{
              color: "#B98989",
              scale: 1.1,
              transition: { type: "spring", duration: 1 },
            }}
            className={style.header_fnt}
            onClick={() => Navigate.push("/")}
          >
            Home
          </motion.p>
          <motion.p
            whileHover={{
              color: "#B98989",
              scale: 1.1,
              transition: { type: "spring", duration: 1 },
            }}
            className={style.header_fnt}
            onClick={() => Navigate.push("/users")}
          >
            Users
          </motion.p>
          <motion.p
            whileHover={{
              color: "#B98989",
              scale: 1.1,
              transition: { type: "spring", duration: 1 },
            }}
            className={style.header_fnt}
            onClick={() => Navigate.push("/toogle")}
          >
            Toogle
          </motion.p>
          <motion.p
            whileHover={{
              color: "#B98989",
              scale: 1.1,
              transition: { type: "spring", duration: 1 },
            }}
            className={style.header_fnt}
            onClick={() => Navigate.push("/card")}
          >
            Card
          </motion.p>
        </div>
      </nav>
    </>
  );
};

export default Header;
