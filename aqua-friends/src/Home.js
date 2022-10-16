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
    
    return (
        <div class="hero-unit">
            <h1>To jest strona główna</h1>
            <p>Kiedyś może będzie tutaj coś więcej, ale na razie niech tak zostanie</p>
            <p>
                <button class="btn btn-primary btn-large" onClick={goToProfile}>
                    Profil
                </button>
            </p>
        </div>
    )
}