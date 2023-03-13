const GAME_PIECES = [
    "pierre",
    "feuille",
    "ciseaux"
]

const WIN_CONDITION = {
    "pierre": "ciseaux",
    "feuille": "pierre",
    "ciseaux": "feuille"
}

let human_score = 0;
let ia_score = 0;

let gameButtons = document.querySelectorAll('.game-button');

const IA_GAME_CONTENT = document.querySelector('#ia-game-content');
const HUMAN_GAME_CONTENT = document.querySelector('#human-game-content');

const HUMAN_SCORE_CONTENT = document.querySelector('#human-score');
const IA_SCORE_CONTENT = document.querySelector('#ia-score');

gameButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        purge(HUMAN_GAME_CONTENT, IA_GAME_CONTENT)

        let type = e.target.getAttribute('data-name');
        let humanGameContent = document.createElement('p');
        humanGameContent.innerText = type;
        HUMAN_GAME_CONTENT.appendChild(humanGameContent);

        let iaType = GAME_PIECES[getRandomInt(3)];
        let iaGameContent = document.createElement('p');
        iaGameContent.innerText = iaType;
        IA_GAME_CONTENT.appendChild(iaGameContent);

        let gameResult = checkWin(iaType, type);
        if (gameResult === 0) {
            console.log('égalité');
        } else if (gameResult === 1) {
            IA_SCORE_CONTENT.innerHTML = ia_score;
        } else if (gameResult === 2) {
            HUMAN_SCORE_CONTENT.innerHTML = human_score
        }
    })
})

function checkWin(iaType, humanType) {

    if (iaType === humanType) return 0;

    if (WIN_CONDITION[iaType] == humanType) {
        ia_score++;
        return 1;
    } else {
        human_score++;
        return 2;
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function purge(human, ia) {
    human.innerHTML = "";
    ia.innerHTML = "";
}


