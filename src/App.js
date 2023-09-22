import React, { lazy, useEffect, useState } from "react";
import  ReactDOM  from "react-dom/client";
import image from "../assets/logo.png"
import "../index.css"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/userContext";

const About = lazy(() => import("./components/About"))


const App = () => {

    const [userInfo, setUserInfo] = useState();
    
    //authentication
    useEffect(()=> {
        const data = {
            name: "Abhishek Shukla",
        }

        setUserInfo(data.name);
    },[])

    return(
       <UserContext.Provider value={{loggedInUser: userInfo, setUserInfo}}>
         <div className="app">
            <Header />
            <Outlet />
        </div>
       </UserContext.Provider>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
            {
                path: "/",
                element: <Body />
            },

            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path:"/restaurants/:resId",
                element: <RestaurantMenu />
            }
        ]
    },
   
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)