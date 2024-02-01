import Heading from '@components/Heading/Heading';
import {Outlet} from "react-router-dom";
export default function Layout() {
    return (
        <>
            <Heading />
            <Outlet />
        </>
    )
}