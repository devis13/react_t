import './App.css';

import { BrowserRouter, Route } from "react-router-dom";

import Contents from './components/Content/Content';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';


function App() {
  return (
    <BrowserRouter>
      <div className="grid_wrap">
        <Header className="header" />

        <div className="main_block">
          <Navigation className="navigation" />

          <Contents calssName="contents" />
        </div>
      </div>
    </BrowserRouter>
  );
}





export default App;
