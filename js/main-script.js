const testPrint = function(test){
    console.log(test);
};
// Constants
//==============================================//
const pieces = {
        king: {
            beats: ['king', 'queen', 'rook', 'bishop', 'knight', 'catapult'],
            flipped: false,
            imgUrl: 'img/1-king.png'
        },
        queen: {
            beats: ['queen', 'rook', 'bishop', 'knight', 'pawn', 'catapult'],
            flipped: false,
            imgUrl: 'img/2-queen.png'
        },
        rook: {
            beats: ['rook', 'bishop', 'knight', 'pawn', 'catapult'],
            flipped: false,
            imgUrl: 'img/3-rook.png'
        },
        bishop: {
            beats: ['bishop', 'knight', 'pawn', 'catapult'],
            flipped: false,
            imgUrl: 'img/4-bishop.png'
        },
        knight: {
            beats: ['knight', 'pawn', 'catapult'],
            flipped: false,
            imgUrl: 'img/5-knight.png'
        },
        pawn: {
            beats: ['pawn', 'king'],
            flipped: false,
            imgUrl: 'img/6-pawn.png'
        },
        catapult: {
            beats: ['king', 'queen', 'rook', 'bishop', 'knight', 'pawn', 'catapult'],
            flipped: false,
            imgUrl: '7-catapult.png'
        },
}

const table = {
    //pieces: ,
    //remainder: 
};

//State variables
//==============================================//
let turnCounter = true; //true = red's turn; false = blue's turn
let cellID;
let selectedPieceID; 
let selectedPiece; 
let occupantPieceID;
let occupantPiece;
let moveUpID;
let moveDownID;
let moveRightID;
let moveLeftID;
let footDiv;
let validMoveArr = [];

//Cached Elements
//==============================================//

const tableEl = document.querySelector('.main-board'); // the table element
const blueBox = document.querySelector('.blue-side');
const redBox = document.querySelector('.red-side');



//Functions
//==============================================//
function init(){
    // needs to randomly distribute all pieces on the board faced down
    
    // needs to render the graphic element so the players can see the pieces

    // 
    switchTurn(); 
};
init();

function switchTurn(){
    // select all pieces by using the color class
    // since querySelectorAll returns nodeList, we will need to iterate thr
    const redBtns = document.querySelectorAll('.red');
    const blueBtns = document.querySelectorAll('.blue');

    // setting the draggable attribute base on who's turn it is 
    if (turnCounter === true) {
        redBtns.forEach(function(rBtn){
            blueBtns.forEach(function(bBtn){
                bBtn.setAttribute('draggable', 'false');
            });
            rBtn.setAttribute('draggable', 'true');
        });
        redBox.style.border = '5px solid #c41e3d';
        blueBox.style.border = '5px solid #4c4c4c';
        turnCounter = false;
    } else if (turnCounter === false) {
        blueBtns.forEach(function(bBtn){
            redBtns.forEach(function(rBtn){
                rBtn.setAttribute('draggable', 'false');
            });
            bBtn.setAttribute('draggable', 'true');
        });
        redBox.style.border = '5px solid #4c4c4c';
        blueBox.style.border = '5px solid #5998c5';
        
        turnCounter = true;
    }
}

function moveableCells(cellID){
    moveUpID = parseInt(cellID) - 8;
    moveRightID = parseInt(cellID) + 1;
    moveDownID = parseInt(cellID) + 8;
    moveLeftID = parseInt(cellID) - 1;
    validMoveArr = [
        document.getElementById(moveUpID),
        document.getElementById(moveRightID),
        document.getElementById(moveDownID),
        document.getElementById(moveLeftID) 
    ];
    return validMoveArr;
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


for (const pieceBtn of document.querySelectorAll('button')){
        pieceBtn.addEventListener('dragstart', function(e){
            // e.dataTransfer.setData('text/plain', e.target.id);
            // selectedPieceID = e.dataTransfer.getData('text/plain')
            selectedPieceID = e.target.id;
            selectedPiece = document.getElementById(selectedPieceID);
    });
};

tableEl.addEventListener('dragstart', function(e){
    cellID = document.getElementById(e.target.id).parentElement.id;
    moveableCells(cellID);
    // moveUpID = parseInt(cellID) - 8;
    // moveRightID = parseInt(cellID) + 1;
    // moveDownID = parseInt(cellID) + 8;
    // moveLeftID = parseInt(cellID) - 1;
    // validMoveArr = [
    //     document.getElementById(moveUpID),
    //     document.getElementById(moveRightID),
    //     document.getElementById(moveDownID),
    //     document.getElementById(moveLeftID) 
    // ];
    for (const cells of validMoveArr){
        // change the opacity of the cell when a piece is dragged over it 
        cells.addEventListener('dragover', function(e){
            e.preventDefault();
            cells.style.opacity = '0.5'
        });
        // the drop function  
        cells.addEventListener('drop', function(e){
            e.preventDefault();          
            // conditional for moving to empty cell
            if (cells.children[0] == null) {
                cells.appendChild(selectedPiece);
            } else {
                occupantPieceID = cells.children[0].id;
            }
            if (pieces[selectedPieceID].beats.includes(occupantPieceID)) {
                cells.appendChild(selectedPiece);
                footDiv = document.querySelector('footer');
                occupantPiece = document.getElementById(occupantPieceID);
                footDiv.appendChild(occupantPiece);
                occupantPiece.setAttribute('draggable', 'false');
            }
        });
        // returns the opacity after the drag event leaves the cell
        cells.addEventListener('dragleave', function(e){
            cells.style.opacity = '1';
            validMoveArr = [];
        });

        cells.addEventListener('dragend', function(e){
            cells.style.opacity = '1';
            validMoveArr = [];
            switchTurn();
            console.log(turnCounter);
        });
    }
});





