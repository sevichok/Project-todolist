import './HeaderStyle.css';

const Header = ({listCount}) => {
  return (
    <div className="headerContainer">
      <h1 className="title"> Todo list</h1>
      <h4> Количество записей: {listCount}</h4>
    </div>
  );
};

export default Header;
