import propTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';
import style from './planetcard.module.scss';
async function getFieldData(url, fieldName){
    return (await (fetch(url).then(answer=>answer.json()).then(result=>result[fieldName])));
}
export default function PlanetDetails({residents,planetId, fieldName}){
    const [person,setPerson] = useState([]);
    const request = useRef(null);
    useEffect(()=>{
        if (!request.current){
            request.current = residents.map(url=>new Promise(async resolve=>resolve(await getFieldData(url, fieldName))))
            Promise.all(request.current).then(fieldsContent=>setPerson(fieldsContent));
        }
    },[]);
    return (
        <div>
            {person.length
                ?person.map((fieldContent,index)=>(<div key={`${fieldName}-${planetId}-${index}`}><span>{fieldContent}</span></div>))
                :<span className={style.loader}></span>
            }
        </div>
    );
}
PlanetDetails.propTypes = {
    residents:propTypes.arrayOf(propTypes.string).isRequired,
    planetId:propTypes.number.isRequired,
    fieldName:propTypes.string.isRequired
}