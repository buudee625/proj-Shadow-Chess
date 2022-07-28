const testPrint = function(test){
    console.log(test, `<--${test}`);
};
// Constants
//==============================================//
const pieces = {
        king: {
            beats: ['queen', 'rook', 'bishop', 'knight', 'catapult'],
            flipped: false,
            imgUrl: 'img/1-king.png'
        },
        queen: {
            beats: ['rook', 'bishop', 'knight', 'pawn', 'catapult'],
            flipped: false,
            imgUrl: 'img/2-queen.png'
        },
        rook: {
            beats: ['bishop', 'knight', 'pawn', 'catapult'],
            flipped: false,
            imgUrl: 'img/3-rook.png'
        },
        bishop: {
            beats: ['knight', 'pawn', 'catapult'],
            flipped: false,
            imgUrl: 'img/4-bishop.png'
        },
        knight: {
            beats: ['pawn', 'catapult'],
            flipped: false,
            imgUrl: 'img/5-knight.png'
        },
        pawn: {
            beats: ['king'],
            flipped: false,
            imgUrl: 'img/6-pawn.png'
        },
        catapult: {
            beats: ['king', 'queen', 'rook', 'bishop', 'knight', 'pawn', 'catapult'],
            flipped: false,
            imgUrl: '7-catapult.png'
        },
}

//State variables
//==============================================//
let turnCounter = true; //true = red's turn; false = blue's turn
let pieceCounterRed = 0;
let pieceCounterBlue = 0;
let cellID;
let selectedPieceID; 
let selectedPiece; 
let occupantPieceID;
let occupantPiece;
let moveUpID;
let moveDownID;
let moveRightID;
let moveLeftID;
let validMoveArr = [];

//Cached Elements
//==============================================//
const boardEl = document.querySelector('.main-board'); // the main game board
const defeatZone = document.querySelector('.defeat-zone'); // defeat zone
const blueBox = document.querySelector('.blue-side'); // player's box
const redBox = document.querySelector('.red-side'); 
const bSideMid = document.querySelector('.b-side-mid') // players' selected piece
const rSideMid = document.querySelector('.r-side-mid') 
const bSideBottom = document.querySelector('.b-side-bottom') // players' remainder count
const rSideBottom = document.querySelector('.r-side-bottom')




//Functions
//==============================================//
function init(){
    // determines who goes first by using a random boolean generator
    const randomBool = Math.random() < 0.5;
    turnCounter = randomBool;
    switchTurn();
    if (turnCounter == true) {
        alert('Bloom goes first!');
    } else {
        alert('Redd goes first!');
    }
    // needs to randomly distribute all pieces on the board faced down (Not implemented)
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
    pieceCounter();
    gameRef();
}
function moveableCells(cellID){
    // determining the available cells a selected piece can move to base on the piece's location on the board
    moveUpID = parseInt(cellID) - 8;
    moveRightID = parseInt(cellID) + 1;
    moveDownID = parseInt(cellID) + 8;
    moveLeftID = parseInt(cellID) - 1;

    if (cellID == 1) {
        validMoveArr = [
            document.getElementById(moveRightID),
            document.getElementById(moveDownID)
        ];
    } else if (cellID == 8) {
        validMoveArr = [
            document.getElementById(moveDownID),
            document.getElementById(moveLeftID) 
        ];
    } else if (cellID == 25) {
        validMoveArr = [
            document.getElementById(moveUpID),
            document.getElementById(moveRightID)
        ];
    } else if (cellID == 32) {
        validMoveArr = [
            document.getElementById(moveUpID),
            document.getElementById(moveLeftID) 
        ];
    } else if (cellID == 9 || cellID == 17) {
        validMoveArr = [
            document.getElementById(moveUpID),
            document.getElementById(moveRightID),
            document.getElementById(moveDownID)
        ];
    } else if (cellID == 16 || cellID == 24) {
        validMoveArr = [
            document.getElementById(moveUpID),
            document.getElementById(moveDownID),
            document.getElementById(moveLeftID) 
        ];
    } else if (1 < cellID && cellID < 8) {
        validMoveArr = [
            document.getElementById(moveRightID),
            document.getElementById(moveDownID),
            document.getElementById(moveLeftID) 
        ];
    } else if (25 < cellID && cellID < 32 ) {
        validMoveArr = [
            document.getElementById(moveUpID),
            document.getElementById(moveRightID),
            document.getElementById(moveLeftID) 
        ];
    } else {
    validMoveArr = [
        document.getElementById(moveUpID),
        document.getElementById(moveRightID),
        document.getElementById(moveDownID),
        document.getElementById(moveLeftID) 
    ]};
    console.log(validMoveArr);
    return validMoveArr;
};

function pieceCounter(){
    pieceCounterRed = document.querySelectorAll('.red').length;
    pieceCounterBlue = document.querySelectorAll('.blue').length;
};

function renderText() {
    rSideBottom.innerText = `'Remaining: 
    ${pieceCounterRed}`;
    bSideBottom.innerText = `Remaining: 
    ${pieceCounterBlue}`;
    if (turnCounter == false) {
        rSideMid.innerText = selectedPieceID
    } else {
        bSideMid.innerText = selectedPieceID
    };
};

function gameRef(){
    if (pieceCounterRed == 0) {
        alert('Bloom emerges victorious!');
    } else if (pieceCounterBlue == 0) {
        alert('Redd emerges victorious!');
    }
}

//Event Listeners
//==============================================//

// everything starts with the dragstart event. when it occurs, the code needs to identify what piece was being dragged and set it to an variable because all of the following logic requires the knowledge of which piece was selected
for (const pieceBtn of document.querySelectorAll('button')){
        pieceBtn.addEventListener('dragstart', function(e){
            // e.dataTransfer.setData('text/plain', e.target.id);
            // selectedPieceID = e.dataTransfer.getData('text/plain')
            selectedPieceID = e.target.id;
            selectedPiece = document.getElementById(selectedPieceID);
            renderText();
    });
};

boardEl.addEventListener('dragstart', function(e){
    // when a dragstart event occurs, identify the cell's ID by using the piece element that was dragged
    cellID = document.getElementById(e.target.id).parentElement.id;
    // call the function to determine which cells need to listen to the rest of the drag/drop events 
    moveableCells(cellID);
    // the array is then passed into a loop to listen for the drag/drop events
    for (const cells of validMoveArr){
        // change the opacity of the cell when a piece is dragged over it 
        cells.addEventListener('dragover', function(e){
            e.preventDefault();
            cells.style.opacity = '0.5'
        });
        // the drop function which requires multiple layers of logics

        cells.addEventListener('drop', function(e){
            e.preventDefault();          
             // 1st, determine whether or not the destination cell (DC) is empty
            if (cells.children[0] == null) {
                // if the target cell has no child element, append the selected piece
                cells.appendChild(selectedPiece);
                switchTurn();
            // 2nd, if DC is occupied, is it a friendly piece or enemy piece?
            } else if (cells.children[0].classList == selectedPiece.classList) {
                alert('That would be our own troop chief!');
            // 3rd, if it's an enemy piece, can user's selected piece beat the occupant piece?
            } else {
                // grab the child element's ID but since .children returns a HTMLCollection, we have to index into the first element (No cells should have more than one child). 
                occupantPieceID = cells.children[0].id;
                // apply defeat logic by running thru the piece object
                if (pieces[selectedPieceID].beats.includes(occupantPieceID)) {
                    occupantPiece = document.getElementById(occupantPieceID);
                    cells.appendChild(selectedPiece);
                    defeatZone.appendChild(occupantPiece);
                    if (occupantPiece.classList[0] == 'red') {
                        occupantPiece.classList.replace('red', 'defeated-red');
                        switchTurn();
                    } else {
                        occupantPiece.classList.replace('blue', 'defeated-blue');
                        switchTurn();
                    }
                } else if (selectedPieceID == occupantPieceID) {
                    occupantPieceID = "";
                } else {
                    alert('We cannot best this enemy chief!')
                    cells.style.opacity = '1';
                }
            };   
        });
        // returns the opacity after the drag event leaves the cell
        cells.addEventListener('dragleave', function(e){
            cells.style.opacity = '1';
        });

        cells.addEventListener('dragend', function(e){
            cells.style.opacity = '1';
        });   
    }
});





// List of problems:
// self destructing behavior
// pieces all have the same ID so there is no way the code is differetiating red/blue pieces
// when mulitple of the same pieces are present on the board the code breaks 