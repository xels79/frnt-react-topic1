import { bool, func } from 'prop-types';
import style from './contact.module.scss';
import buttStyle from '../../pages/Home/home.module.scss'
import InputGroup from '../ControlsGroup/InputGroup';
import AreaGroup from '../ControlsGroup/AreaGroup';
import Button from '../Button/Button';
export default function Contact({isVisible = true, closeClick = ()=>{}}){
    return (
        <>
            {isVisible ?
                <div 
                    className={style.modal}
                >
                    <form onClick={(event)=>event.stopPropagation()} className={style.modal__body}>
                        <div className={style.modal__heading}>
                            <div className={style["modal__heading-label"]}></div>
                            <div className={style["modal__heading-button"]} onClick={closeClick}></div>
                        </div>
                        <div className={style.modal__content}>
                            <div className={style.control__horizont}>
                                <InputGroup
                                        name="email"
                                        id="email-input"
                                        labelText="Email"
                                        groupClass={style.control__group}
                                        labelClass={style.control__label}
                                        controlClass={style.control__input}
                                    />
                                <InputGroup
                                    name="phone"
                                    id="phone-input"
                                    labelText="Телефон"
                                    groupClass={style.control__group}
                                    labelClass={style.control__label}
                                    controlClass={style.control__input}
                                />
                            </div>
                            <AreaGroup
                                    name="message"
                                    id="message-input"
                                    labelText="Сообщение"
                                    groupClass={style.control__group}
                                    labelClass={style.control__label}
                                    controlClass={style.control__input}
                            />
                        </div>
                        <div className={style.modal__footer}>
                            <Button onClick={()=>{}} label='Отправитть' className={style.info__button+' '+buttStyle.info__button}/>
                        </div>
                    </form>
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