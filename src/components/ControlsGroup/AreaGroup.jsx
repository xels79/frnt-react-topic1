import propTypes,{ string } from 'prop-types';
export default function AreaGroup({
        name,
        id,
        labelText,
        groupClass='',
        labelClass = '',
        controlClass = '',
        errorMessage="Ошибка",
        fieldOptons={},
        uForm
    }){
    const {
        register,
        formState: { errors },
    } = uForm;
    
    return (
        <div className={groupClass}>
            <label htmlFor={id} className={labelClass}>{labelText}</label>
            <textarea id={id} name={name} className={controlClass} rows="4" {...register(name, fieldOptons)}/>
            {errors[name] && <p role="alert">{errors[name].message?errors[name].message:errorMessage}</p>}
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
    uForm: propTypes.object.isRequired,
    errorMessage:string,
    fieldOptons: propTypes.object
}