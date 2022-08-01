import { Component } from "react";
import styles from "./Dimmer.module.scss";
import { connect } from "react-redux";

class Dimmer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.dimmer ? styles.Dimmer : ""}>
        {this.props.children}
      </div>
    );
  }
}

const stateToProps = (state) => {
  return state.dimmer;
};

export default connect(stateToProps, null)(Dimmer);
