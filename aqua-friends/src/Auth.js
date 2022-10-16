import React, {useState} from "react"
import { useNavigate } from "react-router-dom"

// eslint-disable-next-line import/no-anonymous-default-export
export default function (props) {
    let [authMode, setAuthMode] = useState("signin")

    const changeAuthModeToSignUp = () => {
        setAuthMode("signup")
    }

    const changeAuthModeToSignIn = () => {
        setAuthMode("signin")
    }

    const changeAuthModeToForgotPassword = () => {
        setAuthMode("forgotpassword")
    }

    let navigate = useNavigate();
    const routeChange = () => {
        let path = "/";
        navigate(path);
    }

    if (authMode === "signin") {
        return (
            <div className="Auth-form-container">
                <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Zaloguj się</h3>
                    <div className="text-center">
                    Nie masz konta?{" "}
                    <span className="link-primary" onClick={changeAuthModeToSignUp}>
                        Załóż konto
                    </span>
                    </div>
                    <div className="form-group mt-3">
                    <label>Adres email</label>
                    <input
                        type="email"
                        className="form-control mt-1"
                        placeholder="Wpisz email"
                    />
                    </div>
                    <div className="form-group mt-3">
                    <label>Hasło</label>
                    <input
                        type="password"
                        className="form-control mt-1"
                        placeholder="Wpisz hasło"
                    />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                    <button type="submit" className="btn btn-primary" onClick={routeChange}>
                        Prześlij
                    </button>
                    </div>
                    <div className="text-center">
                        Zapomniałeś{" "}
                        <span className="link-primary" onClick={changeAuthModeToForgotPassword}>
                        hasła?
                        </span>
                    </div>
                </div>
                </form>
            </div>
        )
    } else if (authMode === "signup") {
        return (
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Zarejestruj się</h3>
                    <div className="text-center">
                        Posiadasz konto?{" "}
                        <span className="link-primary" onClick={changeAuthModeToSignIn}>
                        Zaloguj się
                        </span>
                    </div>
                    <div className="form-group mt-3">
                        <label>Imię</label>
                        <input
                        type="text"
                        className="form-control mt-1"
                        placeholder="np. Tomasz"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Adres email</label>
                        <input
                        type="email"
                        className="form-control mt-1"
                        placeholder="Adres email"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Hasło</label>
                        <input
                        type="password"
                        className="form-control mt-1"
                        placeholder="Hasło"
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                        Prześlij
                        </button>
                    </div>
                    </div>
                </form>
            </div>
        )
    } else if (authMode === "forgotpassword") {
        return (
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Odzyskaj hasło</h3>
                    <div className="text-center">
                        Pamiętasz hasło?{" "}
                        <span className="link-primary" onClick={changeAuthModeToSignIn}>
                        Zaloguj się
                        </span>
                    </div>
                    <div className="form-group mt-3">
                        <label>Adres email</label>
                        <input
                        type="email"
                        className="form-control mt-1"
                        placeholder="Adres email"
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                        Wyślij email
                        </button>
                    </div>
                    <div className="text-center">
                        <span className="link-primary" onClick={changeAuthModeToSignUp}>
                        Zarejestruj
                        </span>
                        {" "}się
                    </div>
                    </div>
                </form>
            </div>
        )
    }
}