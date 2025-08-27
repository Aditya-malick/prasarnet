import React,{useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import AppRoutes from "./appRoutes";
import Sidebar from "./project/component/common/Sidebar";
import Header from "./project/component/common/Header";

function App() {
const [headerName,setHeaderName]=useState("");
  return (
    <>
      <BrowserRouter>
        <Header headerName={headerName} />
        <Sidebar setHeaderName={setHeaderName}/>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
