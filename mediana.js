//--------------------Funcion encargada de validar el ingreso de solo numeros y algunos simbolos como la coma(,) en el input-----------------------------------------

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

// -------------------------------------------Funcion para transformar los datos ingresados a un arreglo de enteros------------------------------------------------------

let listaItemsMediana = [];

function muestraCalculoMediana()
{
    let datos = document.getElementById('inputDataMediana').value;
    let arregloDatos = datos.split(',');

    for(let i = 0; i < arregloDatos.length; i++)
    {
        listaItemsMediana.push(Number(arregloDatos[i]));
    };
    hallarMediana(listaItemsMediana);
}

//-------------------------------------------------Funciones encargadas de hallar la mediana---------------------------------------------------------------------------


// Utilizamos laformula del promedio del ejercicio anterior, en este nuevo ejercicio

function calcularMediaAritmetica (listaItemsMediana)
{
    // Iteración con metodo reduce y una función anónima:

    const sumaLista = listaItemsMediana.reduce(function (valorAcumulado = 0, nuevoElemento)
    {
        return valorAcumulado + nuevoElemento;
    });

    const promedioLista = sumaLista / listaItemsMediana.length;

    return promedioLista;
}

// --------------------------------------------------------------------

function hallarMediana(listaDesordenada) // A la función calcularMediaAritmetica, le pasas un arreglo como parametro ejemplo: ([1, 2, 3, 4])
{
    function comparaNumeros(a, b) // Función encargada de comparar y ordenar de manera ascendente los numeros de la lista
    {
    return a - b;
    }

    const lista = listaDesordenada.sort(comparaNumeros);
    
    console.log(`Esta es la lista ordenada ${lista}`);

    const mitadLista = parseInt(lista.length / 2); // Se usa parseInt por que la cantidad de elementos en un array es un numero entero, NO existen numeros decimales.


    // funcion para saber si la lista es par o impar y asi sacar la mediana
    function esPar(numerito)
    {
        if(numerito % 2 === 0) //Numero par
        {
            return true
        }
        else                    //Numero impar
        {
            return false
        }
    }

    let mediana;

    if(esPar(lista.length))
    {
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];
        const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
        mediana = promedioElemento1y2;
    }
    else
    {
        mediana = lista[mitadLista];
    }

    // return mediana;
    
    return resultadoPMediana.innerText = `Mediana: ${mediana}`
    
}

