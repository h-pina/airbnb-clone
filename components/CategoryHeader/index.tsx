import { useState } from "react";
import { categoryItems } from "../../data/mocks/categories";
import styles from "./style.module.scss";

const CategoryHeader = () => {
  console.log(categoryItems);

  return (
    <div className={styles.header}>
      {categoryItems.map((item) => {
        return (
          <div className={styles.tabs} key={item.id}>
            <h1 className={styles.tabText}>{item.description}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryHeader;
