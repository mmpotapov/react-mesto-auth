import { Link } from 'react-router-dom'
import { Navigate } from "react-router-dom";


function Register(props) {
  return props.loggedIn ? (<Navigate to="/" replace />) : (
    <main className="content">
      <section className="unauthorized" aria-label="Регистрация">
        <form className="unauthorized__form registration-form" name="registration-form">
          <h2 className="registration-form__header">Регистрация</h2>
          <input
            className="registration-form__input"
            type="email"
            name="email"
            id="email-input"
            placeholder="Email" />
          <input
            className="registration-form__input"
            type="password"
            name="password"
            id="password-input"
            placeholder="Пароль" />
            <button type="submit" className="registration-form__submit">Зарегистрироваться</button>
        </form>
        <p className="unauthorized__sign">Уже зарегистрированы? <Link className="unauthorized__login" to="/sign-in">Войти</Link></p>
      </section>
    </main>
  )
}

export default Register;
