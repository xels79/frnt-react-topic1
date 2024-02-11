import style from './planet.module.scss';
import propTypes from 'prop-types';
import { useContext } from 'react';
import LayoutContext from '@/contexts/LayoutContext';
import PlanetCard from './PlanetCard';
import Dialog from '../Dialog/Dialog';
export default function Planet({data, id}){
    const {showBunner} = useContext(LayoutContext);
    return (
        <div className={style.planet} onClick={()=>showBunner(<Dialog header={"Планета: " + data.name} body={<PlanetCard data={data} planetId={id} />} />)}>
            <div className={style.planet__heading}>Планета: <b>"{data.name}"</b></div>
            <div className={style.planet__content}>
                <div className={style["planet__text-line"]}><span>Диаметр:</span>{data.diameter} {data.diameter!=="unknown"?"км.":""}</div>
                <div className={style["planet__text-line"]}><span>Гравитация:</span>{data.gravity}</div>
            </div>
        </div>
    );
}
Planet.propTypes = {
    data: propTypes.object.isRequired,
    id: propTypes.number.isRequired
}