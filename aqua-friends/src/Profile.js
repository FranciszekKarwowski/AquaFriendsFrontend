import React from "react"
import "./Profile.css"
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom"

// eslint-disable-next-line import/no-anonymous-default-export
export default function (props) {

    let navigate = useNavigate();
    const routeGoHome = () => {
        let path = "/";
        navigate(path);
    }

    return (
        <div class="content">
            <h1>Profil użytkownika</h1>
            <div class="leftColumn">
                <Form>
                    <Form.Group controlId="formGridName">
                        <Form.Label class="form">Imię</Form.Label>
                        <Form.Control type="email" placeholder="Jan" />
                    </Form.Group>
                    <Form.Group controlId="formGridEmail">
                        <Form.Label class="form">Email</Form.Label>
                        <Form.Control type="email" placeholder="jan.kowalski@gmail.com" />
                    </Form.Group>
                </Form>

                <button type="submit" className="btn btn-primary" onClick={routeGoHome}>
                    Zapisz
                </button>
            </div>
            <div class="rightColumn">
                <Form>
                    <Form.Group controlId="formGridSurname">
                        <Form.Label class="form">Nazwisko</Form.Label>
                        <Form.Control type="email" placeholder="Kowalski" />
                    </Form.Group>
                    <Form.Group controlId="formGridSurname">
                        <Form.Label class="form">Jakieś ustawienie</Form.Label>
                        <Form.Control type="email" placeholder="Nwm" />
                    </Form.Group>
                </Form>

                <button type="cancel" className="btn btn-primary" onClick={routeGoHome}>
                    Powrót
                </button>
            </div>
        </div>
    );
}