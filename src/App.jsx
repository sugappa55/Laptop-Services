import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { NewOrder } from "./components/NewOrder";
import { Orders } from "./components/Orders";
import { ProtectedRoute } from "./components/ProtectedRoute";
import {Link} from "react-router-dom"
import {Route,Routes} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <div>
        <Link className="nav-home" to="/">
          Home
        </Link>
        {/* Show either login or logout below */}
        <Link className="nav-logout" to="/logout">
          Logout
        </Link>
        <Link className="nav-login" to="/login">
          Login
        </Link>
      </div>

      <Routes>
        {/* Routes are as follows:
        Route      Component
        /           Home
        /login      Login
        /logout     Logout
        /orders     Orders    Protected
        /neworder   NewOrder  Protected
        */
      }
      <Route path="/" elemenet={<Home/>}/>
      <Route path="/login" elemenet={<Login/>}/>
      <Route path="/logot" elemenet={<Logout/>}/>
      <Route path="/orders" elemenet={<ProtectedRoute><Orders/></ProtectedRoute>}/>
      <Route path="/neworder" element={<ProtectedRoute><NewOrder/></ProtectedRoute>}/>    
      </Routes>
    </div>
  );
}

export default App;
