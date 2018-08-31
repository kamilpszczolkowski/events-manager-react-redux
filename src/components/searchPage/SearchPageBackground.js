/*I decided to left the local state of component in this example.
There are only local variables which help to change pictures and are not
uesd in any other place of the application - that's why I didn't want
to put them in global redux store, where necessary information is stored.
That's why logic is invoked also in this component*/

import React, { Component } from "react";

export default class SearchPageBackground extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actPic: 1,
      picVisible: false
    };
  }

  componentDidMount() {
    //Preloading Images
    const img1 = new Image();
    img1.src = "images/1.jpg";
    const img2 = new Image();
    img2.src = "images/2.jpg";
    const img3 = new Image();
    img3.src = "images/3.jpg";
    const img4 = new Image();
    img4.src = "images/4.jpg";
    const img5 = new Image();
    img5.src = "images/5.jpg";

    let countIter = 0;
    this.timeout = setTimeout(() => {
      this.setState({
        picVisible: true
      });
      this.interval = setInterval(() => {
        countIter++;
        if (countIter === 10) {
          this.setState({
            picVisible: false
          });
        }
        if (countIter === 11) {
          countIter = 0;
          if (this.state.actPic === 5) {
            this.setState({
              actPic: 1,
              picVisible: true
            });
          } else {
            this.setState({
              actPic: this.state.actPic + 1,
              picVisible: true
            });
          }
        }
      }, 1000);
    }, 2500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    clearTimeout(this.timeout);
  }

  render() {
    const blackEl = <div className="blackBackground" />;
    const element = <div className={"pic" + this.state.actPic} />;
    return this.state.picVisible ? (
      <div>
        {blackEl}
        {element}
      </div>
    ) : (
      blackEl
    );
  }
}
