document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formulario");
    const mensajeError = document.getElementById("mensajeError");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        // Inicializa un array para almacenar observaciones
        const observaciones = [];

        // Obtener los valores de los campos
        const id = formulario.id.value;
        const nombre = formulario.nombre.value;
        const apellidos = formulario.apellidos.value;
        const telefono = formulario.telefono.value;
        const correo = formulario.correo.value;
        const edad = formulario.edad.value;
        const fechaNacimiento = formulario.fechaNacimiento.value;

        // Función para mostrar errores debajo de cada campo
        function mostrarErrorCampo(idCampoError, mensajeError) {
            const campoError = document.getElementById(idCampoError);
            campoError.textContent = mensajeError;
            campoError.style.display = "block";
            campoError.style.color = "red";
        }

        // Función para ocultar errores debajo de cada campo
        function ocultarErrorCampo(idCampoError) {
            const campoError = document.getElementById(idCampoError);
            campoError.textContent = "";
            campoError.style.display = "none";
        }

        // Validar ID (5 dígitos exactos)
        if (!/^\d{5}$/.test(id)) {
            observaciones.push("El ID debe tener 5 dígitos exactos.");
            mostrarErrorCampo("errorId", "El ID debe tener 5 dígitos exactos.");
        } else {
            ocultarErrorCampo("errorId");
        }

        // Validar nombre y apellidos (no pueden estar vacíos)
        if (nombre.trim() === "") {
            observaciones.push("El nombre no puede estar vacío.");
            mostrarErrorCampo("errorNombre", "El nombre no puede estar vacío.");
        } else {
            ocultarErrorCampo("errorNombre");
        }

        if (apellidos.trim() === "") {
            observaciones.push("Los apellidos no pueden estar vacíos.");
            mostrarErrorCampo("errorApellidos", "Los apellidos no pueden estar vacíos.");
        } else {
            ocultarErrorCampo("errorApellidos");
        }

        // Validar teléfono (###)###-####
        if (!/^\(\d{3}\)\d{3}-\d{4}$/.test(telefono)) {
            observaciones.push("El teléfono debe tener el formato (###)###-####.");
            mostrarErrorCampo("errorTelefono", "El teléfono debe tener el formato (###)###-####.");
        } else {
            ocultarErrorCampo("errorTelefono");
        }

        // Validar correo electrónico
        if (!/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(correo)) {
            observaciones.push("El correo electrónico no es válido.");
            mostrarErrorCampo("errorCorreo", "El correo electrónico no es válido.");
        } else {
            ocultarErrorCampo("errorCorreo");
        }

        // Validar edad (número positivo)
        const edadNum = parseInt(edad);
        if (isNaN(edadNum) || edadNum <= 0) {
            observaciones.push("La edad debe ser un número positivo.");
            mostrarErrorCampo("errorEdad", "La edad debe ser un número positivo.");
        } else {
            ocultarErrorCampo("errorEdad");
        }

        // Validar fecha de nacimiento (AAAA-MM-DD)
        if (!/^\d{4}-\d{2}-\d{2}$/.test(fechaNacimiento)) {
            observaciones.push("La fecha de nacimiento debe tener el formato AAAA-MM-DD.");
            mostrarErrorCampo("errorFechaNacimiento", "La fecha de nacimiento debe tener el formato AAAA-MM-DD.");
        } else {
            ocultarErrorCampo("errorFechaNacimiento");
        }

       
    });
});
