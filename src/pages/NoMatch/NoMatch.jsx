import { Link } from "react-router-dom";
import { useEffect } from 'react'
import style from '@/style.module.scss'; 
export default function NoMatch() {
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `Визитная карточка - Не найдено`;
    });  
    return (
        <main className={style.site__main}>
            <div className={style.container}>
                <h2><b>404</b> - Здесь ничего нет.</h2>
                <p>
                    <Link to="/">На главную</Link>
                </p>
            </div>
        </main>
    );
}