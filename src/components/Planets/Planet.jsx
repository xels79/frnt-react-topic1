import style from './planet.module.scss';
import propTypes from 'prop-types';
export default function Planet({data}){
    return (
        <div className={style.planet}>
            <div className={style.planet__heading}>Планета: <b>"{data.name}"</b></div>
            <div className={style.planet__content}>
                <div className={style["planet__text-line"]}><span>Имя:</span>{data.name}</div>
                <div className={style["planet__text-line"]}><span>Диаметр:</span>{data.diameter} {data.diameter!=="unknown"?"км.":""}</div>
                <div className={style["planet__text-line"]}><span>Гравитация:</span>{data.gravity}</div>
                <div className={style["planet__text-line"]}><span>Сутки:</span>{data.rotation_period}{data.rotation_period!=="unknown"?" ч.":""}</div>
                <div className={style["planet__text-line"]}><span>Период обращ.:</span>{data.orbital_period}{data.orbital_period!=="unknown"?" сут.":""}</div>
                <div className={style["planet__text-line"]}><span>Поверхность:</span>{data.terrain}</div>
                <div className={style["planet__text-line"]}><span>Население:</span>{data.population}</div>
            </div>
        </div>
    );
}
Planet.propTypes = {
    data: propTypes.object.isRequired
}