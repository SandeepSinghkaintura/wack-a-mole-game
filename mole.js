const div = document.getElementById("board");
const score = document.getElementById("score");

let sum =0;
let gameOver = false;

window.onload=()=>{
    playGame();
};


function createPipes(){
    
    for(let i =0;i<9;i++){
        let box = document.createElement("div");
        box.id = i.toString();
        div.appendChild(box);
    }

} 


function randomNum(){
    return Math.floor(Math.random()*9);
}



const playGame= ()=>{

     createPipes();
     createMole();
     createPlant();
    
}

let occupiedPipe = {};

function createMole(){
 if(gameOver) return;
   
    let num

    do{
          num = randomNum();
    }while(occupiedPipe[num])

    
    // if(currentPlant && currentPlant.id == num){
    //     return;
    // }
    
    let mole = document.createElement("img");
    mole.id = "mole";
    mole.src = "./monty-mole.png";
    
    let currentMole = document.getElementById(num);
        currentMole.appendChild(mole);
        occupiedPipe[num] = 'mole';
    
    setInterval(()=>{
        if(currentMole.contains(mole)){
            currentMole.removeChild(mole);
            delete occupiedPipe[num];
            createMole();
        }
        
    },1000);

    gameScore(currentMole,mole);
}
function createPlant(){

   if(gameOver) return;

   let num

   do{
         num = randomNum();
   }while(occupiedPipe[num])
    // if(currentMole && currentMole.id == num){
    //     return;
    // }

    let plant = document.createElement("img");
    plant.id= "plant";
    plant.src = "./piranha-plant.png";


    
    let currentPlant = document.getElementById(num);
        currentPlant.appendChild(plant);
        occupiedPipe[num] = 'plant';
    
    setInterval(()=>{
        if(currentPlant.contains(plant)){
            currentPlant.removeChild(plant);
            delete occupiedPipe[num];
            createPlant();
        }
        
    },1000);

    gameScore(currentPlant,plant);
}


function gameScore(currentMole,mole){
    mole.addEventListener('click',(e)=>{
        console.log(e.target.id);
          if(e.target.id == "mole"){
            
             sum += 10;
             score.innerText = sum;
          }
          else{
            gameOver = true;
            score.innerText = "game over :: score : " + sum;
          }
    })
}


