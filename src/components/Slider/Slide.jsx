import propTypes from 'prop-types';
import style from './slider.module.scss';
export default function Slide({src}){
    // console.log(src);
    return (<div className={style.slide}>
        <div className={style['slide__img-block']}>
            <img className={style.slide__img} src={src} />
            <span className={style.slide__info}>Изображение с сайта <a className={style['slide__info-link']} href="https://unsplash.com/" target='_blank'>Unsplash.com</a></span>
        </div>  
    </div>)
}

Slide.propTypes = {
    src:propTypes.string.isRequired
};