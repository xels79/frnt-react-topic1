import propTypes,{ string } from 'prop-types';

export default function Button(params){
    const {onClick, className, label} = params;
    console.log(onClick);
    return (
        <button onClick={onClick} className={className}>{label}</button>
    );
}

Button.propTypes = {
    onClick: propTypes.func.isRequired,
    className: string,
    label: string
};