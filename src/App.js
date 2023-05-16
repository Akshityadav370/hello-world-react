import logo from './logo.svg';
import './App.css';
import './Hello.css'
import './Timings.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          Hello World
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to learn React
        </a>
      </header>
    </div>
  );
}

export function MyProject() {
  return (
    <div id='content'>
      <h1>First React Project</h1>
      <p>This is my first react component</p>
      <ul>
        <li>Red Tape</li>
        <li>Nike</li>
        <li>Puma</li>
      </ul>
    </div>
  );
}

export function Timings() {
  var time = new Date();
  var hours = time.getHours();
  var mins = time.getMinutes();
  var secs = time.getSeconds();
  if (hours<=11 && mins<=59 && secs<=59){
    return (
      <div id = "breakfast">
        <h1>Breakfast Time!</h1>
      </div>
    );
  }else if(hours<=17 && mins<=59 && secs<=59){
    return (
    <span id="lunch">
      <span>Lunch Time!</span>
      <br></br>
      <span>Lets eat fish curry!</span>
    </span>);
  }else{
    return (<div id="dinner">
      <h1>Dinner Time!</h1>
      <span>Lets eat fish!</span>
    </div>);
  }
}

export default App;
