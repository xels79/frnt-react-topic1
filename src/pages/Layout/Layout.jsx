import Heading from '@components/Heading/Heading';
import Footer from '@components/Footer/Footer';
import {Outlet} from "react-router-dom";
import Contact from '@components/Contact/Contact';
import { bool,func } from 'prop-types';
import style from  '@/style.module.scss';
import LayoutContext from '@/contexts/LayoutContext';
import { useState, useEffect } from 'react';

export default function Layout({ showContact = false, closeContactClick=()=>{} }) {
    const [bunner, setBunner] = useState('');
    const [height, setHeight] = useState(0);
    useEffect(()=>{
        // setHeight(window.innerHeight);
        // document.addEventListener('resize', (e)=> setHeight(e.target.outerHeight));
    });
    return (
        <LayoutContext.Provider value={{
            showBunner:txt=>setBunner(txt),
            hideBunner:()=>setBunner('')
        }}>
            <Heading />
            <main className={style.site__main}>
                <Outlet />
            </main>
            <Footer/>
            <Contact isVisible={showContact} closeClick={closeContactClick}/>
            {bunner && <div className={style.bunner}><div className={style.bunner__message}>{bunner}</div></div>}
        </LayoutContext.Provider>
    )
}

Layout.propTypes = {
    showContact: bool,
    closeContactClick:func
};