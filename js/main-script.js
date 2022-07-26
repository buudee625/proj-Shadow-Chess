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
let selectedPiece; 
let occupantPieceID;
let occupantPiece;
let moveUpID;
let moveDownID;
let moveRightID;
let moveLeftID;
let footDiv;
let validMoveCell = [];

// const pieceElm = document.querySelector('.piece-btn');
// console.log(pieceEl);

for (const pieceBtn of document.querySelectorAll('.piece-btn')){
        pieceBtn.addEventListener('dragstart', function(e){
            e.dataTransfer.setData('text/plain', e.target.id);
            selectedPieceID = e.dataTransfer.getData('text/plain')
            selectedPiece = document.getElementById(selectedPieceID);
    });
};


tableEl.addEventListener('dragstart', function(e){
    cellID = document.getElementById(e.target.id).parentElement.id;
    moveUpID = parseInt(cellID) - 8;
    moveRightID = parseInt(cellID) + 1;
    moveDownID = parseInt(cellID) + 8;
    moveLeftID = parseInt(cellID) - 1;
    validMoveCells = [
        document.getElementById(moveUpID),
        document.getElementById(moveRightID),
        document.getElementById(moveDownID),
        document.getElementById(moveLeftID) 
    ];

    for (const cells of validMoveCells){
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
                if (pieces[selectedPieceID].beats.includes(occupantPieceID)) {
                    cells.appendChild(selectedPiece);
                    footDiv = document.querySelector('footer');
                    occupantPiece = document.getElementById(occupantPieceID);
                    footDiv.appendChild(occupantPiece);
                    occupantPiece.setAttribute('draggable', 'false');
                }
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




