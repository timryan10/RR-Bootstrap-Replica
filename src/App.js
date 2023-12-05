import './App.css';
import Background from './Components/BackgroundImg';
import TopBar from './Components/TopBar';
import Listings from './Components/StoreListings';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Background />
      <Listings />
    </div>
  );
}

export default App;
