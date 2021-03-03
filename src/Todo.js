import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import db from "./firebase";

function Todo(props) {
  return (
    <List className="todolist">
      <ListItem>
        <ListItemText primary={props.text.text} secondary="Dummy Line" />
      </ListItem>
      <DeleteForeverIcon
        onClick={() => db.collection("todos").doc(props.text.id).delete()}
      />
    </List>
  );
}

export default Todo;
