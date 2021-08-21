//--------------------------------Funcion encargada de validar el ingreso de solo numeros y algunos simbolos como la coma(,) en el input----------------------------------


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

// ----------------------------------------Funcion para transformar los datos ingresados a un arreglo de enteros-----------------------------------------------------------------


let listaItemsPromedio = []; // Creo un arreglo vacio.

function muestraCalculoPromedio()
{  
    let datos = document.getElementById('inputDataPromedio').value; // Toma el VALOR de los datos ingresados en el input.

    if(datos.includes(',') && datos != (','))
    {
        let arregloStr =  datos.split(','); // Convierte los datos ingresados en un arreglo de string separados por un caracter, en este caso es la coma (,).
        for(let i = 0; i < arregloStr.length; i++) // Itera por cada dato ingresado en el arreglo de string.
        {
            listaItemsPromedio.push( Number (arregloStr[i])); // Ingresa cada dato convertido de string a numero al arreglo "lista" creado inicialmente como vacio.
        }

        calculaMediaAritmetica(listaItemsPromedio); // invoca la funcion calcularMediaAritmetica y le pasa como parametro lista
    }
    else
    {
        resultadoPPromedio.innerText = 'Ingrese datos validos';
    }

    // console.log(lista); // Muestra el nuevo arreglo de numeros enteros.

    // console.log(datos);
}


//---------------------------------------------------------------- Función para calcular el promedio:-------------------------------------------------------

// A la función calcularMediaAritmetica, le pasas un arreglo como parametro ejemplo: ([1, 2, 3, 4])
function calculaMediaAritmetica (lista)
{
    // Iteración con ciclo for:
    
    // let sumaLista = 0;

    // for(let i = 0; i < lista.length; i++)
    // {
    //     sumaLista = sumaLista + lista[i];
    // }

    // Iteración con metodo reduce y una función anónima:

    const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento)
    {
        return valorAcumulado + nuevoElemento;
    });

    const promedioLista = sumaLista / lista.length;

    return resultadoPPromedio.innerText = `Promedio: ${promedioLista}` // pone el resultado en el parrafo corrspondiente del html

    // return console.log(promedioLista);   
}