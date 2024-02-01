import propTypes,{ string } from 'prop-types';

export default function Button({ onClick, className, label }){
    return (
        <button onClick={onClick} className={className}>{label}</button>
    );
}

Button.propTypes = {
    onClick: propTypes.func.isRequired,
    className: string,
    label: string
};