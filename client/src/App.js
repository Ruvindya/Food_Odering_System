import './App.css';
import { BrowserRouter as Router,Routes,Route, Link} from "react-router-dom";
import InfoUser from './component/pages/InfoUser';
import Navbar from './component/layout/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <Router>
        <Navbar/>

          <Link to="/user">User</Link>


          <Routes>
              <Route path="/user" element={<InfoUser/>}/>
              
          </Routes>
          
          
        </Router>
    </div>
  );
}

export default App;
