function valida_envia() {
    const form = document.forms["fvalida"];

    const nombre = form["nombre"].value.trim();
    const edad = form["edad"].value.trim();
    const productos = form["productos"].value.trim();
    const satisfecha = form["satisfecha"].value;
    const calificacion = form["calificacion"].value;
    const sugerencias = form["sugerencias"].value.trim();

    // Validar nombre
    if (nombre === "") {
        alert("Por favor, ingresa tu nombre.");
        form["nombre"].focus();
        return false;
    }

    // Validar edad
    if (edad === "" || isNaN(edad) || parseInt(edad) <= 0) {
        alert("Por favor, ingresa una edad válida (mayor que 0).");
        form["edad"].focus();
        return false;
    }

    // Validar calificación de productos (1 a 10)
    if (productos === "" || isNaN(productos) || productos < 1 || productos > 10) {
        alert("La calificación de productos debe estar entre 1 y 10.");
        form["productos"].focus();
        return false;
    }

    // Validar si está satisfecha
    if (satisfecha === "Elegir") {
        alert("Por favor, indica si estás satisfecha con el producto.");
        form["satisfecha"].focus();
        return false;
    }

    // Validar calificación del material
    if (calificacion === "Elegir") {
        alert("Por favor, selecciona una calificación del material.");
        form["calificacion"].focus();
        return false;
    }

    // Validar sugerencias
    if (sugerencias === "") {
        alert("Por favor, escribe algún comentario o sugerencia.");
        form["sugerencias"].focus();
        return false;
    }

    // Si todo está bien, se envía el formulario
    form.submit();
}
