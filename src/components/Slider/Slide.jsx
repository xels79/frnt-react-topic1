import propTypes from 'prop-types';
import style from './slider.module.scss';
export default function Slide({src}){
    // console.log(src);
    return (<div className={style.slide}>
        <img className={style.slide__img} src={src} />
    </div>)
}

Slide.propTypes = {
    src:propTypes.string.isRequired
};