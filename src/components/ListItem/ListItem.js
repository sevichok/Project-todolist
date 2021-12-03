import "./ListItemStyle.css";

const ListItem = () => {
    return (<li className="listItem">
        <div className="listItemText">
        <h4>Сходить в магазин</h4></div>
        <div className="listItemButtons">
            <button type="button">Выполнено</button>
            <button type="button">Удалить</button>
        </div>
    </li>)
}

export default ListItem;