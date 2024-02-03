import foto from '../../assets/from-above-laptop-and-coffee.jpg'; 
import Button from '@components/Button/Button';
import { useEffect } from 'react'
import { func } from 'prop-types';
import style from  './about.module.scss';

export default function About({ openContactClick = ()=>{} }) {

    useEffect(() => {
      // Update the document title using the browser API
      document.title = `Визитная карточка - Обо мне`;
    });  
    return (
      <main className={style.site__main}>
        <div className={style.container}>
          <h2>About</h2>
        </div>
  </main>
);
  }
About.propTypes = {
    openContactClick: func
};