import styles from "./List.module.css"
import propTypes from 'prop-types'

function List(props) {

    const category = props.category;
    const itemList = props.items;

    const listitems = itemList.map(
        item => <li key={item.id}>{item.name}: &nbsp; <b>{item.calories}</b></li>);

    return(
        <>
            <h3 className={styles.listCategory}>{category}</h3>
            <ol className={styles.listItems}>{listitems}</ol>
        </>
    );
}

List.propTypes = {
    category: propTypes.string,
    items: propTypes.arrayOf(propTypes.shape({
        id: propTypes.number, 
        name: propTypes.string, 
        calories: propTypes.number})),
}

List.defaultProps = {
    category: "Category",
    items: [],
}

export default List