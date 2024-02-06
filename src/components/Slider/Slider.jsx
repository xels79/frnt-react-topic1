import { createContext, useState } from "react";
import SlidesParams from "./SlidesParams";
import Dots from "./Dots";
import Slide from "./Slide";
import style from './slider.module.scss';
import arr_l from '@/assets/arr_l.gif';
import arr_r from '@/assets/arr_r.gif';
export const SliderContext = createContext();
export default function Slider(){
    const [curentSlide, setCurenSlide] = useState(0);
    console.log('slider');
    return (
        <SliderContext.Provider value={{
            curentSlide:curentSlide,
            slideCount:SlidesParams.length,
            setSlide: slideNum => {console.log(slideNum);setCurenSlide(slideNum)}

        }}>
            <div className={style.slider__block}>
                <div className={style.slider__container}>
                    <a className={style.slider__arrow} onClick={()=>setCurenSlide(!curentSlide?(SlidesParams.length-1):(curentSlide-1))}>
                        <img src={arr_l}/>
                    </a>
                    <div className={style.slider}>
                        <div className={style.slides} style={{transform: `translateX(-${curentSlide*100}%)`}}>
                            {SlidesParams.map((item,index)=><Slide key={`${index}-slide-img`} src={item.src} />)}
                        </div>
                    </div>
                    <a className={style.slider__arrow} onClick={()=>setCurenSlide((curentSlide>SlidesParams.length-2?0:(curentSlide+1)))}>
                        <img src={arr_r} />
                    </a>
                </div>
                <div className={style.slider__controls}><Dots /></div>
            </div>
        </SliderContext.Provider>
    );
}
