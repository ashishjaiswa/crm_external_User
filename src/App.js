import React from "react";
import UserScreen from "./screens/UserScreen";
import {
  BrowserRouter,
  Route,
  Link,
  Routes,
  Outlet
} from "react-router-dom";
import ExternalUserRouter from "./Routers/ExternalUserRouter";
import Login from "./screens/Login";
import TopStutas from "./components/TopStutas";

function App() {
  return (
   
   <BrowserRouter>
   <ExternalUserRouter/>
  </BrowserRouter>
  
   );
}

export default App;
