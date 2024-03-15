import Navbar from "./components/Navbar.jsx";
import { Outlet } from "react-router-dom";

export function App() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    {/* <Footer /> */}
    </>
    )
}

export default App


