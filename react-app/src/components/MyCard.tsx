import {
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { Component } from "react";
import { ChangeForm } from "./ChangeForm";

export interface Lot {
  title: string;
  description: string;
}

interface IProps {
  lot: Lot;
  onDelete: (stuff: Lot) => void;
}

interface IState {
  isForm:boolean;
}

export default class MyCard extends Component<IProps, IState> {
  myLot: Lot;
  constructor(props: IProps) {
    super(props);
    this.myLot = props.lot;
    this.state = {
      isForm:false,
    }
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
    this.setState(
      {isForm:true}
    )
  };

  render() {
    return (
        <Card>
          {this.state.isForm ?
              <ChangeForm
                title={this.myLot.title}
                description={this.myLot.description}
              />
              :
            <>
          <CardContent>
            <Typography variant="h5" component="h2">
              {this.myLot.title}
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
          </>
  }
        </Card>
    );
  }
}
