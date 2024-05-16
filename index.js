import { login } from './session.js';

const render = () => {
    const loginForm = document.getElementById('login');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const correo = e.target.correo.value;
        const contrasena = e.target.contrasena.value;

// Funcion para registrar un usuario en el sistema y redirigir al usuario a la pagina de inicio de sesion 
// si el registro fue exitoso o mostrar un mensaje de error si el registro no fue exitoso.
        try {
            login(correo, contrasena);
            window.location.href = './landing.html';
        } catch (error) {
            alert(error.message);
        };
    });
};
document.addEventListener('DOMContentLoaded', render);