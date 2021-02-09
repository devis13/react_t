import './App.css';

import { BrowserRouter} from "react-router-dom";

import Contents from './components/Content/Content';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';


function App(props) {
  // debugger;
  return (
    <BrowserRouter>
      <div className="grid_wrap">
        <Header className="header" />

        <div className="main_block">
          <Navigation className="navigation" navDate={props.navDate}/>

          
          <Contents   calssName="contents" 
                      postData={props.postData}
                      userDate={props.userDate}
                      messageDate={props.messageDate}/>
        </div>
      </div>
    </BrowserRouter>
  );
}





export default App;
