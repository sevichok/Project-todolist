import './HeaderStyle.css';

const Header = ({children}) => {
  return (
    <div className="headerContainer">
      <h1 className="title"> Todo list</h1>
      <h4> Количество записей {children}</h4>
    </div>
  );
};

export default Header;
