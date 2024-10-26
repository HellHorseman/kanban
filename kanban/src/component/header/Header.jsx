import { useState } from "react";

function Header() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme((prev) => !prev);
    };

    return (
        <header className="header">
            <div className="container">
                <div className="header__block">
                    <div className={`header__logo ${isDarkTheme ? "_dark" : "_light"} _show`}>
                        <a href="#home" target="_self">
                            <img
                                src={isDarkTheme ? "images/logo_dark.png" : "images/logo.png"}
                                alt="logo"
                            />
                        </a>
                    </div>

                    <nav className="header__nav">
                        <a href="#popNewCard" className="header__btn-main-new _hover01">
                            Создать новую задачу
                        </a>

                        <a href="#user-set-target" className="header__user _hover02">
                            Ivan Ivanov
                        </a>

                        <div className="header__pop-user-set pop-user-set" id="user-set-target">
                            <p className="pop-user-set__name">Ivan Ivanov</p>
                            <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                            <div className="pop-user-set__theme">
                                <label>
                                    <p>Темная тема</p>
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                        name="checkbox"
                                        checked={isDarkTheme}
                                        onChange={toggleTheme}
                                    />
                                </label>
                            </div>
                            <button type="button" className="_hover03">
                                <a href="#popExit">Выйти</a>
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
