// captura los elementos del DOM
var formularioLogin = document.getElementById('formularioLogin');

// otiene los inputs por su id
var nombreInput = document.getElementById('Nombre');
var cantidadInput = document.getElementById('cantidad');
var tipoEntrada = document.getElementById('entradas');
var codigoDescuento = document.getElementById('descuento');

// toma el boton de calcular total
var btnRegistro = document.getElementById('btntotal');

// mensajes de error y validacion
var mensajeError = document.getElementById('mensajeError');
var alertaContenedor = document.getElementById('alertaContenedor');

if (!mensajeError) {
    mensajeError = document.createElement('div');
    mensajeError.id = 'mensajeError';
    mensajeError.style.color = 'black';
    mensajeError.style.marginTop = '10px';
    mensajeError.style.display = 'none';
    formularioLogin.appendChild(mensajeError);
}

if (!alertaContenedor) {
    alertaContenedor = document.createElement('div');
    alertaContenedor.id = 'alertaContenedor';
    alertaContenedor.style.color = 'green';
    alertaContenedor.style.marginTop = '10px';
    alertaContenedor.style.display = 'none';
    formularioLogin.appendChild(alertaContenedor);
}

btnRegistro.addEventListener('click', function () {
    mensajeError.style.display = 'none';
    alertaContenedor.style.display = 'none';
    alertaContenedor.innerHTML = "";

    var nombre = nombreInput.value.trim();
    var cantidad = cantidadInput.value.trim();
    var tipo = tipoEntrada.value.trim();
    var descuento = codigoDescuento.value.trim();

    if (nombre === "" || cantidad === "" || tipo === "") {
        mostrarError("Todos los campos deben estar completos");
        return;
    }

    if (isNaN(cantidad) || Number(cantidad) < 1) {
        mostrarError("La cantidad debe ser un número mayor que cero");
        return;
    }

    var precioUnitario = 0;
    if (tipo === "general") {
        precioUnitario = 1000;
    } else if (tipo === "vip") {
        precioUnitario = 2000;
    } else if (tipo === "platino") {
        precioUnitario = 3000;
    } else {
        mostrarError("El tipo de entrada debe ser: general, vip o platino");
        return;
    }

    var total = precioUnitario * Number(cantidad);

    if (descuento === "ROCK10") {
        total = total * 0.9;
    }

    alertaContenedor.innerHTML = "¡Reserva exitosa! Total a pagar: $" + total.toFixed(2);
    alertaContenedor.style.display = 'block';
    alertaContenedor.className = "mensaje exito";
});

function mostrarError(texto) {
    mensajeError.textContent = texto;
    mensajeError.style.display = "block";
    mensajeError.className = "mensaje error";

    setTimeout(function () {
        mensajeError.style.display = 'none';
    }, 3000);
}
