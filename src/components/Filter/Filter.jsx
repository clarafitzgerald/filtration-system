import React, { Component } from "react";
import styles from "./Filter.module.scss";

class Filter extends Component {
  handleClick = filterType => {
    this.props.filterAction(filterType);
  };
  render() {
    var divStyle = {
      backgroundColor: `${this.props.filter}`
    };
    return (
      <button
        style={divStyle}
        onClick={() => this.handleClick(`${this.props.filter}`)}
        className={styles.buttons}
      >{`${this.props.filter}`}</button>
    );
  }
}

export default Filter;
