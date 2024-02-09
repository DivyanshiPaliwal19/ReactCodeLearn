import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestrauMenu from "./Components/RestrauMenu";
import { createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom";
import UserContext from "./utils/UserContext";



//map,filter and reduce (video)
const AppLayout = () => {
    const [userName,setUserName]=useState(null);
    useEffect(()=>{
      const name=null;
      setUserName(name);
    },[])
    return (
    <UserContext.Provider value={{loggedIn:userName ,setUserName}}>
    <div className="app">
       <Header/>
       <Outlet/>
    </div>
    </UserContext.Provider>
    )
}

const AppRouter= createBrowserRouter([
    {
        path : "/",
        element: <AppLayout/>,
        children:[
            {
                path: "/about",
                element:<About/>
            },
            {
                path: "/contact",
                element:<Contact/>
            },
            {
                path: "/",
                element:<Body/>
            },
            {
                path: "/res/:resId", //: specify that it is dynamic it will change
                element:<RestrauMenu/>
            }
        ],
        errorElement: <Error/>
    },
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter}/>);