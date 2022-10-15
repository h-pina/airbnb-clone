import CategoryIcon from "../CategoryIcon";
import data from "../../mocks/categories";
import { FC } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";

//Icons and Images imports
import FullLogo from "../../svg/airbnbFullLogo.js";
import ReducedLogo from "../../svg/airbnbReducedLogo.js";
import WorldIcon from "../../svg/worldIcon.js";
import PersonIcon from "../../svg/personIcon.js";
import Bars from "../../svg/bars.js";

//TODO: Cara tenho certeza que essa estrutura pode ser melhor, mas de inicio foi o melhor que consegui pensar. Acho que o CSS pode ser mais compacto tbm
//TODO: Criar um novo componente pra parte das categorias. Isso vai ficar muito grande se for tudo pro Header
const Header: FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleWindowResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize); //??
    };
  }, []);
  return (
    <header className={styles.header}>
      <div className={styles.logoSection}>
        <div className={styles.logoContainer}>
          {windowWidth > 1130 ? <FullLogo /> : <ReducedLogo />}
        </div>
      </div>

      <div className={styles.searchBarSection}>
        <input className={styles.searchBar} type="text" />
      </div>
      <div className={styles.userButtonsSection}>
        <div className={styles.userButtons}>
          <div className={styles.worldIconButton}>
            <WorldIcon />
          </div>
          <div className={styles.userOptionsContainer}>
            <div className={styles.userOptions}>
              <div style={{ width: `25px` }}>
                <Bars />
              </div>
              <div
                style={{
                  width: `25px`,
                  paddingInline: `2px`,
                  paddingTop: "1px",
                  color: "white",
                  backgroundColor: "grey",
                  borderRadius: `320px`,
                  marginLeft: "10px",
                }}
              >
                <PersonIcon />
              </div>
            </div>
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
