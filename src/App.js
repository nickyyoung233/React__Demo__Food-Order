function App() {
  return (
    <div>
      <header className="flex header">
        <h1>订餐Demo</h1>
        <div className="flex cart-button">
          <i>ICON</i>
          <span>购物车</span>
          <div>NUMBERS</div>
        </div>
      </header>

      <div className="flex background">
        <div className="flex intro">
          <h2>餐厅简介</h2>
          <p>餐厅简介01</p>
          <p>餐厅简介02</p>
        </div>
        <ul className="flex order-list">
          <li className="flex order-item">
            <div className="order-info">
              <h3>Sushi</h3>
              <p>Sushi introduction</p>
              <p>￥100</p>
            </div>
            <div className="flex order-num">
              <div className="order-count">
                <label htmlFor="food1">Amount</label>
                <input type="number" min="0" id="food1" />
              </div>
              <button className="button" type="button">
                + Add
              </button>
            </div>
          </li>
          <li className="flex order-item">
            <div className="order-info">
              <h3>Sushi</h3>
              <p>Sushi introduction</p>
              <p>￥100</p>
            </div>
            <div className="order-num">
              <label htmlFor="">Amount</label>
              <input type="number" min="0" />
              <button type="button">+ Add</button>
            </div>
          </li>
        </ul>
      </div>

      <div className="cargo"></div>
    </div>
  );
}

export default App;
