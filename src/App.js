  import logo from './logo.svg';
import './App.css';
import websocketWrapper from "react-use-websocket";
function App() {
  return (
    <div className="App">



  <ul id="messages"></ul>
  <div id="form">
    <input id="input" /><button>Send</button>
  </div>
    </div>
  );
}

export default App;
