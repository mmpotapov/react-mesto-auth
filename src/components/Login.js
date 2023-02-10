import { Navigate } from "react-router-dom";


function Login(props) {

  return props.loggedIn ? (<Navigate to="/" replace />) : (
    <main className="content">
      <section className="unauthorized" aria-label="Вход">
        <form className="unauthorized__form login-form" name="login-form">
          <h2 className="login-form__header">Вход</h2>
          <input
            className="login-form__input"
            type="email"
            name="email"
            id="email-input"
            placeholder="Email" />
          <input
            className="login-form__input"
            type="password"
            name="password"
            id="password-input"
            placeholder="Пароль" />
            <button type="submit" className="login-form__submit">Войти</button>
        </form>
      </section>
    </main>
  )
}

export default Login;
