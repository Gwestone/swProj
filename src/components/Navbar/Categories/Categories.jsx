import { Component } from "react";
import styles from "../Navbar.module.scss";
import { Query } from "@apollo/client/react/components";
import GET_CATEGORIES from "../../../queries/GET_CATEGORIES";
import Category from "./Category";
import { connect } from "react-redux";
import { setCategory } from "../../../app/categorySlicer";

class Categories extends Component {
  handleClick(id) {
    this.props.setCategory(id);
  }

  render() {
    const active = this.props.value;

    return (
      <ul className={styles.categories}>
        <Query query={GET_CATEGORIES}>
          {({ loading, data }) => {
            if (loading) return <div>...</div>;
            else
              return data.categories.map(({ name }, index) => (
                <Category
                  name={name}
                  key={index}
                  onClick={() => this.handleClick(name)}
                  active={active === name}
                />
              ));
          }}
        </Query>
      </ul>
    );
  }
}

const categoryStateToProps = (state) => {
  return state.category;
};

export default connect(categoryStateToProps, { setCategory })(Categories);
