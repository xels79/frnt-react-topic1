import { bool, func } from 'prop-types';
import style from './contact.module.scss';
import buttStyle from '../../pages/Home/home.module.scss'
import InputGroup from '../ControlsGroup/InputGroup';
import AreaGroup from '../ControlsGroup/AreaGroup';
import Button from '../Button/Button';
import { useForm } from "react-hook-form";
const onSubmit = (data) => alert(JSON.stringify(data));
const req = name=>{return {required:{value:true,message:`Поле "${name}" должно быть заполнено!`}}};
const pattern = (name,pattern,message)=>{return {pattern:{value:pattern,message:`Формат поля "${name}" - ${message}`}}}
export default function Contact({isVisible = true, closeClick = ()=>{}}){
    const uForm = useForm();
    const {
        handleSubmit,
    } = uForm;
    return (
        <>
            {isVisible ?
                <div 
                    className={style.modal}
                >
                    <form onClick={(event)=>event.stopPropagation()} onSubmit={handleSubmit(onSubmit)} className={style.modal__body}>
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
                                        uForm={uForm}
                                        fieldOptons={{...req("Email"),...pattern("Email",/^[^.][A-Z0-9._%+-]+@[A-Z0-9-]+\.{1}[A-Z]{2,4}$/i,"user@site.ru")}}
                                        />
                                <InputGroup
                                    name="phone"
                                    id="phone-input"
                                    labelText="Телефон"
                                    groupClass={style.control__group}
                                    labelClass={style.control__label}
                                    controlClass={style.control__input}
                                    uForm={uForm}
                                    fieldOptons={{...req("Телефон"),...pattern("Телефон",/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,"+0(000)000-0000")}}
                                />
                            </div>
                            <AreaGroup
                                    name="message"
                                    id="message-input"
                                    labelText="Сообщение"
                                    groupClass={style.control__group}
                                    labelClass={style.control__label}
                                    controlClass={style.control__input}
                                    uForm={uForm}
                                    fieldOptons={req("Сообщение")}
                            />
                        </div>
                        <div className={style.modal__footer}>
                            <Button type="submit" onClick={()=>{}} label='Отправитть' className={style.info__button+' '+buttStyle.info__button}/>
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