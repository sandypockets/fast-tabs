import { useState } from "react";
import './main.css';
import Home from "./components/Home";
import ButtonSettings from "./components/ButtonSettings";
import Settings from "./components/Settings";

function App() {
  const [page, setPage] = useState('home')

  const changePage = (destination) => {
    setPage(destination)
  }

  return (
    <div className="app">
      {page === 'home' &&
        <Home
          changePage={changePage}
        />
      }
      {page === 'settings' &&
        <Settings changePage={changePage} />
      }
      {page === '1' &&
        <ButtonSettings
          buttonId={'1'}
          changePage={changePage}
        />
      }
    </div>
  );
}

export default App;
