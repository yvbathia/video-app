import React from "react";
import style from "./Home.module.scss";
import GridContainer from "../../Components/GridContainer/GridContainer";

const Home = () => {
  return (
    <div className={style.root}>
      <GridContainer />
    </div>
  );
};

export default Home;
