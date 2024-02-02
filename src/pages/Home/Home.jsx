import style from './home.module.scss';
import foto from '../../assets/from-above-laptop-and-coffee.jpg'; 
import Button from '@components/Button/Button';
import { useEffect } from 'react'
import { func } from 'prop-types';

export default function Home({ openContactClick = ()=>{} }) {
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `Визитная карточка - Главная`;
      });  
  
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
                <div className={style['main__img-cont']}>
                    <img src={foto} className={style.main__img}/>
                    <span className={style.img__copyright}>Изображение от <a target='_blank' rel="noreferrer" href="https://ru.freepik.com/free-photo/from-above-laptop-and-coffee_1891559.htm#query=%D0%BD%D0%BE%D1%83%D1%82%D0%B1%D1%83%D0%BA%20%D0%BA%D0%BE%D1%84%D1%84%D0%B5&position=0&from_view=search&track=ais&uuid=054b0fa2-677e-4200-8045-3cb6c3357876">Freepik</a></span>
                </div>
            {/* </div> */}
        </main>
    );
}

Home.propTypes = {
    openContactClick: func
};