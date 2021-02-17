import './App.css';

import { BrowserRouter } from "react-router-dom";

import Contents from './components/Content/Content';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';


function App(props) {
  return (
    <BrowserRouter>
      <div className="main_container">
        <Header className="header" />

        <div className="main_block">
          <SideBar className="sideBar" state={ props.state.sideBar } />

          <Contents calssName="contents"
                    state={ props.state.contents }
                    dispatch={ props.dispatch }/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
