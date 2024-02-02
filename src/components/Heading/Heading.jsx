import './heading.scss';
import NavMenu from '@components/NavMenu/NavMenu';
import { Link, useLocation } from "react-router-dom";
export default function Heading(){
    const location = useLocation();
    return (
        <header className="site__heading">
            {/* <div className="container">  */}
                <div className="heading__logo"><Link to="/" className="logo__link" >Aleksandr Schukin</Link></div>
                <NavMenu className="heading__middle"/>
                <Link className={'heading__button' + (location.pathname === '/contact'?" button__active":"")} to="/contact">Контакты</Link>
            {/* </div> */}
        </header>
    );
}
