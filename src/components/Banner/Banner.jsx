import React from "react";
import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <header className={styles.banner}>
      <img src="/images/banner.png" alt="" />
    </header>
  );
}
