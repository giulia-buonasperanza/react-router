import { Link, Outlet } from "react-router-dom";
import LayoutNavbar from "./LayoutComponents/LayoutNavbar.jsx";
import LayoutFooter from "./LayoutComponents/LayoutFooter.jsx";



function PrimoLayout() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <LayoutNavbar />
            <main className="flex-grow-1 container py-4">
                <Outlet />
            </main>
            <LayoutFooter />
        </div>
    )
}
export default PrimoLayout