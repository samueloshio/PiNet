import React from "react";
import styles from "../styles/Global";

const Button = ({ assetUrl, link }) => {
  return (
    <div
      className={`text-white ${styles.btnBlack} hover:bg-sky-500`}
      onClick={() => window.open(link, "_blank")}
    >
      <img src={assetUrl} alt="expo_icon" className={`${styles.btnIcon}`} />
      <div className="ml-4 flex flex-col justify-start">
        <p className={`${styles.btnText} text-xs font-normal`}>View it on</p>
        <p className={`${styles.btnText} text-sm font-bold`}>Expo Store</p>
      </div>
    </div>
  );
};

export default Button;
