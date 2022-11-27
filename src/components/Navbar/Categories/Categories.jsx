import styles from "../Navbar.module.scss";
import GET_CATEGORIES from "../../../queries/GET_CATEGORIES";
import Category from "./Category";
import { connect } from "react-redux";
import { setCategory } from "../../../app/categorySlicer";
import {useQuery} from "@apollo/client";

function Categories({value, setCategory}){

  const { loading, error, data } = useQuery(GET_CATEGORIES);

  function handleClick(id) {
    setCategory(id);
  }

  function unwrapCategories(loading, error, data){
    if (loading) return <div>...</div>;
    else
      return data.categories.map(({ name }, index) => (
          <Category
              name={name}
              key={index}
              onClick={() => handleClick(name)}
              active={value === name}
          />
      ));
  }

    return (
      <ul className={styles.categories}>
        {unwrapCategories(loading, error, data)}
      </ul>
    );
}

const categoryStateToProps = (state) => {
  return state.category;
};

export default connect(categoryStateToProps, { setCategory })(Categories);
