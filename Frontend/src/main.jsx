import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Profile from "./components/Profile.jsx";

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>

      {/* <Route path="" element={<Home />} /> */}
       <Route path="/profile" element={<Profile/>} />
      {/* <Route path="contact" element={<Contact />} /> */}
      {/* <Route path="sign-in" element={<SignIn />} /> */}
      {/* <Route path="sign-up" element={<SignUp />} /> */}
      {/* <Route path="add-todo" element={<Todo />} /> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
