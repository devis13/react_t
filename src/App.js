import './App.css';
import Contents from './components/Content/Content';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';


function App() {
  return (
      <div className="main_container">
        <Header className="header" />
        <div className="main_block">
          <SideBar className="sideBar"/>
          <Contents calssName="contents"/>
        </div>
      </div>
  );
}

export default App;
