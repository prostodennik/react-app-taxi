import React from "react"

export const Reg = () => {
    return (
        <>
            <div>Регистрация</div>
                <forrm class="form-reg">
                    <label htmlFor="email">Email:</label>
                    <input id="email" type="email" name="email" size="28" />
                    <label htmlFor="name">Как вас зовут:</label>
                    <input id="name" type="text" name="name" size="28" />
                    <label htmlFor="password">Придумайте пароль:</label>
                    <input id="password" type="password" name="password" size="28" />
                </forrm>
                    <button>Зарегестрироваться</button>
        </>
    )
}