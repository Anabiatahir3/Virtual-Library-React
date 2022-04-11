import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
//import Login from "./pages/login/Login";
//import Register from "./pages/register/Register";
//import Settings from "./pages/settings/Settings";
//import Single from "./pages/single/Single";
//import Write from "./pages/write/Write";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  //const currentUser = true;
  return (
    <div>
      <Topbar />
      <Home/>    
      </div>
  );
}

export default App;