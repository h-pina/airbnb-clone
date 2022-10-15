import CategoryIcon from "../CategoryIcon";
import data from "../../mocks/categories";
import { FC } from "react";
import styles from "./style.module.scss";
import Image from "next/image";

import logo from "../../imgs/logo.png";
import WorldIcon from "../../ico/worldIcon.js";
import PersonIcon from "../../ico/personIcon.js";
import Bars from "../../ico/bars.js";

//TODO: Cara tenho certeza que essa estrutura pode ser melhor, mas de inicio foi o melhor que consegui pensar. Acho que o CSS pode ser mais compacto tbm
//TODO: Criar um novo componente pra parte das categorias. Isso vai ficar muito grande se for tudo pro Header
const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.UpperHeader}>
        <div className={styles.logoContainer}>
          <div className={styles.logo}>
            <Image src={logo} alt="logo" />
          </div>
        </div>

        <div className={styles.searchBarContainer}>
          <input className={styles.searchBar} type="text" />
        </div>
        <div className={styles.userButtonsContainer}>
          <div className={styles.userButtons}>
            <WorldIcon />
            <PersonIcon />
            <Bars />
          </div>
        </div>
      </div>

      {/*<div className="LowerHeader">
        {data.map((item) => {
          return (
            <>
              <CategoryIcon key={item.id} ico={item.ico} title={item.title} />
            </>
          );
        })}
      </div>*/}
    </header>
  );
};

export default Header;
