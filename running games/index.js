const Score= document.querySelector('.score')
const carGame= document.querySelector('.carGame')
const startScreen =document.querySelector('.startScreen')
const gameArea= document.querySelector('.gameArea')
let key= {ArrowUp : false, ArrowDown : false, ArrowLeft : false, ArrowRigt : false}
let player={};
const keyDown=(e)=>{
     console.log(e)
    e.preventDefault();
    // console.log(e.key);
    key[e.key]=false;
}
const keyUp =(e)=>{
    e.preventDefault();
    // console.log(e.key);
    key[e.key]=true;
}
const gameplay=()=>{
    console.log('hey i am clicked ');
    if(player.start)
    window.requestAnimationFrame(gameplay);
}
const start=()=>{
    player.start=true;
    gameArea.classList.remove('hide')
    startScreen.classList.add('hide')
    const game =document.createElement('div');
    game.setAttribute('class','car');
    gameArea.appendChild(game);
    window.requestAnimationFrame(gameplay);
}
 document.addEventListener('keydown',keyDown);
 document.addEventListener('keyup',keyUp);
 startScreen.addEventListener('click',start);
