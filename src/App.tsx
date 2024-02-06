import './index.scss';

function App() {
  return (
    <div className="container">
      <h1>Hello, world!</h1>
      <p>Start editing to see some magic happen :)</p>
      <div className="grid">
        <div className="card">
          <div className="card__header">Hello</div>
          <div className="card__body">
            <div className="card__badge">Test badge</div>
            <h2 className="card__text-title">This is a heading</h2>
            <p>This is some cool text</p>
            <button className="btn">Click me</button>
          </div>
        </div>
        <div className="card">
          <div className="card__header">
            <div className="hex">
              <embed src="src/assets/Hexagon.svg" type="image/svg+xml" />
              <embed
                src="src/assets/file-import-light.svg"
                type="image/svg+xml"
                className="hex__icon"
              />
            </div>
            <h2 className="card__text-title">Import File</h2>
          </div>
          <div className="card__body">
            <div className="card__badge">Test badge</div>
            <p className="card__text-body">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio voluptatum saepe natus
              qui, quas itaque libero sed quisquam fuga expedita, corrupti dignissimos sit facilis!
              Perspiciatis tempore voluptates aliquid porro? Rerum!
            </p>
            <button className="btn">Click me</button>
          </div>
        </div>
        <div className="card">
          <div className="card__header">Hello</div>
          <div className="card__body">
            <div className="card__badge">Test badge</div>
            <h2 className="card__text-title">This is a heading</h2>
            <p>This is some cool text</p>
            <button className="btn">Click me</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
