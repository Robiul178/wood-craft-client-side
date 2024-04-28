import { Outlet } from "react-router-dom";
import NaveBar from "../Pages/NaveBar/NaveBar";
// import Footer from "../Pages/Footer/Footer";


const Root = () => {
    return (
        <div className="max-w-[1200px] mx-auto">
            <NaveBar />
            <Outlet />
            {/* <Footer /> */}
        </div>
    );
};

export default Root;