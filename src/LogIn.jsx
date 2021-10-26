import React, {Component} from "react"
import {connect} from 'react-redux'
import { Link, Redirect } from "react-router-dom"
import {authenticate} from './actions'
import './LogIn.css'

export class LogIn extends Component {
    authenticate = (event) => {
        event.preventDefault()
        const {email, password} = event.target;
        this.props.authenticate(email.value, password.value)
    }

    render() {
        return (
            <>
            {this.props.isLoggedIn ? (
        <Redirect to="/map" />
        ) : (
                <div className="login">
                    <form onSubmit={this.authenticate} className="form">
                        <div className="form__title">Войти</div>
                        <label className="form__email-lbl" htmlFor="email">Email</label>
                        <input className="input" id="email" type="email" name="email" placeholder="mail@mail.ru" size="28" />
                        <label className="form__pass-lbl" htmlFor="password">Пароль</label>
                        <input className="input" id="password" type="password" name="password" placeholder="*************" size="28" />
                        <div className="form__forget-pass">Забыли пароль?</div>
                        <input className="form__submit" type="submit" value="Войти"/> 
                    </form>
                    <div className="login__new">Новый пользователь? <Link to="/reg" className="login__new-btn">Регистрация</Link></div>
                </div>
        )}
            </>
        )
    }

}

export const LogInWithAuth = connect(
    (state) => ({isLoggedIn: state.auth.isLoggedIn}),
    { authenticate}
)(LogIn)
