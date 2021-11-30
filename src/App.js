import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";
// import ListItem from "./components/ListItem";

function App() {
  return (
    <div>
      <Header />
      <section>
        <Form />
      </section>
      <List />
      <section>
        <form>
          <div>
            <label htmlFor="search">Новое задание</label>
            <input id="search" placeholder="Название" />
          </div>
          <div>
            <button type="button">Создать</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default App;
