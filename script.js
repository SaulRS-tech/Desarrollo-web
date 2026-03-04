function validarFormulario() {
    const campos = ['nombre', 'email', 'tel', 'ciudad', 'interes'];
    let vacio = false;

    campos.forEach(id => {
        if (document.getElementById(id).value === "") vacio = true;
    });

    if (vacio) {
        alert("Todos los campos son obligatorios.");
    } else {
        alert("Formulario validado correctamente.");
    }
}
window.onload = () => {
    const myModal = new bootstrap.Modal(document.getElementById('miModal'));
    myModal.show();
};
