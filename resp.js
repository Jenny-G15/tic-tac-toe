const caja= document.querySelectorAll(".juego");
//const btnReinicio = document.getElementById('reiniciar');

let cuadros= [0,1,2,3,4,5,6,7,8]
let X = "X";
let O = "O";

let winner = false
let circulo = true


function cuadroActual() {
    let cuadroAc=[];
    for (let i = 0; i < cuadros.length; i++) {
        cuadroAc.push(cuadros[i]);
    }
    return cuadroAc;
}
function cuadroVacio(cuadroActual) {
    let listaNueva=[]
    for (let i = 0; i < cuadroActual.length; i++) {
        if (cuadroActual[i] != "X" & cuadroActual[i]!= "O") {
            listaNueva.push(cuadroActual[i])        
        }
    }
    return listaNueva;
}
//juega maquina//
function p2() {
    let actual=cuadroActual()
    let vacios=cuadroVacio(actual)
    let max= vacios.length
    let indice= Math.floor(Math.random()*max)
    let posicion=vacios[indice]
    cuadros[posicion]="O"
    console.log("Vacios=",cuadros);
    caja.forEach((cuadro,i) => {
        if (cuadros[i]== "O") {
            cuadro.innerHTML= O
            circulo = !circulo
            hayGanador(circulo) 
        }

    })       
}

//juega persona//
caja.forEach((cuadro,i) => {
    cuadro.addEventListener("click", () => {
        if (cuadros[i]!="X" & cuadros[i]!="O") {
            cuadros[i]="X";
            cuadro.innerHTML= X
            circulo = !circulo
            console.log(cuadros);
        
            p2()
            hayGanador(circulo) 
        }
    })  
})
      //opociones de ganes //

function hayGanador(circulo) {
  const casillas= Array.from(caja).map(juego => juego.innerHTML);
  console.log(casillas)

  // horizontal//
    for (let i = 0; i <=9; i+=3) {
        if (casillas[i]&&
             casillas[i]=== casillas[i+1]&&
             casillas[i]=== casillas[i+2]) {
            if(!winner){
                ganar(circulo);

            }   
        }
    }
  //vertical//
    for (let i = 0; i <=3; i++) {
        if (casillas[i]&&
             casillas[i]=== casillas[i+3]&&
             casillas[i]=== casillas[i+6]) {
            if(!winner){
                 ganar(circulo);

            }
        }
    
    }

  //En X//
    if (casillas[2]&&
      casillas[2]===casillas[4]&&
      casillas[2]==casillas[6]) {
           if(!winner){
             ganar(circulo);

            }
    }  
    if (casillas[0]&&
        casillas[0]===casillas[4]&&
        casillas[0]==casillas[8]) {
        if(!winner){
            ganar(circulo);

        }
  
    } 
    for (let i = 0; i<9 ; i++) {
       if (casillas[i]!= X &&
           casillas[i]!= O ) {
            return false
       } 
    }
    console.log("Empate")
}

function ganar() {
    if(circulo){
    console.log("Ganador O");
    }
    else{
    console.log("Ganador X");
    }
    winner = true
    
}


 btnReinicio.addEventListener("click", function reinicio(){
    cuadros.splice(i,1);
})
dibujarPuntaje()

function dibujarPuntaje() {
    puntos.innerHTML="X","O"
    
}