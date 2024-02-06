import style from './planet.module.scss';
import propTypes from 'prop-types';
import Planet from './Planet';
export default function Planets({data}){
    return (
        <div className={style.planets}>
            {data.map((item, index)=><Planet key={`planet-${index}`} data={item} />)}
        </div>
    );
}
Planets.propTypes = {
    data: propTypes.array.isRequired
}