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
const allCellsEl = document.querySelectorAll('td') // all cells
let pieceEl = document.querySelectorAll('button') // all playable pieces


//Functions
//==============================================//


function init(){
    // needs to randomly distribute all pieces on the board faced down
    
    // needs to render the graphic element so the players can see the pieces

    //  
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
let selectedPieceID; 
let occupantPieceID;

// const pieceElm = document.querySelector('.piece-btn');
// console.log(pieceEl);

for (const pieceBtn of document.querySelectorAll('.piece-btn')){
        pieceBtn.addEventListener('dragstart', function(e){
            e.dataTransfer.setData('text/plain', e.target.id);
            selectedPieceID = e.target.id;
    });
};

let moveUpID;
let moveDownID;
let moveRightID;
let moveLeftID;
tableEl.addEventListener('dragstart', function(e){
    cellID = document.getElementById(e.target.id).parentElement.id;
    moveUpID = parseInt(cellID) - 8;
    moveRightID = parseInt(cellID) + 1;
    moveDownID = parseInt(cellID) + 8;
    moveLeftID = parseInt(cellID) - 1;
    let validMoveCells = [
        document.getElementById(moveUpID),
        document.getElementById(moveRightID),
        document.getElementById(moveDownID),
        document.getElementById(moveLeftID) 
    ];
    console.log(validMoveCells)

    for (const cells of validMoveCells){
        // change the opacity of the cell when a piece is dragged over it 
        cells.addEventListener('dragover', function(e){
            e.preventDefault();
            cells.style.opacity = '0.5'
            
    
        });
        // the drop function  
        cells.addEventListener('drop', function(e){
            e.preventDefault();
            // when the drop event occurs, defines the id of the element and store it in a variable as a string
            const droppedPieceId = e.dataTransfer.getData('text/plain');
            // use this id to select it so it can be appended by using .appendChild()
            const droppedPiece = document.getElementById(droppedPieceId);

            occupantPieceID = cells.children[0].id;
            if (pieces[selectedPieceID].beats.includes(occupantPieceID)) {
                cells.appendChild(droppedPiece);
            }

            
        });
        // returns the opacity after the drag event leaves the cell
        cells.addEventListener('dragleave', function(e){
            cells.style.opacity = '1';
            validMoveCells = [];
        });
        cells.addEventListener('dragend', function(e){
            cells.style.opacity = '1';
            validMoveCells = [];
        });
        
    }
    
});







// Moving logic (may not be used)
//==============================================//
// tableEl.addEventListener('click', function(e){
    
//     elmClass = e.target.className;
//     if (e.target.classList.contains('piece-btn')) {
//         elmID = e.target.id;
//         selectedPiece = document.getElementById(elmID);
//         console.log('button selected')
//     } else if (e.target.classList.contains('cell')) {
//         elmID = e.target.id;
//         selectedCell = document.getElementById(elmID);
//         console.log('cell selected')
//     };
//     if (selectedPiece !== undefined && selectedCell !== undefined) {
//         console.log(selectedPiece, '< selected piece');
//         console.log(selectedCell, '< seelected cell');
//         selectedCell.appendChild(selectedPiece);
        
//     };

    // testPrint(selectedCell);
    // testPrint(elmClass);
// });




