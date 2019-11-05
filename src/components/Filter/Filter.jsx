import React, { Component } from "react";
import styles from "./Filter.module.scss";

class Filter extends Component {
  state = { filter: "" };

  handleClickGerman = () => {
    this.props.filterAction("german");
    // this.setState({
    //   // filter: this.state.filter.push("german")
    //   // german: !this.state.german,
    //   // filter: this.state.german
    //   //   ? this.state.filter.concat("german")
    //   //   : this.state.filter.filter(x => x != "german")
    //   filter: "german"
    // });
  };
  handleClickPolish = () => {
    this.props.filterAction("polish");
    // this.setState({
    //   // filter: this.state.filter.push("polish")
    //   polish: !this.state.polish,
    //   filter: this.state.polish
    //     ? this.state.filter.concat("polish")
    //     : this.state.filter.filter(x => x != "polish")
    // });
  };
  handleClickWelsh = () => {
    this.props.filterAction("welsh");
    // this.setState({
    //   // filter: this.state.filter.push("welsh")
    //   welsh: !this.state.welsh,
    //   filter: this.state.welsh
    //     ? this.state.filter.concat("welsh")
    //     : this.state.filter.filter(x => x != "welsh")
    // });
  };
  handleClickAll = () => {
    this.props.filterAction();
    // this.setState({
    //   // filter: this.state.filter.push("german", "polish", "welsh")

    //   german: true,
    //   polish: true,
    //   welsh: true
    // });
  };

  render() {
    return (
      <section className={styles.filterButton}>
        <button
          onClick={this.handleClickGerman}
          className={styles.filterGerman}
        ></button>
        <button
          onClick={this.handleClickPolish}
          className={styles.filterPolish}
        ></button>
        <button
          onClick={this.handleClickWelsh}
          className={styles.filterWelsh}
        ></button>
        <button
          onClick={this.handleClickAll}
          className={styles.filterAll}
        ></button>
      </section>
    );
  }
}

export default Filter;
