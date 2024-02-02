import { Link } from "react-router-dom";
import { useEffect } from 'react'
export default function NoMatch() {
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `Визитная карточка - Не найдено`;
      });  
    return (
        <div style={{flex:1}}>
            <h2><b>404</b> - Здесь ничего нет.</h2>
            <p>
                <Link to="/">На главную</Link>
            </p>
        </div>
    );
}