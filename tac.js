const caja= document.querySelectorAll(".juego");
const btnReinicio = document.getElementById('reiniciar');
const ventana = document.querySelector(".dialog");
const puntosO= document.querySelector(".puntosO");
const puntosX= document.querySelector(".puntosX");


let cuadros= [0,1,2,3,4,5,6,7,8]
let X = "X";
let O = "O";
let winner = false
let circulo = true
let puntajeX= 0;
let puntajeO= 0;
let puntoX, puntoO;
let gameOver= false 

puntosO.innerHTML= localStorage.getItem('puntajeO')
puntosX.innerHTML= localStorage.getItem('puntajeX')

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

            setTimeout(() => {
                p2()
            }, 900);
            
            hayGanador(circulo)  
            //final()// 
           
        }
    })  
})
    //opciones de ganes //

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
        puntajeO++
        puntoO = localStorage.setItem('puntajeO', puntajeO)
    }
    else{
        console.log("Ganador X");
        puntajeX++
        puntoX = localStorage.setItem('puntajeX', puntajeX)
    }
    winner = true     
 
}
btnReinicio.addEventListener("click", function(){
    caja.forEach((cuadros) => {
        cuadros.innerHTML = ""
    })
    for (let i = 0; i < cuadros.length; i++) {
        cuadros[i]=i;
    }
})

dibujarPuntaje()

function dibujarPuntaje(){

}
//function final() {
   // if (gameOver) {
      //  console.log("El juego ha terminado");
      //  return;
   // }

   // if (casillas[i] === ' ') {
   //     [i] = hayGanador;
   // } else {
   //     console.log("ya está ocupada.");
   // }
//}


 



 