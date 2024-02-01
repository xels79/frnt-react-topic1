import { Link } from "react-router-dom"; 
export default function NavMenu(){
    const items=[
        {
            lable:"На главную",
            route:"/"
        },
        {
            lable:"Обо мне",
            route:"/about"
        }

    ];
    return (
        <nav className="nav">
            <ul className="nav__menu">
                {items.map((item, index)=>
                    <li key={index} className="nav__item">
                        <Link to={item.route} className="nav__link">{item.lable}</Link>
                    </li>
                )}
            </ul>
        </nav>
    );
}