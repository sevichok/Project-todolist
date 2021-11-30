import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <section>
        <form>
          <div>
            <label htmlFor="search">Поиск по названию</label>
            <input id="search" placeholder="Начни вводить" />
          </div>
          <div>
            <button type="button">Все</button>
            <button type="button">Выполненные</button>
            <button type="button">Удалённые</button>
          </div>
        </form>
      </section>
      <ul>
        <li>
          <p>Сходить в магазин</p>
          <div>
            <button type="button">Выполнено</button>
            <button type="button">Удалить</button>
          </div>
        </li>
        <li>
          <p>Покормить кота</p>
          <div>
            <button type="button">Выполнено</button>
            <button type="button">Удалить</button>
          </div>
        </li>
        <li>
          <p>Выучить JS</p>
          <div>
            <button type="button">Выполнено</button>
            <button type="button">Удалить</button>
          </div>
        </li>
      </ul>
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
