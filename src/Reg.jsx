import React from "react"
import './Reg.css'

export const Reg = (props) => {
    return (<>
        <div className="login">
            <form className="form">
                <div className="form__title">Регистрация</div>
                <label className="form__lbl" htmlFor="email">Email*</label>
                <input className="input" id="email" type="email" name="email" placeholder="mail@mail.ru" size="28" />
                <label className="form__lbl" htmlFor="username">Как вас зовут?*</label>
                <input className="input" id="username" type="text" name="username" placeholder="Петр Александрович" size="60" />
                <label className="form__lbl" htmlFor="password">Придумайте пароль*</label>
                <input className="input" id="password" type="password" name="password" placeholder="*************" size="28" />
                <input className="form__submit" type="submit" value="Зарегистрироваться" />
            </form>
            <div className="login__new">Уже зарегистрированы? <button onClick={() => { props.navigate("login"); }}  className="login__new-btn">Войти</button></div>
        </div>
    </>
    )
}