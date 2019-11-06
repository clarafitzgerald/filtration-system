import React from "react";
import styles from "./App.module.scss";
import Article from "../../components/Article/Article";
import Filter from "../../components/Filter/Filter";
import { firestore } from "../../firebase";

class App extends React.Component {
  state = {
    articles: [],
    filter: []
  };

  updateState = filterVal => {
    this.setState({
      filter: this.state.filter.includes(filterVal)
        ? this.state.filter.filter(item => item !== filterVal)
        : this.state.filter.concat(filterVal)
    });
  };

  componentDidMount() {
    firestore
      .collection("articles")
      .get()
      .then(querySnapshot => {
        const articles = querySnapshot.docs.map(doc => {
          return { ...doc.data(), docId: doc.id };
        });
        this.setState({
          articles: articles
        });
      });
  }
  render() {
    let newArray = this.state.articles.filter(language => {
      return this.state.filter.includes(language.filter);
    });
    let array = this.state.articles;
    let filters = [];
    array.forEach(item => {
      filters = filters.includes(item.filter)
        ? filters
        : filters.concat(item.filter);
    });
    let clicky = () => {
      this.setState({
        filter: filters
      });
    };

    return (
      <>
        <main>
          <section className={styles.filterButtons}>
            {filters.map((item, index) => (
              <Filter
                filterAction={this.updateState}
                filter={item}
                key={index}
              />
            ))}
            <button className={styles.selectAll} onClick={clicky}>
              BIG BOI
            </button>
            {/* <button onClick={this.updateState({ filters })}></button> */}
          </section>
          {newArray.map((language, index) => (
            <Article articleData={language} key={index} />
          ))}
        </main>
      </>
    );
  }
}

export default App;
