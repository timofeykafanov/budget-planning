import './Auth.css';

function Auth() {
  return (
    <section className="auth">
      <h2 className="auth__title">Добро пожаловать в планировщик бюджета!</h2>
      <div className="auth__button-container auth__button-container_type_email">
        <button className="auth__button auth__button_type_login">Вход</button>
        <button className="auth__button auth__button_type_signin">Регистрация</button>
      </div>
      <div className="auth__button-container auth__button-container_type_google">
        <button className="auth__button auth__button_type_yandex">Войти через <span className='auth__string'>Яндекс</span></button>
        <button className="auth__button auth__button_type_google">Войти через <span className='auth__string'>Google +</span></button>
      </div>
    </section>
  )
}

export default Auth;