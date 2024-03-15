import {BrowserRouter , Routes , Route , Navigate} from "react-router-dom";
import {Signup} from "./pages/Signup.jsx";
import {Signin} from "./pages/Signin.jsx";
import { Dashboard } from "./pages/Dasboard";



export function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Signin" element= {<Signin/>} />
        <Route path="/Dashboard" element={< Dashboard/>}/>
        <Route path="/" element={< Navigate to={"/Signin"}/>}/>
      </Routes>

    </BrowserRouter>
    
  )
}

export default App


