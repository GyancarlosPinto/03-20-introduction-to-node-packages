import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        < ToastContainer/>
        <button onClick={() => toast("Hello, this is a toast! CHEERS!")}>Show Toast</button>
        <button onClick={() => toast("Simple Toast!")}>Show Simple Toast</button>
        <button onClick={() => toast.success("Success message!")}>Success</button>
        <button onClick={() => toast.error("ERROR MESSAGE!!!")}>Error</button>
        <button onClick={() => toast.info("Info Message")}>Info</button>
        <button onClick={() => toast.warning("THIS IS A WARNING MESSAGE!!!")}>Warning</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
