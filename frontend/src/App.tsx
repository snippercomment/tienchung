import {BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import HomePage from "./pages/HomePage/HomePage"
import Introduce from "./pages/Introduce/Introduce"
import ChildVaccinationPage from "./pages/ChildVaccinationPage/ChildVaccinationPage"
import VaccinationSchedule from "./pages/VaccinationSchedule/VaccinationSchedule"
import VaccinePage from "./pages/VaccinePage/VaccinePage"



function App() {

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={ <HomePage/>} />
      <Route path="/gioi-thieu" element={ <Introduce/>} />
      <Route path="/tiem-chung-tre-em" element={<ChildVaccinationPage />} />
      <Route path="/tiem-chung-tre-em/lich-tiem" element={<VaccinationSchedule />} />
      <Route path="/tiem-chung-tre-em/vac-xin" element={<VaccinePage/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
