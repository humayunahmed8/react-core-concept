import logo from './logo.svg';
import './App.css';

function App() {

  const singer = {
    name : 'Arijit',
    prof : 'Singer'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <h1>Love you React {5+3}</h1>
        <p>{singer.name} is a famous {singer.prof}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
