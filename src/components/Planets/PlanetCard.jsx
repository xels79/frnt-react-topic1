import { number,object } from 'prop-types';
import { useContext } from 'react';
import LayoutContext from '@/contexts/LayoutContext';
import style from './planetcard.module.scss';
import PlanetDetails from './PlanetDetails';
export default function PlanetCard({data,planetId}){
    const {hideBunner,setBunnerClick} = useContext(LayoutContext);
    setBunnerClick((e)=>hideBunner());
    return (
        <div className={style.planet__content}>
            <div className={style["planet__text-line"]}><span>Имя:</span>{data.name}</div>
            <div className={style["planet__text-line"]}><span>Диаметр:</span>{data.diameter} {data.diameter!=="unknown"?"км.":""}</div>
            <div className={style["planet__text-line"]}><span>Гравитация:</span>{data.gravity}</div>
            <div className={style["planet__text-line"]}><span>Сутки:</span>{data.rotation_period}{data.rotation_period!=="unknown"?" ч.":""}</div>
            <div className={style["planet__text-line"]}><span>Период обращ.:</span>{data.orbital_period}{data.orbital_period!=="unknown"?" сут.":""}</div>
            <div className={style["planet__text-line"]}><span>Поверхность:</span>{data.terrain}</div>
            <div className={style["planet__text-line"]}><span>Население:</span>{data.population}</div>
            {
                data.residents.length>0 &&
                    <div className={`${style["planet__text-line"]} ${style["planet__text-line-flex"]}`}>
                        <span>Персонажи:</span>
                        <PlanetDetails residents={data.residents} planetId={planetId} fieldName="name"/>
                    </div>
            }
            {
                data.films.length>0 &&
                    <div className={`${style["planet__text-line"]} ${style["planet__text-line-flex"]}`}>
                        <span>Фильмы:</span>
                        <PlanetDetails residents={data.films} planetId={planetId} fieldName="title"/>
                    </div>
            }
        </div>
);
}
PlanetCard.propTypes = {
    planetId:number.isRequired,
    data:object.isRequired
};