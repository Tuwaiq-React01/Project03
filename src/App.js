import FoxCard from "./Components/Card";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import "./App.css";
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsCount: 8,
    };
  }

  addItems() {
    this.setState({ itemsCount: this.state.itemsCount + 4 });
  }

  render() {
    let x = [];
    for (let i = 0; i < this.state.itemsCount; i++) x.push(i);
    x = x.map(() => (
      <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
        <FoxCard />
      </Grid>
    ));

    return (
      <div className="App">
        <Grid container alignItems="center" justify="center">
          {x}
        </Grid>
        <Grid container alignItems="center" justify="center">
          <Button
            onClick={() => this.addItems()}
            variant="contained"
            size="large"
            style={{ margin: "50px", width: "50%" }}
          >
            Load More Images
          </Button>
        </Grid>
      </div>
    );
  }
}
