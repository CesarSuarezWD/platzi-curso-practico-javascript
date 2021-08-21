// Funciones Helperso Utils

function esPar(numerito)
{
    // Versión discreta:

    // if(numerito % 2 === 0)
    // {
    //     return true;
    // }
    // else
    // {
    //     return false;
    // }


    // Versión simplificada (como la función comparadora)
    return (numerito % 2 === 0); // true si es par y false si es impar
}

function calcularMediaAritmetica (lista)
{
    // Iteración con metodo reduce y una función anónima:

    const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento)
    {
        return valorAcumulado + nuevoElemento;
    });

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

// Calculadora de mediana

function medianaSalarios(lista)
{
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length))
    {
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
    }
    else
    {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

// Mediana General

const salariosCol = colombia.map( //Esto se convierte en un arreglo por recibir arreglos como parametros
    function(personita)
    {
        return personita.salario;
    }
);

const salariosColOrdenados = salariosCol.sort(
    function(salarioA, salarioB)
    {
        return salarioA - salarioB;
    }
);

const medianaGeneralCol = medianaSalarios(salariosColOrdenados);

// Mediana del top 10%

const spliceStart = (salariosColOrdenados.length * 90) / 100;
const spliceCount = salariosColOrdenados.length - spliceStart;

const salariosColTop10 = salariosColOrdenados.splice(spliceStart, spliceCount);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col,
});

