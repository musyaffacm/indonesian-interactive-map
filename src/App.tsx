import "./App.css";
import IndonesianMap from "./components/IndonesianMap";
import { SAMPLE_DATA_BY_ID } from "./constant/indonesianProvince";

function App() {
  return <IndonesianMap data={SAMPLE_DATA_BY_ID} />;
}

export default App;
