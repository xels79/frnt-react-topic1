import { Link,useLocation } from "react-router-dom"; 
export default function NavMenu(){
    const location = useLocation();
    const items=[
        {
            lable:"На главную",
            route:"/"
        },
        {
            lable:"Обо мне",
            route:"/about"
        },
        {
            lable:"Отзывы",
            route:"/reviews"
        },
        {
            lable:"Блог",
            route:"/blog"
        }

    ];
    return (
        <nav className="nav">
            <ul className="nav__menu">
                {items.map((item, index)=>
                    <li key={index} className="nav__item">
                        <Link 
                            to={item.route}
                            className={"nav__link" + (location.pathname === item.route?" link__active":"")}
                        >{item.lable}</Link>
                    </li>
                )}
            </ul>
        </nav>
    );
}