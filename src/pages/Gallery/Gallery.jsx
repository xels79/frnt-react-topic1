import { useEffect } from 'react'
import { func } from 'prop-types';
import style from  './gallery.module.scss';
import Slider from '@/components/Slider/Slider';
export default function Gallery() {

    useEffect(() => {
      // Update the document title using the browser API
      document.title = `Визитная карточка - Обо мне`;
    });  
    return (
        <div className={style.container}>
          <h2>Слайдер</h2>
          <Slider />
        </div>
);
  }
