import React, { Component } from "react";
import styles from "./Filter.module.scss";

class Filter extends Component {
  render() {
    return (
      <section className={styles.filterButton}>
        <button className={styles.filterGerman}></button>
        <button className={styles.filterPolish}></button>
        <button className={styles.filterWelsh}></button>
        <button className={styles.filterAll}></button>
      </section>
    );
  }
}

export default Filter;
