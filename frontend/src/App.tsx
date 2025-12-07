import {BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import HomePage from "./pages/HomePage/HomePage"
import Introduce from "./pages/Introduce/Introduce"



function App() {

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={ <HomePage/>} />
      <Route path="/gioi-thieu" element={ <Introduce/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
