import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Search from './Components/Search';
import './Components/assets/css/main.css';
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
    <div>
        <Routes>
            <Route path="/" exact element={<Search />}/>
            <Route path="*" exact element={<NotFound />}/>
        </Routes>
    </div>
  </Router>
  );
}

export default App;
