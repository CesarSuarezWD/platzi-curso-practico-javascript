//--------------------------------Funcion encargada de validar el ingreso de solo numeros y algunos simbolos como la coma(,) en el input--------------------------------

function validarTecla(evt){ // Validacion de ingreso de solo numeros y de comas(',') como separador
    
    // codigo es la representacion decimal del codigo ascii al presionar una tecla
    var codigo = (evt.which) ? evt.which : evt.keyCode;
    
    if(codigo==8) { // backspace.
      return true;
    } else if(codigo>=44 && codigo<=57) { // es un numero paero tambien incluye caracteres como , - . /.
      return true;
    } else{ // otras teclas.
      return false;
    }
}

// ----------------------------------Funcion para transformar los datos ingresados a un arreglo de enteros---------------------------------------------------------------

let listaItemsModa = [];

function muestraCalculoModa ()
{
    let datos = document.getElementById('inputDataModa').value;
    let arregloDatos = datos.split(',');

    for(let i = 0; i < arregloDatos.length; i++)
    {
        listaItemsModa.push(Number(arregloDatos[i]));
    }

    hallarModa(listaItemsModa);
}


//--------------------------------------funcion encargada de hallar la moda------------------------------------------------------------------------------------------


function hallarModa(listaItemsModa) // A la función hallarModa(), le pasas un arreglo como parametro ejemplo: ([1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1])
{
    const listaCount = {};

    listaItemsModa.map(
        function(elemento)
        {
            if(listaCount[elemento])
            {
                listaCount[elemento] += 1;
            }
            else
            {
                listaCount[elemento] = 1;
            }
            
        }
    );

    const listaArray = Object.entries(listaCount).sort(
        function(elementoA, elementoB) // Función comparadora para ordenamiento de nuemeros ascendentemente
        {
            return elementoA[1] - elementoB[1]; // En este caso los elementos son arreglos y se ordenan por el numero de repeticiones (moda), de forma ascendente
        }
    );

    const moda = listaArray[listaArray.length - 1]

    // return moda;

    let resultadoModa = moda.slice(0, 1);
    let numeroRepeticiones = moda.slice(1);

    return resultadoPModa.innerText = `La moda es ${resultadoModa} y se repite ${numeroRepeticiones} veces`;
}