import React from "react";
import css from "./Main.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: ""
    };
  }
  componentDidMount() {
    this.getDataHandler();
  }

  getDataHandler = () => {
    fetch(
      "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1"
    )
      .then(res => res.json())
      .then(res => {
        console.log(res);
        const quote = res[0].content.replace(/<\/?p>/g, "");
        const author = res[0].title;
        this.setState({
          quote,
          author
        }).catch(err => console.log(err));
      });
  };

  render() {
    return (
      <main className={css.container}>
        <p className={css.author}>{this.state.author}</p>
        <p className={css.quote}>{this.state.quote}</p>

        <button className={css.next} onClick={this.getDataHandler.bind(this)}>
          Next
        </button>
      </main>
    );
  }
}

export default Main;
