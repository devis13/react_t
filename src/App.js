import './App.css';

import { BrowserRouter } from "react-router-dom";

import Contents from './components/Content/Content';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';


function App(props) {
  const state = props.store.getState();

  return (
    <BrowserRouter>
      <div className="main_container">
        <Header className="header" />

        <div className="main_block">
          <SideBar className="sideBar" state={ state.sideBar } />

          <Contents calssName="contents" store={ props.store }/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
