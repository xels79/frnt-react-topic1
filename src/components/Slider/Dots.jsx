import { useContext } from "react";
import { SliderContext } from "./Slider";
import style from './slider.module.scss';
export default function Dots(){
    const {
        curentSlide,
        slideCount,
        setSlide
    } = useContext(SliderContext);
    console.log(curentSlide);
    return <div className={style.slider__dots}>
        {[...Array(slideCount).keys()].map(index=>
            <a className={curentSlide===index?`${style.slider__dot} ${style.dot__acitve}`:style.slider__dot} key={`dot-${index}`} onClick={() => {setSlide(index)}}></a>
        )}
    </div>
}