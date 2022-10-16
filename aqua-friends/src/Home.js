import React from "react"
import { useNavigate } from "react-router-dom"
import "./Home.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (props) {
    
    let navigate = useNavigate();
    const goToProfile = () => {
        let path = "/profile";
        navigate(path);
    }
    const goToSignIn = () => {
        let path = "/auth";
        navigate(path);
    }
    
    return (
        <div class="content">
            <div class="hero-unit">
                <h1>To jest strona główna</h1>
                <p>
                    Kiedyś może będzie tutaj coś więcej, ale na razie niech tak zostanie. <br/>
                    Jedyne co Ci jest na ten moment potrzebne to te przyciski:
                </p>
                <div class="columnLeft">
                    <button class="btn btn-primary btn-large" onClick={goToProfile}>
                        Profil
                    </button>
                </div>
                <div class="columnRight">
                    <button class="btn btn-primary btn-large" onClick={goToSignIn}>
                        Wyloguj
                    </button>
                </div>
            </div>
        </div>
    )
}