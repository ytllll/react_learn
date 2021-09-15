import React, { PureComponent } from 'react';
import axios from "axios";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.stata = {}
  }

  componentDidMount() {
    axios({
      url: "https://httpbin.org/get",
      params: {
        name: "ytl",
        age: 18
      }
    }).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }


  render() {
    return (
      <div>
        App
      </div>
    )
  }
}
