import React from "react";
import Drawer from "../components/drawer/drawer.component";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Drawer />
      <p>Homepage</p>
    </div>
  );
};

export default Home;
