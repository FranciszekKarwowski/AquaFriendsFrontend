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
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="text-center">
                    Not registered yet?{" "}
                    <span className="link-primary" onClick={changeAuthModeToSignUp}>
                        Sign Up
                    </span>
                    </div>
                    <div className="form-group mt-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control mt-1"
                        placeholder="Enter email"
                    />
                    </div>
                    <div className="form-group mt-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control mt-1"
                        placeholder="Enter password"
                    />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                    <button type="submit" className="btn btn-primary" onClick={routeChange}>
                        Submit
                    </button>
                    </div>
                    <div className="text-center">
                        Forgot{" "}
                        <span className="link-primary" onClick={changeAuthModeToForgotPassword}>
                        password?
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
                    <h3 className="Auth-form-title">Sign Up</h3>
                    <div className="text-center">
                        Already registered?{" "}
                        <span className="link-primary" onClick={changeAuthModeToSignIn}>
                        Sign In
                        </span>
                    </div>
                    <div className="form-group mt-3">
                        <label>Full Name</label>
                        <input
                        type="text"
                        className="form-control mt-1"
                        placeholder="e.g Jane Doe"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                        type="email"
                        className="form-control mt-1"
                        placeholder="Email Address"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                        type="password"
                        className="form-control mt-1"
                        placeholder="Password"
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                        Submit
                        </button>
                    </div>
                    <div className="text-center">
                        Forgot{" "}
                        <span className="link-primary" onClick={changeAuthModeToForgotPassword}>
                        password?
                        </span>
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
                    <h3 className="Auth-form-title">Recover password</h3>
                    <div className="text-center">
                        Remember password?{" "}
                        <span className="link-primary" onClick={changeAuthModeToSignIn}>
                        Sign In
                        </span>
                    </div>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                        type="email"
                        className="form-control mt-1"
                        placeholder="Email Address"
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                        Send email
                        </button>
                    </div>
                    <div className="text-center">
                        <span className="link-primary" onClick={changeAuthModeToSignUp}>
                        Create
                        </span>
                        {" "}account
                    </div>
                    </div>
                </form>
            </div>
        )
    }
}