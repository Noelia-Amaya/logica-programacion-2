function hacerConversion() {
    
    // guardar contenido del input con .value en la variable celsiusUsuario
    let celsiusUsuario = document.getElementById("numero").value;

    // guardar etiquetas p mediante el id 
    let fahrenheit = document.getElementById("p-grados-fahrenheit");
    let kelvin = document.getElementById("p-grados-kelvin");

    // asegurar que el input no quede vacio
    if (celsiusUsuario === "") {
        alert("Este campo no puede estar vacio !");
    } else {
        // realizar un casteo de tipo de dato String a tipo de dato number
        celsiusUsuario = parseFloat(celsiusUsuario);

        // verificar si el valor ingresado es un número válido
        if (isNaN(celsiusUsuario)) {
            alert("ERROR ! Por favor, ingresa un número válido.");
        } else {
            // imprimir en consola para verificar que el casteo se haya realizado correctamente
            console.log(typeof celsiusUsuario);

            // formula para pasar de celsius a kelvin
            let kelvinFormula = celsiusUsuario + 273.15;

            // cambio de texto de la etiqueta p mediante el textContent    
            kelvin.textContent = "Grados Kelvin: " + kelvinFormula + " K ";

            // formula para pasar de celsius a fahrenheit
            let fahrenheitFormula = celsiusUsuario * 1.8 + 32;
            
            // cambio de texto de la etiqueta p mediante el textContent 
            fahrenheit.textContent = "Grados Fahrenheit: " + fahrenheitFormula + " °F ";    
        }
    }
}
