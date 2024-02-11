import {object, func, string} from 'prop-types';
import style from './dialog.module.scss';
import { useContext } from 'react';
import LayoutContext from '@/contexts/LayoutContext';
export default function Dialog({header,body,footer,closeButton,clickOut}){
    const {hideBunner,setBunnerClick} = useContext(LayoutContext);
    setBunnerClick((e)=>{
        if (typeof(clickOut)==='function'){
            clickOut();
        }else{
            hideBunner();
        }
    });
    return (
    <div className={style.modal__body} onClick={(e)=>e.stopPropagation()}>
        <div className={style.modal__heading}>
            <div className={style["modal__heading-label"]}>{header}</div>
            <div className={style["modal__heading-button"]} onClick={()=>{
                if (typeof(closeButton)==='function'){
                    closeButton();
                }else{
                    hideBunner();
                }
            }}></div>
        </div>
        <div className={style.modal__content}>{body}</div>
        <div className={style.modal__footer}>{footer}</div>
    </div>
    );
}

Dialog.propTypes = {
    header:string,
    body:object.isRequired,
    footer:object,
    closeButton:func,
    clickOut:func
}