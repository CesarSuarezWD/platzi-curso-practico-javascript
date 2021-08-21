//valor mensualidad Amazon = 14900;
//valor mensualidad nNetflix = 16900;
//valor mensualidad Disney = 23900;
//valor mensualidad Hbo = 13900;

let amazonChkb = document.getElementById("amzPV");
let amazonIn = document.getElementById("amzInput");
let netflixChkb = document.getElementById("nf");
let netflixIn = document.getElementById("nfInput");
let disneyChkb = document.getElementById("dn");
let disneyIn = document.getElementById("dnInput");
let hboChkb = document.getElementById("hb");
let hboIn = document.getElementById("hbInput");
let respuesta = " ";


function seleccionaPlataformas(plataforma) {

    switch(plataforma){
        case 1:
            if (amazonChkb.checked == true && amazonIn.disabled == true)
            {
                amazonIn.disabled = false;
                compararPrecios();
            }
            else
            {
                amazonIn.disabled = true;
            }
            break;
        case 2:
            if (netflixChkb.checked == true && netflixIn.disabled == true)
            {
                netflixIn.disabled = false;
            }
            else
            {
                netflixIn.disabled = true;
            }
            break;
        case 3:
            if (disneyChkb.checked == true && disneyIn.disabled == true)
            {
                disneyIn.disabled = false;
            }
            else
            {
                disneyIn.disabled = true;
            }
            break;
        case 4:
            if (hboChkb.checked == true && hboIn.disabled == true)
            {
                hboIn.disabled = false;
            }
            else
            {
                hboIn.disabled = true;
            }
            break;
        default:
            console.log("No hay seleccion");

    }

  }

  function compararPrecios()
  {
    let  valorBoletoCine = Number (document.getElementById("precioTiquete").value);
    let  numeroPeliculasMes = Number (document.getElementById("numeroPeliculas").value);
    let valorEntradasCine = valorBoletoCine * numeroPeliculasMes;
    let valorTotalPlataformas = Number(amazonIn.value) + Number (netflixIn.value) + Number (disneyIn.value) + Number(hboIn.value);
    if(valorEntradasCine > valorTotalPlataformas && valorEntradasCine >= 0 && valorTotalPlataformas >= 0)
    {
        respuesta = "Quedate con las plataformas!";
        console.log(respuesta);
        document.getElementById('respuestaEncuesta').innerHTML = respuesta;
    }
    else if (valorTotalPlataformas > valorEntradasCine && valorEntradasCine >= 0 && valorTotalPlataformas >= 0)
    {
        respuesta = "Vete pa'l cine de una!";
        console.log(respuesta);
        document.getElementById('respuestaEncuesta').innerHTML = respuesta;
    }  
    
  }

  

  




