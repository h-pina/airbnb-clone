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

//TODO: Passar esses styles inline para o css??
//TODO: Completar Botao central de pesquisa
const Header: FC = () => {
  const [windowWidth, setWindowWidth] = useState<Number>();

  useEffect(() => {
    function handleWindowResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      handleWindowResize();
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const debugAnywhere = () => console.log("Anywhere Click");
  const debughAnyWeek = () => console.log("AnyWeek Click");
  const debugAddGuests = () => console.log("AddGuests Click");

  return (
    <header className={styles.header}>
      <div className={styles.logoSection}>
        <div className={styles.logoContainer}>
          {windowWidth && (windowWidth > 1130 ? <FullLogo /> : <ReducedLogo />)}
        </div>
      </div>

      <div className={styles.searchBarSection}>
        <div className={styles.searchBar}>
          <button onClick={debugAnywhere} className={styles.srchBarButton}>
            Anywhere
          </button>
          <span />
          <button onClick={debughAnyWeek} className={styles.srchBarButton}>
            Any week
          </button>
          <span />
          <button onClick={debugAddGuests} className={styles.srchBarButton}>
            Add guests
          </button>
          <span>O</span>
        </div>
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
