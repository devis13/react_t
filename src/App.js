
import './App.css';
import Contents from './components/Content/Content';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';


function App() {
  return (
    <div className="--grid-wrap">
      <Header />

      <Navigation />

      <Contents />
    </div>
  );
}





export default App;
