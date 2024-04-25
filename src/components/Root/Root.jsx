import { Outlet } from "react-router-dom";
import NaveBar from "../Pages/NaveBar/NaveBar";


const Root = () => {
    return (
        <div className="max-w-[1200px] mx-auto">
            <NaveBar />
            <Outlet />
        </div>
    );
};

export default Root;