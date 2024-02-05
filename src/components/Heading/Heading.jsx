import style from './heading.module.scss';
import NavMenu from '@components/NavMenu/NavMenu';
import { Link, useLocation } from "react-router-dom";
import UseResize from '../../Hooks/UseRisize';
import Burger from '../Burger/Burger'
export default function Heading(){
    const location = useLocation();
    const {isScreenLg:isDesktop} = UseResize();
    return ( 
        <header className={style.site__heading + (!isDesktop?(" " + style['heading__with-burger']):"")}>
            <div className={style.container}>
            <div className={style.heading__logo}><Link to="/" className={style.logo__link} >Aleksandr Schukin</Link></div>
                { isDesktop &&
                    <>
                        <NavMenu className={style.heading__middle}/>
                        <Link className={style.heading__button + (location.pathname === '/contact'?(" "+style.button__active):"")} to="/contact">Контакты</Link>
                    </>
                }
                { !isDesktop &&
                    <Burger />
                }
            </div>
        </header>
    );
}
