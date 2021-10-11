import React from "react" 


export const LogIn = () => {
    return (
        <>
            <>Войти</>
                <forrm class="form-reg">
                    <label htmlFor="email">Email:</label>
                    <input id="email" type="email" name="email" size="28" />
                    <label htmlFor="password">Password:</label>
                    <input id="password" type="password" name="password" size="28" />
                </forrm>
                    <button>Войти</button>
        </>
    )
}