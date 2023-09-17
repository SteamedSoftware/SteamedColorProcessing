import * as React from 'react';
import {Outlet} from "react-router-dom";
import SteamedNav from "./SteamedNav";

function Main(){
    return(
        <>
            <SteamedNav/>
            <Outlet/>
        </>
    );
}
export default Main;
