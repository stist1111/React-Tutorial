import React, { Component } from "react";
class Subject extends Component {
  render() {
    console.log("Subject render");
    return (
      <header>
        {" "}
        <h1>
          <a
            href="/"
            onClick={function (e) {
              e.preventDefault(); //reload 하지 않도록 막기
              this.props.onChangePage();
            }.bind(this)}
          >
            {this.props.title}
          </a>
        </h1>
        {this.props.sub}
      </header>
    );
  }
}

export default Subject;
