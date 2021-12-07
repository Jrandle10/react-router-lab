import React from "react";
import { Link, Outlet } from 'react-router-dom'
import Home from "./Home";

const App = () => {
    return (
        <div>
          <nav>
            <Link to="/">Go to Home Page</Link> {" "}
            <Link to="/procedures">See Our Procedures</Link> {" "}
            <Link to="/contact">Contact Us!</Link>
          </nav>
          <div>
           <Outlet />
          </div>
        </div>
    );
}

export default App;
