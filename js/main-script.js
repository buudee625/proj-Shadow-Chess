const testPrint = function(test){
    console.log(test);
};
// Constants
//==============================================//
const pieces = {
        king: {
            beats: ['king', 'queen', 'rook', 'bishop', 'knight', 'catapult'],
            flipped: false,
            imgUrl: ''
        },
        queen: {
            beats: ['queen', 'rook', 'bishop', 'knight', 'pawn', 'catapult'],
            flipped: false,
            imgUrl: ''
        },
        rook: {
            beats: ['rook', 'bishop', 'knight', 'pawn', 'catapult'],
            flipped: false,
            imgUrl: ''
        },
        bishop: {
            beats: ['bishop', 'knight', 'pawn', 'catapult'],
            flipped: false,
            imgUrl: ''
        },
        knight: {
            beats: ['knight', 'pawn', 'catapult'],
            flipped: false,
            imgUrl: ''
        },
        pawn: {
            beats: ['pawn', 'king'],
            flipped: false,
            imgUrl: ''
        },
        catapult: {
            beats: ['king', 'queen', 'rook', 'bishop', 'knight', 'pawn', 'catapult'],
            flipped: false,
            imgUrl: ''
        },
}

const table = {
    //pieces: ,
    //remainder: 
};

//State variables
//==============================================//
let redPlayer = {
    urTurn: true,
};

const bluePlayer = {
    urTurn: false,
};

//Cached Elements
//==============================================//

const tableEl = document.querySelector('.main-board') // the table
const cellEl = document.querySelectorAll('td') // all cells
let pieceEl = document.querySelectorAll('button') // all playable pieces



//Functions
//==============================================//


function init(){
    // needs to randomly distribute all pieces on the board faced down
    
    // needs to render the graphic element so the players can see the pieces
};

function selectPiece(){
    document.querySelector(e.target)
}

function move(){

};

function gridCheck(){

};

function canBeat(){

};

//Event Listeners
//==============================================//
let elmID;
let cellID;
let btnID;
let elmClass; 
let elmPiece;
let selectedCell;
let selectedPiece; 
tableEl.addEventListener('click', function(e){
    elmID = e.target.id;
    elmClass = e.target.className;
    if (e.target.classList.contains('piece-btn')) {
        selectedPiece = document.getElementById(elmID);
    }
    selectedCell = document.getElementById(elmID);
    selectedCell.appendChild(selectedPiece);

    // testPrint(selectedCell);
    // testPrint(elmClass);
});








// 1. click a piece element, grabs the element by using event listner 

// 2. click a cell, append the grabbed piece to the cell identified by its ID


