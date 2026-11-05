const fechaNacimiento = document.getElementById("fechaNacimiento");
const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

flatpickr(fechaNacimiento, {
    dateFormat: "d/m/Y",
    locale: "es",
    maxDate: "today"
});

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const fecha = fechaNacimiento.value;

    if (fecha === "") {
        resultado.textContent = "Selecciona tu fecha de nacimiento";
        return;
    }

    const nacimiento = luxon.DateTime.fromFormat(fecha, "dd/MM/yyyy");
    const hoy = luxon.DateTime.now();

    if (!nacimiento.isValid || nacimiento > hoy) {
        resultado.textContent = "Ingresa una fecha válida";
        return;
    }

    const edad = hoy.diff(nacimiento, ["years", "months", "days"]).toObject();

    resultado.textContent =
        `Tienes ${Math.floor(edad.years)} años, 
        ${Math.floor(edad.months)} meses y 
        ${Math.floor(edad.days)} días.`;

});
