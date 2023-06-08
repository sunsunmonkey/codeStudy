import { Buttons } from "./Pages/Buttons";
import { Button } from "antd";
import { Navigate } from "react-router-dom";
import User from "./Pages/User";
import Bianliang from "./Pages/Bianliang";
// import Selfjump from "./Pages/Selfjump";
import React from 'react'
const  Selfjump = React.lazy(() => import("./Pages/Selfjump"))
const routes = [
    {
        path: "/",
        element: <Buttons>la</Buttons>
    }, {
        path: "/home",
        element: <Buttons>home</Buttons>,
        children: [
            {
                path: "/home/user",
                element: <User></User>

            }
        ]

    },
    {
        path: "/lalala",
        element: <Navigate to="/home"></Navigate>
    }, {
        path: "/params/:id/:name",
        element: <Bianliang></Bianliang>
    }, {
        //直接这样后面就可以加query参数
        path: "/query",
        element: <Bianliang></Bianliang>
    }, {
        path: "self",
        element:<Selfjump></Selfjump>
    }, {
        path: "*",
        element: <h1>Not Found</h1>
    },


]

export default routes;