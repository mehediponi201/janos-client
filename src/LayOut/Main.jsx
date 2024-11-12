import { Outlet } from "react-router-dom";
import Navbar from "../SharedKey/Navbar";
import Footer from "../SharedKey/Footer";

const Main = () => {
    return (
        <div> 
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;