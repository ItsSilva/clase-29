import { obtenerUsuarioEnSesion, logout } from './session.js';

const render = () => {
    const usuarioActivo = obtenerUsuarioEnSesion();

    // Importante para no perder nota.
    if (!usuarioActivo) {
        window.location.href = './index.html';
        return;
    };

    const usuarioActivoNombre = document.querySelector('#usuarioActivo');
    usuarioActivoNombre.innerHTML = 'Bienvenido ' + usuarioActivo.correo ;

    const cerrarSesion = document.querySelector('#cerrarSesion');
    cerrarSesion.addEventListener('click', () => {
        logout();
        window.location.href = './index.html';
    });

};
document.addEventListener('DOMContentLoaded', render);