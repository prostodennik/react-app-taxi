import React from "react"
import './LogIn.css'

export const LogIn = (props) => {
    return (
        <>
            <div className="login">
                <form className="form">
                    <div className="form__title">Войти</div>
                    <label className="form__email-lbl" htmlFor="email">Email</label>
                    <input className="input" id="email" type="email" name="email" placeholder="mail@mail.ru" size="28" />
                    <label className="form__pass-lbl" htmlFor="password">Пароль</label>
                    <input className="input" id="password" type="password" name="password" placeholder="*************" size="28" />
                    <div className="form__forget-pass">Забыли пароль?</div>
                    <input className="form__submit" type="submit" value="Войти" onClick={() => { props.navigateTo("map"); }} />
                </form>
                <div className="login__new">Новый пользователь? <button onClick={() => { props.navigateTo("reg"); }} className="login__new-btn">Регистрация</button></div>
            </div>
        </>
    )
}
