// Funcion para registrar un usuario

const USUARIOS_KEY = 'usuarios';
const USUARIOS_ACTIVO_KEY = 'usuario-activo';

const obtenerUsuarios = () => {
    const usuarios = localStorage.getItem(USUARIOS_KEY);

    if (!usuarios) {
        return [];
    }

    return JSON.parse(usuarios);
};

// Contrasena
export const registrar = (correo, contrasena, confirmarContrasena) => {
    if (contrasena !== confirmarContrasena){
        throw new Error('Las contraseñas no coinciden');
    }

// Correo
    const usuarios = obtenerUsuarios();

    for (const usuario of usuarios) {
        if (usuario.correo === correo) {
            throw new Error('El correo ya está registrado');
        };
    };

// Registrar usuario
    usuarios.push({
        id: new Date().getTime(),
        correo: correo,
        contrasena: contrasena,
        favoritos: []
    })

// Guardar usuario (actualizar el local storage)
    localStorage.setItem(USUARIOS_KEY, JSON.stringify(usuarios));
};

// Funcion para el login de un usuario en el sistema.
export const login = (correo, contrasena) => {
    const usuarios = obtenerUsuarios();
    for(const usuario of usuarios) {
        if (usuario.correo === correo && usuario.contrasena === contrasena) {
            localStorage.setItem(USUARIOS_ACTIVO_KEY, usuario.id);
            return usuario;
        };
    }

    throw new Error('Correo y/o contraseña incorrectos');
};

// Funcion para obtener el usuario en sesion y redirecciona al usuario a la pagina de inicio de sesion si no hay un usuario en sesion.
export const obtenerUsuarioEnSesion = () => {
    const usuarioActivo = localStorage.getItem(USUARIOS_ACTIVO_KEY);

    if (!usuarioActivo) {
        return null;
    }

    const usuarios = obtenerUsuarios();
    for(const usuario of usuarios){
        if (usuario.id === parseInt(usuarioActivo)){
            return usuario;
        }
    }

    return null;
};
export const logout = () => {
    localStorage.removeItem(USUARIOS_ACTIVO_KEY);
};