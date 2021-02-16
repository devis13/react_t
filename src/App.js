import './App.css';

import { BrowserRouter } from "react-router-dom";

import Contents from './components/Content/Content';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';


function App(props) {
  // debugger;
  return (
    <BrowserRouter>
      <div className="main_container">
        <Header className="header" />

        <div className="main_block">
          {/* <Navigation className="navigation" state={props.state.navigation}/> */}
          <SideBar className="sideBar" state={props.state.sideBar}/>

          <Contents calssName="contents" 
                    state={props.state.contents}
                    addPost={props.addPost}
                    addMessage={ props.addMessage }/>
        </div>
      </div>
    </BrowserRouter>
  );
}





export default App;
