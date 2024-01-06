import React from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./Layout.jsx";
import Home from "./Home/Home.jsx";
import About from "./About/About.jsx";
import Contact from "./Contact/Contact .jsx";
import User from "./User/User.jsx";
import Error from "./Error/Error.jsx";

// Methode 1 To Create Router
// const router = createBrowserRouter([
//   {
//     path : '/' ,
//     element : <Layout/>,
//     children : [
//       {
//         path : "",
//         element : <Home/>
//       },{
//         path : "/about",
//         element : <About/>
//       },{
//         path: "/contact",
//         element : <Contact/>
//       }
//     ]
//   }
// ])

// Methode 2 to Create Router

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />  } errorElement={<Error/>} >
      <Route path='' element={<Home />} />,
      <Route path='/about' element={<About />}   />
      <Route path='/contact' element={<Contact />} />
      <Route path='/user/:username' element={<User />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
