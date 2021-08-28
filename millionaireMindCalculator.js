// crear 6 casillas para:

// 50% para necesidades básicas. Aunque no se explica específicamente en el libro, todos sabemos cuales son. ...
// 10% para ahorrar. ...
// 10% para tu libertad financiera (Inversiones). ...
// 10% para jugar y divertirse. ...
// 10% para tu formación. ...
// 10% para donativos.

// Tomado de: https://lariquezaestiempo.com/como-administrar-el-dinero-secretos-mente-millonaria/


function dividirDinero ()
{
    let montoNecesidades = 0;
    let montoAhorro = 0;
    let montoInversiones = 0;
    let montoDiversion = 0;
    let montoFormacion = 0;
    let montoDonativos = 0;
    let totalDineroAbonado = 0;

    return {

        incrementar: function agregarDinero (dinero)
        {
            if(dinero >= 0)
            {
                montoNecesidades += dinero / 2;
                montoAhorro += dinero / 10;
                montoInversiones += dinero / 10;
                montoDiversion += dinero / 10;
                montoFormacion += dinero / 10;
                montoDonativos += dinero / 10;
                totalDineroAbonado = montoNecesidades + montoAhorro + montoInversiones + montoDiversion + montoFormacion + montoDonativos;

                document.getElementById('totalDineroParrafo').innerText = `$${totalDineroAbonado.toFixed(2)}`;
                document.getElementById('necesidadesbparrafo').innerText = `$${montoNecesidades.toFixed(2)}`;
                document.getElementById('ahorroparrafo').innerText = `$${montoAhorro.toFixed(2)}`;
                document.getElementById('inversionesparrafo').innerText = `$${montoInversiones.toFixed(2)}`;
                document.getElementById('diversionparrafo').innerText = `$${montoDiversion.toFixed(2)}`;
                document.getElementById('formacionparrafo').innerText = `$${montoFormacion.toFixed(2)}`;
                document.getElementById('donativosparrafo').innerText = `$${montoDonativos.toFixed(2)}`;
                document.getElementById('ingresoDineroAlerta').innerText = `Se ha abonado $${document.getElementById('ingresoDineroInput').valueAsNumber} exitosamente!`;

                // return console.log( 
                //             `El total de dinero abonado es $${totalDineroAbonado.toFixed(2)} y se dividirá asi: \n \n`,
                //             `El monto para necesidades es de: $${montoNecesidades.toFixed(2)} \n`,
                //             `El monto para ahorro es de: $${montoAhorro.toFixed(2)} \n`,
                //             `El monto para inversiones es de: $${montoInversiones.toFixed(2)} \n`,
                //             `El monto para diversion es de: $${montoDiversion.toFixed(2)} \n`,
                //             `El monto para formacion es de: $${montoFormacion.toFixed(2)} \n`,
                //             `El monto para donativos es de: $${montoDonativos.toFixed(2)}`                        
                //             );
            }
            else
            {
                document.getElementById('ingresoDineroAlerta').innerText = `¡Por favor ingresa un valor!`;
                // document.getElementById('ingresoDineroInput').placeholder = '¡Por favor ingresa un valor!';
                // console.log("¡Por favor ingresa un valor!");
            }
            
        },

        decrementar: function (dinero, bolsa)
        {
            if(totalDineroAbonado > dinero)
            {

                if(montoNecesidades >= dinero  && bolsa == "necesidades")
                {
                    if(document.getElementById('tARetiroNB').value.length != 0 && document.getElementById('inputRetiroNB').value != 0)
                    {
                        montoNecesidades -= dinero;
                        document.getElementById('necesidadesbparrafo').innerText = `$${montoNecesidades.toFixed(2)}`;
                        document.getElementById('ingresoDineroAlerta').innerText = `Retiraste $${document.getElementById('inputRetiroNB').valueAsNumber} de tu bolsa de necesidades exitosamente!`;
                        document.getElementById('inputRetiroNB').value = "";
                        document.getElementById('tARetiroNB').value = "";
                        document.getElementById('inputRetiroNB').placeholder = "";
                        document.getElementById('tARetiroNB').placeholder = "";
                    }
                    else
                    {
                        document.getElementById('inputRetiroNB').placeholder = "Ingresa un valor";
                        document.getElementById('tARetiroNB').placeholder = "Debes indicar para que usarás el dinero.";
                    }
                }
                
                else if(montoAhorro  >= dinero && bolsa == "ahorro")
                {
                    if(document.getElementById('tARetiroAhorro').value.length != 0 && document.getElementById('inputRetiroAhorro').value != 0)
                    {
                        montoAhorro -= dinero;
                        document.getElementById('ahorroparrafo').innerText = `$${montoAhorro.toFixed(2)}`;
                        document.getElementById('ingresoDineroAlerta').innerText = `Retiraste $${document.getElementById('inputRetiroAhorro').valueAsNumber} de tu bolsa de ahorro exitosamente!`;   
                        document.getElementById('inputRetiroAhorro').value = "";
                        document.getElementById('tARetiroAhorro').value = "";
                        document.getElementById('inputRetiroAhorro').placeholder = "";
                        document.getElementById('tARetiroAhorro').placeholder = "";
                    }
                    else
                    {
                        document.getElementById('inputRetiroAhorro').placeholder = "Ingresa un valor";
                        document.getElementById('tARetiroAhorro').placeholder = "Debes indicar para que usarás el dinero.";
                    }
                }
                
                else if(montoInversiones >= dinero && bolsa == "inversiones")
                {
                    if(document.getElementById('tARetiroInversiones').value.length != 0 && document.getElementById('inputRetiroInversiones').value != 0)
                    {
                        montoInversiones -= dinero;
                        document.getElementById('inversionesparrafo').innerText = `$${montoInversiones.toFixed(2)}`;
                        document.getElementById('ingresoDineroAlerta').innerText = `Retiraste $${document.getElementById('inputRetiroInversiones').valueAsNumber} de tu bolsa de inversiones exitosamente!`;
                        document.getElementById('inputRetiroInversiones').value = "";
                        document.getElementById('tARetiroInversiones').value = "";
                        document.getElementById('inputRetiroInversiones').placeholder = "";
                        document.getElementById('tARetiroInversiones').placeholder = "";
                    }
                    else
                    {
                        document.getElementById('inputRetiroInversiones').placeholder = "Ingresa un valor";
                        document.getElementById('tARetiroInversiones').placeholder = "Debes indicar para que usarás el dinero.";
                    }
                }
                
                else if(montoDiversion >= dinero && bolsa == "diversion")
                {
                    if(document.getElementById('tARetiroDiversion').value.length != 0 && document.getElementById('inputRetiroDiversion').value != 0)
                    {
                        montoDiversion -= dinero;
                        document.getElementById('diversionparrafo').innerText = `$${montoDiversion.toFixed(2)}`;
                        document.getElementById('ingresoDineroAlerta').innerText = `Retiraste $${document.getElementById('inputRetiroDiversion').valueAsNumber} de tu bolsa de diversión exitosamente!`;
                        document.getElementById('inputRetiroDiversion').value = "";
                        document.getElementById('tARetiroDiversion').value = "";
                        document.getElementById('inputRetiroDiversion').placeholder = "";
                        document.getElementById('tARetiroDiversion').placeholder = "";
                    }
                    else
                    {
                        document.getElementById('inputRetiroDiversion').placeholder = "Ingresa un valor";
                        document.getElementById('tARetiroDiversion').placeholder = "Debes indicar para que usarás el dinero.";
                    }
                }
                
                else if(montoFormacion >= dinero && bolsa == "formacion")
                {
                    if(document.getElementById('tARetiroFormacion').value.length != 0 && document.getElementById('inputRetiroFormacion').value != 0)
                    {
                        montoFormacion -= dinero;
                        document.getElementById('formacionparrafo').innerText = `$${montoFormacion.toFixed(2)}`;
                        document.getElementById('ingresoDineroAlerta').innerText = `Retiraste $${document.getElementById('inputRetiroFormacion').valueAsNumber} de tu bolsa de formación exitosamente!`;                    
                        document.getElementById('inputRetiroFormacion').value = "";
                        document.getElementById('tARetiroFormacion').value = "";
                        document.getElementById('inputRetiroFormacion').placeholder = "";
                        document.getElementById('tARetiroFormacion').placeholder = "";
                    }
                    else
                    {
                        document.getElementById('inputRetiroFormacion').placeholder = "Ingresa un valor";
                        document.getElementById('tARetiroFormacion').placeholder = "Debes indicar para que usarás el dinero.";
                    }
                } 
                       
                else if(montoDonativos >= dinero && bolsa == "donativos")
                {
                    if(document.getElementById('tARetiroDonativos').value.length != 0 && document.getElementById('inputRetiroDonativos').value != 0)
                    {
                        montoDonativos -= dinero;
                        document.getElementById('donativosparrafo').innerText = `$${montoDonativos.toFixed(2)}`;
                        document.getElementById('ingresoDineroAlerta').innerText = `Retiraste $${document.getElementById('inputRetiroDonativos').valueAsNumber} de tu bolsa de donaciones exitosamente!`;                   
                        document.getElementById('inputRetiroDonativos').value = "";
                        document.getElementById('tARetiroDonativos').value = "";
                        document.getElementById('inputRetiroDonativos').placeholder = "";
                        document.getElementById('tARetiroDonativos').placeholder = "";
                    }
                    else
                    {
                        document.getElementById('inputRetiroDonativos').placeholder = "Ingresa un valor";
                        document.getElementById('tARetiroDonativos').placeholder = "Debes indicar para que usarás el dinero.";
                    }
                }
                
                else
                {
                    // console.log("¡Por favor verifica que la bolsa seleccionada tenga fondos suficientes!\n\n");
                    document.getElementById('ingresoDineroAlerta').innerText = `¡Por favor verifica que la bolsa seleccionada tenga fondos suficientes!`;
                }
            }
            else
            {
                // console.log("Primero debes ingresar dinero! \n\n");
                document.getElementById('ingresoDineroAlerta').innerText = `Primero debes ingresar dinero!`;
            }
            totalDineroAbonado = montoNecesidades + montoAhorro + montoInversiones + montoDiversion + montoFormacion + montoDonativos;

            document.getElementById('totalDineroParrafo').innerText = `$${totalDineroAbonado.toFixed(2)} \n \n`;

            // return console.log( 
            //     `El total de dinero restante es $${totalDineroAbonado.toFixed(2)} \n \n`,
            //     `El monto para necesidades es de: $${montoNecesidades.toFixed(2)} \n`,
            //     `El monto para ahorro es de: $${montoAhorro.toFixed(2)} \n`,
            //     `El monto para inversiones es de: $${montoInversiones.toFixed(2)} \n`,
            //     `El monto para diversion es de: $${montoDiversion.toFixed(2)} \n`,
            //     `El monto para formacion es de: $${montoFormacion.toFixed(2)} \n`,
            //     `El monto para donativos es de: $${montoDonativos.toFixed(2)}`                        
            //     );
        },

        obtenerValor: function()
        {
            return console.log( 
                `El total de dinero abonado es $${totalDineroAbonado.toFixed(2)} y está dividido asi: \n \n`,
                `El monto para necesidades es de: $${montoNecesidades.toFixed(2)} \n`,
                `El monto para ahorro es de: $${montoAhorro.toFixed(2)} \n`,
                `El monto para inversiones es de: $${montoInversiones.toFixed(2)} \n`,
                `El monto para diversion es de: $${montoDiversion.toFixed(2)} \n`,
                `El monto para formacion es de: $${montoFormacion.toFixed(2)} \n`,
                `El monto para donativos es de: $${montoDonativos.toFixed(2)}`                        
                );
        }
    }
}

let ingresaDinero = dividirDinero();

function ingresarDinero () // Función encargada de ingresar dinero
{
    dineroIngresado = ingresaDinero.incrementar((document.getElementById('ingresoDineroInput')).valueAsNumber);
    // return dineroIngresado;
}


function retirarDinero(valor, bolsa) // Función encargada de retirar dinero de cada bolsa
{
    dineroRetirado = ingresaDinero.decrementar(valor, bolsa); 
}



// Para ingresar dinero se usa: ingresaDinero.incrementar(aquí el monto en numeros);
// Para retirar dinero se usa: ingresaDinero.decrementar(monto en numeros, "bolsa de la cual retira fondos");
// Para consultar saldo se usa: ingresaDinero.obtenerValor();