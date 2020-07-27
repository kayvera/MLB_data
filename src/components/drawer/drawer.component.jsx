import React from "react";
import {
  Drawer as MUIDrawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import GroupOutlinedIcon from "@material-ui/icons/GroupOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SportsKabaddiOutlinedIcon from "@material-ui/icons/SportsKabaddiOutlined";
import AnnouncementOutlinedIcon from "@material-ui/icons/AnnouncementOutlined";
// import styles from "./drawer.styles";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles({
  drawer: {
    width: "160",
  },
});

const Drawer = (props) => {
  const { history } = props;
  const classes = useStyles();
  const itemsList = [
    {
      text: "League Home",
      icon: <HomeOutlinedIcon />,
      onClick: () => history.push("/"),
    },
    {
      text: "My Team",
      icon: <GroupOutlinedIcon />,
      onClick: () => history.push("/myteam"),
    },
    {
      text: "Players",
      icon: <SportsKabaddiOutlinedIcon />,
      onClick: () => history.push("/players"),
    },
    {
      text: "News",
      icon: <AnnouncementOutlinedIcon />,
      onClick: () => history.push("/news"),
    },
  ];
  return (
    <MUIDrawer variant="permanent" className={classes.drawer}>
      <List>
        {itemsList.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </MUIDrawer>
  );
};

export default withRouter(Drawer);
