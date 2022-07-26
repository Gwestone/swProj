import { Component } from "react";
import styles from "./Dimmer.module.css";

export default class Dimmer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className={""}>{this.props.children}</div>;
  }
}
