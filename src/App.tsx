
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router";
import MainMenu from './components/MainMenu';
import AboutUs from './components/AboutUs';
import Contact from './components/Contaxct';
import KindOfCoffe from './components/KindOfCoffee';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainMenu/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/coffees" element={<KindOfCoffe/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
