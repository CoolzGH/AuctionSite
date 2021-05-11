import {
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { Component } from "react";
import { ChangeForm } from "./ChangeForm";
import ReactDOM from "react-dom";

export interface Lot {
  title: string;
  description: string;
}

interface IProps {
  lot: Lot;
  onDelete: (stuff: Lot) => void;
}

export default class MyCard extends Component<IProps> {
  myLot: Lot;
  constructor(props: IProps) {
    super(props);
    this.myLot = props.lot;
  }

  deleteHandler = () => {
    console.log(`trying to delete me? ${JSON.stringify(this.myLot)}`);
    if (window.confirm("Are you shure you want delete this?")) {
      console.log(`delete item ${JSON.stringify(this.myLot)}`);
      this.props.onDelete(this.myLot);
    } else {
      console.log(`dont delete item ${JSON.stringify(this.myLot)}`);
    }
  };

  openform = () => {
    console.log("Open form");
    ReactDOM.render(
      <ChangeForm
        title={this.myLot.title}
        description={this.myLot.description}
      />,
      document.getElementById("root")
    );
  };

  render() {
    return (
      <Router>
        <Link to="/Lots"></Link>
        <Card>
          <Route
            path="/ChangeForm"
            render={(props) => (
              <ChangeForm
                title={this.myLot.title}
                description={this.myLot.description}
              />
            )}
          />
          <CardContent>
            <Typography variant="h5" component="h2">
            <Link to="/ChangeForm">{this.myLot.title}</Link>
            </Typography>
            <Typography variant="body2" component="p">
              {this.myLot.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="primary" onClick={this.openform}>
              Change
            </Button>
            <IconButton aria-label="delete" onClick={this.deleteHandler}>
              <DeleteIcon fontSize="large" />
            </IconButton>
          </CardActions>
        </Card>
      </Router>
    );
  }
}
