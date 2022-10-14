import CategoryIcon from "../CategoryIcon";
import data from "../../mocks/categories";
import { FC } from "react";

const Header: FC = () => {
  return (
    <header>
      <div className="UpperHeader">
        <div className="logo"></div>
        <div className="searchBar"></div>
        <div className="userButtons"></div>
      </div>
      <div className="LowerHeader">
        {data.map((item) => {
          return (
            <>
              <CategoryIcon key={item.id} ico={item.ico} title={item.title} />
            </>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
