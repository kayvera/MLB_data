import React from "react";
import {
  Drawer as MUIDrawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import styles from "./drawer.styles";
import { withStyles } from "@material-ui/core/styles";

const Drawer = () => {
  return (
    <MUIDrawer variant="permanent">
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem classname="listItem" button key={text}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </MUIDrawer>
  );
};

export default withStyles(styles)(Drawer);
