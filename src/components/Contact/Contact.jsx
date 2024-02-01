import { bool, func } from 'prop-types';
import style from './contact.module.scss';
export default function Contact({isVisible = true, closeClick = ()=>{}}){
    return (
        <>
            {isVisible ?
                <div 
                    className={style.modal}
                    onClick={closeClick}
                >
                    <div onClick={(event)=>event.stopPropagation()} className={style.modal__body}></div>
                </div>
                :''
            }
        </>
    );
}

Contact.propTypes = {
    isVisible:  bool,
    closeClick:func,
};