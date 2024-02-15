import logotype from '/assets/img/logo_light.png'

export default function header() {
  return (
    <header>
        <div className="container">
            <div className="header-items">
                <div className="header-item">
                    <img src={logotype} alt="" className="header-logo"/>
                </div>
                <div className="header-menu">
                    <a href="" className="header-link">Главная</a>
                    <a href="" className="header-link">О нас</a>
                    <a href="" className="header-link">Где нас найти ?</a>
                    <a href="" className="header-link">Каталог</a>
                </div>
                <div className="header-buttons">
                    <a href="" className="header-btn-auth">Вход</a>
                    <a href="" className="header-btn-reg">Регистрация</a>
                </div>
            </div>
        </div>
    </header>
  );
}
