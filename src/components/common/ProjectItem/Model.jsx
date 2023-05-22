import React from 'react';
import { useNavigate } from "react-router-dom";
import styles from "./Model.module.css";

const Model = ({project:{id,title,des,cat,img}}) => {
  const nav = useNavigate();
  return (
    <div className={styles.model_wrap}>
      <div className={styles.img_wrap}>
        
        <img className={styles.imgs} src={img} alt={title} />
      </div>
      <div className={styles.cat}>{cat}</div>
      <div className={styles.title}>
        <div className={styles.left}>
          <h3>{title}</h3>
        </div>
        <div className={styles.right}>
          <button type="button" onClick={() => nav("/project/"+id)}>View &#x2192;</button>
        </div>
      </div>
      <div className={styles.des}>
        <p>{des}</p>
      </div>
    </div>
  );
};

export default Model;