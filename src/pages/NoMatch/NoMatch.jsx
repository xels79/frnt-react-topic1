import { Link } from "react-router-dom";
export default function NoMatch() {
    return (
        <div>
            <h2><b>404</b> - Здесь ничего нет.</h2>
            <p>
                <Link to="/">На главную</Link>
            </p>
        </div>
    );
}