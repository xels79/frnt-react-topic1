import Heading from '@components/Heading/Heading';
import Footer from '@components/Footer/Footer';
import {Outlet} from "react-router-dom";
import Contact from '@components/Contact/Contact';
import { bool,func } from 'prop-types';

export default function Layout({ showContact = false, closeContactClick=()=>{} }) {
    
    return (
        <>
            <Heading />
            <Outlet />
            <Footer/>
            <Contact isVisible={showContact} closeClick={closeContactClick}/>
        </>
    )
}

Layout.propTypes = {
    showContact: bool,
    closeContactClick:func
};