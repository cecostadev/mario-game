const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const modal = document.getElementById('myModal');
const newGame = document.querySelector('.new-game');
const pipeStartPosition = pipe.offsetLeft;
const marioStartPosition = +window.getComputedStyle(mario).bottom.replace('px','');

let points = 0;
let pointsSpan = document.querySelector('.score');
let canScore = true;

const jump = () => {
    mario.classList.add('jump');
    
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const reload = () => {
    window.location.reload(true);
}

const loop = setInterval(()=> {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

    if(pipePosition <= 80 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.src= './images/game-over.png';
        mario.style.width = '70px';
        modal.style.display = 'block';

        pointsSpan.textContent = points;

        clearInterval(loop);

        newGame.addEventListener('click', reload);

    } else if(pipePosition <= 80 && pipePosition > 0 && marioPosition == 140  && canScore){
        points++;
        canScore = false;
    }

    if (pipePosition <= 0) {
        canScore = true;
    }
})

document.addEventListener('keydown', jump);