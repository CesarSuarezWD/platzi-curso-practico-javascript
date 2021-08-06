// const precioOriginal = 120;
// const descuento = 18;


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });



// function calcularPrecioConDescuento (precio, descuento)
// {
//     const porcentajePrecioConDescuento = 100 - descuento;
//     const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
//     return precioConDescuento;
// }

// function onClickButtonPriceDiscount()
// {
//     const inputPrice =  document.getElementById("inputPrice");
//     const priceValue = inputPrice.value;
//     const inputDiscount =  document.getElementById("inputDiscount");
//     const discountValue = inputDiscount.value;
//     const precioConDescuento =  calcularPrecioConDescuento(priceValue, discountValue);
//     const resultP = document.getElementById("resultP");
//     resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
// }


// ----------------------------------------------------------------------------------------------------


function calculateDiscountedPrice (precio, descuento)
{
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}


const input1 = document.getElementById('inputPrice');
input1.addEventListener('input', PriceDiscount);

const input2 = document.getElementById('inputDiscount');
input2.addEventListener('input', PriceDiscount);


function PriceDiscount()
{
    let input = document.getElementById('inputPrice');
    const originalPrice = Number(input.value);
    input = document.getElementById('inputDiscount');
    const discountPercentage = Number(input.value);
    let result = calculateDiscountedPrice(originalPrice, discountPercentage);
    resultP.innerText = `$ ${result}`;
    
};