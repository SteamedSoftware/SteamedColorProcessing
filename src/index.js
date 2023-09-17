import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Main';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider, useRouteError
} from "react-router-dom";
import QuadCharts from "./4ups";
import SteamedNav from "./SteamedNav";
import TimeReport from "./TimeReport";
import HomePage from "./HomePage";
import {Container} from "@mui/material";

function RouterError() {
    const error = useRouteError();
    console.error(error);

    return (
        <>
            <SteamedNav/>
            <Container>
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </Container>
        </>
    );
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        errorElement: <RouterError/>,
        children: [
            {
                children: [
                    {
                        path: "/SteamedColorProcessing/",
                        element: <HomePage/>
                    },
                    {
                        path: "/SteamedColorProcessing/4ups",
                        element: <QuadCharts/>
                    },
                    {
                        path: "/SteamedColorProcessing/timeReport",
                        element: <TimeReport/>
                    }
                ]
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
