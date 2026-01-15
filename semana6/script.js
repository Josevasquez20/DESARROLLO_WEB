// Obtener los elementos del formulario
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const edad = document.getElementById("edad");
const btnEnviar = document.getElementById("btnEnviar");
const form = document.getElementById("registroForm");

// Validar que el nombre tenga al menos 3 caracteres
function validarNombre() {
    if (nombre.value.length >= 3) {
        document.getElementById("errorNombre").textContent = ""; // Limpia error
        return true;
    } else {
        document.getElementById("errorNombre").textContent = "Debe tener al menos 3 letras.";
        return false;
    }
}

// Validar formato de correo con expresión regular
function validarCorreo() {
    const regex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/; // Patrón básico de correo
    if (regex.test(correo.value)) {
        document.getElementById("errorCorreo").textContent = "";
        return true;
    } else {
        document.getElementById("errorCorreo").textContent = "Correo inválido.";
        return false;
    }
}

// Validar contraseña: mínimo 8 caracteres, un número y un símbolo
function validarPassword() {
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
    if (regex.test(password.value)) {
        document.getElementById("errorPassword").textContent = "";
        return true;
    } else {
        document.getElementById("errorPassword").textContent = "Debe tener 8 caracteres, un número y un símbolo.";
        return false;
    }
}

// Validar que la confirmación coincida con la contraseña
function validarConfirmPassword() {
    if (confirmPassword.value === password.value && confirmPassword.value !== "") {
        document.getElementById("errorConfirmPassword").textContent = "";
        return true;
    } else {
        document.getElementById("errorConfirmPassword").textContent = "No coincide.";
        return false;
    }
}

// Validar que la edad sea mayor o igual a 18
function validarEdad() {
    if (edad.value >= 18) {
        document.getElementById("errorEdad").textContent = "";
        return true;
    } else {
        document.getElementById("errorEdad").textContent = "Debes tener 18 o más.";
        return false;
    }
}

// Habilitar el botón de enviar solo si todo está correcto
function habilitarBoton() {
    if (validarNombre() && validarCorreo() && validarPassword() && validarConfirmPassword() && validarEdad()) {
        btnEnviar.disabled = false; // Se habilita
    } else {
        btnEnviar.disabled = true; // Se mantiene deshabilitado
    }
}

// Eventos en tiempo real: cada vez que el usuario escribe, se valida
nombre.addEventListener("input", habilitarBoton);
correo.addEventListener("input", habilitarBoton);
password.addEventListener("input", habilitarBoton);
confirmPassword.addEventListener("input", habilitarBoton);
edad.addEventListener("input", habilitarBoton);

// Evento al enviar el formulario
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita que se recargue la página
    alert("Formulario enviado correctamente ✅"); // Mensaje de éxito
});
