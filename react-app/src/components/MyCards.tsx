import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import MyCard, { Lot } from "./MyCard";

const allLotNet: Lot[] = [
  {
    title: "Lot №1",
    description: "Simple lot",
  },
  {
    title: "Lot №2",
    description: "Very simple lot",
  },
  {
    title: "Lot №3",
    description: "Not simple lot",
  },
  {
    title: "Lot №4",
    description: "lot",
  },
  {
    title: "Lot №5",
    description: "lot",
  },
  {
    title: "Lot №6",
    description: "lot",
  },
];

interface IState {
  allLot: Lot[];
}

export default class MyCards extends Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      allLot: [],
    };
  }

  componentDidMount() {
    this.gettingLot();
    setTimeout(() => {
      this.setState({ allLot: allLotNet });
    }, 1200);
  }

  deleteElement = (lot: Lot) => {
    const filtered = this.state.allLot.filter(
      (item: Lot) => item !== lot
    );
    this.setState({ allLot: filtered });
  };

  async gettingLot() {
    fetch('/api/demo')
    .then(response => response.json())
    .then(data => console.log(JSON)); // json => console.log(json)
  }

  render() {
    return (
      <>
        {this.state.allLot.length > 0 ? (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container justify="flex-start" spacing={1}>
                {this.state.allLot.map((item: Lot) => {
                  return (
                    <MyCard
                      key={item.title}
                      lot={item}
                      onDelete={this.deleteElement}
                    />
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        ) : (
          <img src={"/gif/preloader.gif"} alt ={"Preloader"} />
        )}
      </>
    );
  }
}