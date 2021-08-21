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

                return console.log( 
                            `El total de dinero abonado es $${totalDineroAbonado.toFixed(2)} y se dividirá asi: \n \n`,
                            `El monto para necesidades es de: $${montoNecesidades.toFixed(2)} \n`,
                            `El monto para ahorro es de: $${montoAhorro.toFixed(2)} \n`,
                            `El monto para inversiones es de: $${montoInversiones.toFixed(2)} \n`,
                            `El monto para diversion es de: $${montoDiversion.toFixed(2)} \n`,
                            `El monto para formacion es de: $${montoFormacion.toFixed(2)} \n`,
                            `El monto para donativos es de: $${montoDonativos.toFixed(2)}`                        
                            );
            }
            else
            {
                console.log("¡Por favor ingresa un valor!");
            }
            
        },

        decrementar: function (dinero, bolsa)
        {
            if(totalDineroAbonado > dinero)
            {

                if(montoNecesidades >= dinero  && bolsa == "necesidades")
                {
                    montoNecesidades -= dinero;
                }
                
                else if(montoAhorro  >= dinero && bolsa == "ahorro")
                {
                    montoAhorro -= dinero;
                }
                
                else if(montoInversiones >= dinero && bolsa == "inversiones")
                {
                    montoInversiones -= dinero;
                }
                
                else if(montoDiversion >= dinero && bolsa == "diversion")
                {
                    montoDiversion -= dinero;
                }
                
                else if(montoFormacion >= dinero && bolsa == "formacion")
                {
                    montoFormacion -= dinero;
                } 
                       
                else if(montoDonativos >= dinero && bolsa == "donativos")
                {
                    montoDonativos -= dinero;
                }
                
                else
                {
                    console.log("¡Por favor verifica que la bolsa y el valor ingresados tengan fondos suficientes!\n\n");
                }
            }
            else
            {
                console.log("Primero debes ingresar dinero! \n\n");
            }
            totalDineroAbonado = montoNecesidades + montoAhorro + montoInversiones + montoDiversion + montoFormacion + montoDonativos;

            return console.log( 
                `El total de dinero restante es $${totalDineroAbonado.toFixed(2)} \n \n`,
                `El monto para necesidades es de: $${montoNecesidades.toFixed(2)} \n`,
                `El monto para ahorro es de: $${montoAhorro.toFixed(2)} \n`,
                `El monto para inversiones es de: $${montoInversiones.toFixed(2)} \n`,
                `El monto para diversion es de: $${montoDiversion.toFixed(2)} \n`,
                `El monto para formacion es de: $${montoFormacion.toFixed(2)} \n`,
                `El monto para donativos es de: $${montoDonativos.toFixed(2)}`                        
                );
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

// Para ingresar dinero se usa: ingresaDinero.incrementar(aquí el monto en numeros);
// Para retirar dinero se usa: ingresaDinero.decrementar(monto en numeros, "bolsa de la cual retira fondos");
// Para consultar saldo se usa: ingresaDinero.obtenerValor();