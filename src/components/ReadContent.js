import React, { Component } from "react";

class ReadContent extends Component {
  render() {
    return (
      <article>
        <h1>
          <h2>{this.props.title}</h2>
        </h1>
        {this.props.desc}
      </article>
    );
  }
}

export default ReadContent;
