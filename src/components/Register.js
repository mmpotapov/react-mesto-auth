function Register() {

  return (
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
        <p className="unauthorized__sign">Уже зарегистрированы? <a className="unauthorized__login" href="#0">Войти</a></p>
      </section>
    </main>
  )
}

export default Register;
