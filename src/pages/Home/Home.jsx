import style from './home.module.scss';
import foto from '../../assets/desk-arrangement-with-coffee-high-angle.jpg';
import Button from '@components/Button/Button';
import { func } from 'prop-types';

export default function Home({ openContactClick = ()=>{} }) {
    
    return (
        <main className={style.site__main}>
            {/* <div className={"container " + style.container}> */}
                <div className={style.main__info}>
                    <span className={style.main__rectangle}></span>
                    <p className={style.info__heading}>Меня зовут Александр,</p>
                    <p className={style.info__heading}>я веб разработчик</p>
                    <p className={style.info__secondary}>Я создаю высокопроизводительные, красивые веб-сайты, которые ориентированы на конверсию, соответствуют бренду и удобны для людей.</p>
                    <Button onClick={openContactClick} label="Связаться со мной" className={style.info__button} />
                </div>
                <img src={foto} className={style.main__img}/>
            {/* </div> */}
        </main>
    );
}

Home.propTypes = {
    openContactClick: func
};