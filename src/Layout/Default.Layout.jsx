import React from "react";

import Navbar from "../components/Navbar/Navbar.component";
import HomePage from "../Pages/HomePage";
import Plays from "../Pages/Plays.Page";

const DefaultLayout =(props) =>{
    return(
        <div>
            <Navbar />
            
            {props.children}
        </div>

    );
};
export default DefaultLayout;