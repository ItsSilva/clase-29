import { registrar } from './session.js';

const render = () => {
    const registro = document.getElementById('registro');

    registro.addEventListener('submit', (e) => {
        e.preventDefault();

        const correo = e.target.correo.value;
        const contrasena = e.target.contrasena.value;
        const confirmarContrasena = e.target.confirmarContrasena.value;

// Funcion para registrar un usuario en el sistema y redirigir al usuario a la pagina de inicio de sesion 
// si el registro fue exitoso o mostrar un mensaje de error si el registro no fue exitoso.
        try {
            registrar(correo, contrasena, confirmarContrasena);
            alert('Usuario registrado exitosamente')
            window.location.href = './index.html';
        } catch (error) {
            alert(error.message);
        };
    });
};
document.addEventListener('DOMContentLoaded', render);