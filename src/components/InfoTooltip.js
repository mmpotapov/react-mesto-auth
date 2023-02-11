import successReg from '../images/successReg.svg'
import failedReg from '../images/failedReg.svg'

function InfoTooltip(props) {

  return (
    <div className={`popup popup_type_result ${props.isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <button type="button" className="popup__close" aria-label="Закрыть" onClick={props.onClose}></button>
        <div className="popup__notice">
          {props.isSuccess ? (
            <> <img className="popup__icon" src={successReg} alt={"Успех"} />
              <p className="popup__sign">Вы успешно зарегистрировались!</p>
            </>) : (
            <> <img className="popup__icon" src={failedReg} alt={"Ошибка"} />
              <p className="popup__sign">Что-то пошло не так! Попробуйте ещё раз.</p>
            </>)}
        </div>
      </div>
    </div>)
}
export default InfoTooltip;
