import React, {Component} from "react"
import { withAuth } from "./AuthContext"
import './LogIn.css'

export class LogIn extends Component {
    goToMap = () => {
        this.props.navigate("map")
    }

    goToReg = () => {
        this.props.navigate("reg")
    }

    autthentificate = (event) => {
        event.preventDefault()
        const {email, password} = event.target;
        this.props.logIn(email.value, password.value)
    }

    render() {
        return (
            <>
                <div className="login">
                    <form onSubmit={this.autthentificate} className="form">
                        <div className="form__title">Войти</div>
                        <label className="form__email-lbl" htmlFor="email">Email</label>
                        <input className="input" id="email" type="email" name="email" placeholder="mail@mail.ru" size="28" />
                        <label className="form__pass-lbl" htmlFor="password">Пароль</label>
                        <input className="input" id="password" type="password" name="password" placeholder="*************" size="28" />
                        <div className="form__forget-pass">Забыли пароль?</div>
                        <input className="form__submit" type="submit" onClick={this.goToMap} value="Войти"/>
                    </form>
                    <div className="login__new">Новый пользователь? <button onClick={this.goToReg} className="login__new-btn">Регистрация</button></div>
                </div>
            </>
        )
    }

}

export const LogInWithAuth = withAuth(LogIn)
