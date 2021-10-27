import { useState } from "react";
import './main.css';
import Home from "./components/Home";
import ButtonSettings from "./components/ButtonSettings";
import Settings from "./components/Settings";

function App() {
  const [page, setPage] = useState('home')
  const [state, setState] = useState({
    urlOne: '',
    urlTwo: '',
    urlThree: '',
    groupOneIsPinned: false,
    urlFour: '',
    urlFive: '',
    urlSix: '',
    groupTwoIsPinned: false,
    urlSeven: '',
    urlEight: '',
    urlNine: '',
    groupThreeIsPinned: false
  })

  const changePage = (destination) => {
    setPage(destination)
  }

  return (
    <div className="app">
      {page === 'home' &&
        <Home
          changePage={changePage}
          state={state}
        />
      }
      {page === 'settings' &&
        <Settings
          changePage={changePage}
          state={state}
          setState={setState}
        />
      }
      {page === '1' &&
        <ButtonSettings
          buttonId={'1'}
          changePage={changePage}
          state={state}
          setState={setState}
        />
      }
    </div>
  );
}

export default App;
