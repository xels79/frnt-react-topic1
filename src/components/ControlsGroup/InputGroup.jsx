import propTypes,{ string } from 'prop-types';
export default function InputGroup({name,id,labelText,groupClass='',labelClass = '',controlClass = '', inputType = 'text'}){
    return (
        <div className={groupClass}>
            <label htmlFor={id} className={labelClass}>{labelText}</label>
            <input id={id} name={name} className={controlClass} type={inputType}/>
        </div>
    );
}

InputGroup.propTypes = {
    name: propTypes.string.isRequired,
    id: propTypes.string.isRequired,
    labelText: propTypes.string.isRequired,
    labelClass: string,
    controlClass: string,
    groupClass: string,
    inputType: string
}