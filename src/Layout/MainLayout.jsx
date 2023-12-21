import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const MainLayout = () => {
    const {loading} = useContext(AuthContext)
    if (loading) {
        return <div className=" min-h-screen flex justify-center items-center">
            <span className="loading loading-ring loading-lg"></span>
        </div>
    }
    else
    return (
        <div className="bg-[#F9F9F9] ">
            <Navbar />
            <div className=" min-h-screen  ">
            <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;