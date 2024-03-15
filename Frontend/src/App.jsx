import Navbar from "./components/Navbar.jsx";
import { Outlet } from "react-router-dom";
// import {Signup} from "./pages/Signup.jsx"
import Footer from "./components/Footer.jsx"

export function App() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer />
    </>
    )
}

export default App


