import propTypes,{ string } from 'prop-types';
import './heading.scss';
import NavMenu from '@components/NavMenu/NavMenu';
import Button from '@components/Button/Button';
export default function Heading(){
    
    return (
        <header className="heading">
            <div className="container"> 
                <div className="heading__logo">Left</div>
                <NavMenu className="heading__middle"/>
                <Button onClick={()=>console.log('click Contact')} className="heading__button" label="Контакты"/>
            </div>
        </header>
    );
}
