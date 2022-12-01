import styles from "../NavbarComponent.module.scss";
import GET_CATEGORIES from "../../../queries/GET_CATEGORIES";
import Category from "./Category";
import { connect } from "react-redux";
import { setCategory } from "../../../app/categorySlicer";
import { useQuery } from "@apollo/client";

function CategoriesComponent({ value, setCategory }) {
  const { loading, data } = useQuery(GET_CATEGORIES);

  //if query is loading show this message
  if (loading)
    return (
      <ul className={styles.categories}>
        <div>...</div>
      </ul>
    );
  //if data loaded render actual data
  else
    return (
      <ul className={styles.categories}>
        {data.categories.map(({ name }, index) => (
          <Category
            name={name}
            key={index}
            onClick={() => setCategory(name)}
            active={value === name}
          />
        ))}
      </ul>
    );
}

const categoryStateToProps = (state) => {
  return state.category;
};

//connect data to redux
export default connect(categoryStateToProps, { setCategory })(
  CategoriesComponent
);
