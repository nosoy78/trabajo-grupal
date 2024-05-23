function validarFormulario(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores de los campos
    const usuario = document.getElementById('usuario').value;
    const contraseña = document.getElementById('contraseña').value;

    // Datos predeterminados para validación
    const usuarioCorrecto = "usuario123";
    const contraseñaCorrecta = "password123";

    // Validar los campos
    if (usuario === usuarioCorrecto && contraseña === contraseñaCorrecta) {
        // Redirigir a otra página si los datos son correctos
        window.location.href = "peliculas.html";
    } else {
        alert("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
    }
}