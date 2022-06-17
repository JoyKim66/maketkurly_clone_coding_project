import React from "react";
import SignUp from "./pages/SignUp"
import Login from "./pages/Login";
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" exact element={<Login/>}/>
        <Route path="/signup" exact element={<SignUp/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
