import ListItem from "../ListItem";
import "./ListStyle.css";

const List = ({ list }) => {
    const todoItems = list?.map(({ id, name, done }) => (
        <ListItem key={id} name={name} done={done} />)
    );

    return (<ul className="listContainer">
        {todoItems}
    </ul>);
};

export default List;

