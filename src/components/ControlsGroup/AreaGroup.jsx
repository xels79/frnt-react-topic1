import propTypes,{ string } from 'prop-types';
export default function AreaGroup({name,id,labelText,groupClass='',labelClass = '',controlClass = ''}){
    return (
        <div className={groupClass}>
            <label htmlFor={id} className={labelClass}>{labelText}</label>
            <textarea id={id} name={name} className={controlClass} rows="4"/>
        </div>
    );
}

AreaGroup.propTypes = {
    name: propTypes.string.isRequired,
    id: propTypes.string.isRequired,
    labelText: propTypes.string.isRequired,
    labelClass: string,
    controlClass: string,
    groupClass: string,
}