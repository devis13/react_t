
import './App.css';
import Contents from './components/Content/Content';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';


function App() {
  return (
    <div className="grid_wrap">
      <div className="header"><Header /></div>

      <div className="main_block">
        <div className="navigation"><Navigation /></div>
        <div calssName="contents"><Contents /></div>
      </div>
    </div>
  );
}





export default App;
