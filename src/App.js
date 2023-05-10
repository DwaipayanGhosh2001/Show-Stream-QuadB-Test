import React from "react";
import "./App.css"
import "bootstrap/dist/css/bootstrap.css";
import { ShowContextProvider } from "./context/context";
import HomePage from "./component/HomePage";
import { Route, Routes } from "react-router-dom";
import ShowSummary from "./component/ShowSummary";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const App = () =>
{
return(
<>
<ToastContainer position="top-right"/>
<ShowContextProvider>
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/show-details" element={<ShowSummary/>}/>
    </Routes>
    {/* <div className="bg-image">
    <HomePage/>
    </div> */}
    
</ShowContextProvider>
</>
)
}
export default App;