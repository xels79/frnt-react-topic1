import { Link,useLocation } from "react-router-dom"; 
import style from './navmenu.module.scss';
export default function NavMenu(){
    const location = useLocation();
    const items=[
        {
            lable:"На главную",
            route:"/"
        },
        {
            lable:"Галерея",
            route:"/gallery"
        },
        {
            lable:"Работа",
            route:"/work"
        },
        {
            lable:"Блог",
            route:"/blog"
        }

    ];
    return (
        <nav className={style.nav}>
            <ul className={style.nav__menu}>
                {items.map((item, index)=>
                    <li key={index} className={style.nav__item}>
                        <Link 
                            to={item.route}
                            className={style.nav__link + (location.pathname === item.route?(" "+style.link__active):"")}
                        >{item.lable}</Link>
                    </li>
                )}
            </ul>
        </nav>
    );
}