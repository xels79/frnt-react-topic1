import './heading.scss';
import NavMenu from '@components/NavMenu/NavMenu';
import { Link } from "react-router-dom";
export default function Heading(){
    return (
        <header className="site__heading">
            {/* <div className="container">  */}
                <div className="heading__logo">Aleksandr Schukin</div>
                <NavMenu className="heading__middle"/>
                <Link className='heading__button' to="/contact">Контакты</Link>
            {/* </div> */}
        </header>
    );
}
