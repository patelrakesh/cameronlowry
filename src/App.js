import logo from './logo.svg';
import './index.css';
import UnitInformationPage from './pages/UnitInformationPage';
import MappedData from "./data";

function App() {
  return (
    <div className="App">
      <UnitInformationPage data={MappedData} />
    </div>
  );
}

export default App;
