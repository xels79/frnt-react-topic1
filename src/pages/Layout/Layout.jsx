import Heading from '@components/Heading/Heading';
import Footer from '@components/Footer/Footer';
import {Outlet} from "react-router-dom";
import Contact from '@components/Contact/Contact';
import { bool,func } from 'prop-types';
import style from  '@/style.module.scss';
import LayoutContext from '@/contexts/LayoutContext';
import { useState, useRef } from 'react';

export default function Layout({ showContact = false, closeContactClick=()=>{} }) {
    const [bunner, setBunner] = useState('');
    const bunnerClick = useRef(()=>{});
    return (
        <LayoutContext.Provider value={{
            showBunner:(something,clickCallBack)=>setBunner(something),
            hideBunner:()=>{setBunner('');bunnerClick.current=()=>{};},
            setBunnerClick:(callBack)=>bunnerClick.current = typeof(callBack)==='function'?callBack:()=>{}
        }}>
            <Heading />
            <main className={style.site__main}>
                <Outlet />
            </main>
            <Footer/>
            <Contact isVisible={showContact} closeClick={closeContactClick}/>
            {bunner && <div className={style.bunner} onClick={(e)=>bunnerClick.current(e)}><div className={style.bunner__message}>{bunner}</div></div>}
        </LayoutContext.Provider>
    )
}

Layout.propTypes = {
    showContact: bool,
    closeContactClick:func
};