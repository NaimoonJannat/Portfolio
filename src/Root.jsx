import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Root = () => {
    return (
        <div>
            <div>
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Root;