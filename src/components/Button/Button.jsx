import propTypes,{ string } from 'prop-types';

export default function Button({ onClick, className, label, type = "button" }){
    return (
        <button onClick={onClick} className={className} type={type}>{label}</button>
    );
}

Button.propTypes = {
    onClick: propTypes.func.isRequired,
    className: string,
    label: propTypes.string.isRequired,
    type:string
};