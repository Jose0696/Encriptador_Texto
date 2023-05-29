function encriptar() {
  try {
    var ingreso = document.getElementById("ingreso").value.toLowerCase();
    var cifrado = ingreso;

    var sustituciones = {
      "e": "enter",
      "o": "ober",
      "i": "imes",
      "a": "ai",
      "u": "ufat"
    };

    for (var letra in sustituciones) {
      cifrado = cifrado.replace(new RegExp(letra, "igm"), sustituciones[letra]);
    }

    actualizarResultado(cifrado);
  } catch (error) {
    console.error(error);
  }
}

function desencriptar() {
  try {
    var ingreso = document.getElementById("ingreso").value.toLowerCase();
    var cifrado = ingreso;

    var sustituciones = {
      "enter": "e",
      "ober": "o",
      "imes": "i",
      "ai": "a",
      "ufat": "u"
    };

    for (var letra in sustituciones) {
      cifrado = cifrado.replace(new RegExp(letra, "igm"), sustituciones[letra]);
    }

    actualizarResultado(cifrado);
  } catch (error) {
    console.error(error);
  }
}

function actualizarResultado(texto) {
  document.getElementById("muneco").style.display = "none";
  document.getElementById("mensaje").style.display = "none";
  document.getElementById("texto").innerHTML = texto;
  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit";
}

function copiar() {
  try {
    var texto = document.getElementById("texto");
    texto.select();
    document.execCommand("copy");
    alert("Contenido copiado");
  } catch (error) {
    alert("Error al copiar el contenido. Por favor, inténtalo nuevamente.");
    console.error(error);
  }
}


function validarTecla(event) {
  try {
    const teclaAltPresionada = event.altKey;

    if (teclaAltPresionada) {
      throw new Error("Se presionó la tecla Alt.");
    }

    const teclaPresionada = event.key;

    if (
      teclaPresionada === teclaPresionada.toUpperCase() && teclaPresionada.match(/[A-ZÁÉÍÓÚÜÑ]/) ||
      teclaPresionada.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/) ||
      teclaPresionada === teclaPresionada.toLowerCase() && teclaPresionada.match(/[áéíóúü]/)
    ) {
      throw new Error("Se presionó una tecla no permitida.");
    }
  } catch (error) {
    event.preventDefault();
    console.error(error);
  }
}
