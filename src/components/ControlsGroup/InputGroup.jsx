import propTypes,{ string } from 'prop-types';
import { useForm } from "react-hook-form";
export default function InputGroup({
        name,
        id,
        labelText,
        groupClass='',
        labelClass = '',
        controlClass = '',
        inputType = 'text',
        errorMessage="Ошибка",
        fieldOptons={},
        uForm
    }){
    const {
        register,
        formState: { errors },
    } = uForm;
    console.log(name,errors);
    return (
        <div className={groupClass}>
            <label htmlFor={id} className={labelClass}>{labelText}</label>
            <input  id={id} className={controlClass} type={inputType} {...register(name, fieldOptons)}/>
            {errors[name] && <p role="alert">{errors[name].message?errors[name].message:errorMessage}</p>}
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
    inputType: string,
    uForm: propTypes.object.isRequired,
    errorMessage:string,
    fieldOptons: propTypes.object
}