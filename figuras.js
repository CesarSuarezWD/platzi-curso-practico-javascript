// Código del cuadrado
console.group("Cuadrados");

function perimertroCuadrado (lado)
{
    return lado * 4;
} 

function areaCuadrado (lado)
{
    return lado * lado;
} 



// Código del triángulo
console.group("Triángulos");

function perimetroTriangulo (lado1, lado2, base)
{
    return lado1 + lado2 + base;
} 

function areaTriangulo (base, altura)
{
    return (base * altura) / 2;
}

console.groupEnd();



//Código círculo
console.group("Círculos");

//Diametro
function diametroCirculo (radio)
{
    return radio * 2;
} 

//PI
const PI = Math.PI;
console.log("PI es: " + PI);

//Perimetro
function perimetroCirculo (radio)
{
    const diametro = diametroCirculo(radio);
    return  diametro * PI;
}

//Área
function areaCirculo (radio)
{
    return (radio * radio) * PI
}

console.groupEnd();



//Aquí interactuamos con HTML


// Cuadrado
function calcularPerimetroCuadrado()
{
    const input = document.getElementById("inputCuadrado"); 
    const value = parseInt(input.value);

    const perimetro = perimertroCuadrado(value);
    document.getElementById("cuadradoResultado").innerHTML=`El perímetro del cuadrado es de ${perimetro}`;
}

function calcularAreaCuadrado()
{
    const input = document.getElementById("inputCuadrado"); 
    const value = parseInt(input.value);

    const area = areaCuadrado(value);
    document.getElementById("cuadradoResultado").innerHTML=`El área del cuadrado es de ${area}`;
}


// Triángulo
function calcularPerimetroTriangulo ()
{
    const input1 = document.getElementById("inputL1Triangulo");
    const input2 = document.getElementById("inputL2Triangulo");
    const inputB = document.getElementById("inputBaseTriangulo");
    const value1 = parseInt(input1.value);
    const value2 = parseInt(input2.value);
    const valueB = parseInt(inputB.value);

    const perimetroCalculadoT = perimetroTriangulo(value1, value2, valueB);
    document.getElementById("trianguloResultado").innerHTML=`El perímetro del triángulo es de ${perimetroCalculadoT}`;
}

function calcularAreaTriangulo ()
{
    const inputB = document.getElementById("inputBaseTriangulo");
    const altura = document.getElementById("inputAlturaTriangulo");
    const valueB = parseInt(inputB.value);
    const valueAltura = parseInt(altura.value);

    const areaT = areaTriangulo(valueB, valueAltura);
    document.getElementById("trianguloResultado").innerHTML=`El área del triángulo es de ${areaT}`;
}


//Circulo
function calcularPerimetroCirculo ()
{
    const input = document.getElementById("inputRadio");
    const valueRadio = parseInt(input.value);

    const perimetroCalculadoCirculo =  perimetroCirculo(valueRadio);
    document.getElementById("circuloResultado").innerHTML=`El perímetro del circulo es de ${perimetroCalculadoCirculo}`;
}

function calcularAreaCirculo ()
{
    const input = document.getElementById("inputRadio");
    const valueRadio = parseInt(input.value);

    const areaCalculadaCirculo = areaCirculo(valueRadio);
    document.getElementById("circuloResultado").innerHTML=`El área del circulo es de ${areaCalculadaCirculo}`;
}
