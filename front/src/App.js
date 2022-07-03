import logo from './logo.svg';
import './App.css';

import {useEffect, useState} from "react";
import axios from "axios";

function App() {
  const [result, setresult] = useState(null);
    const app = async () => {
        try {
            let res = await axios.get("http://localhost:8000/api/todo");
            let result = res.data;
            setresult(result);
        }catch (e){
            console.log(e);
        }
    };
    useEffect(() => {
       app();
    }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          {result}


      </header>
    </div>
  );
}

export default App;
