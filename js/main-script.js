console.log('OK');

// Constants
//==============================================//
const pieces = {
        king: {
            beats: ['queen', 'rook', 'bishop', 'knight', 'catapult'],
            flipped: false,
            imgUrl: ''
        },
        queen: {
            beats: ['rook', 'bishop', 'knight', 'pawn', 'catapult'],
            flipped: false,
            imgUrl: ''
        },
        rook: {
            beats: ['bishop', 'knight', 'pawn', 'catapult'],
            flipped: false,
            imgUrl: ''
        },
        bishop: {
            beats: ['knight', 'pawn', 'catapult'],
            flipped: false,
            imgUrl: ''
        },
        knight: {
            beats: ['pawn', 'catapult'],
            flipped: false,
            imgUrl: ''
        },
        pawn: {
            beats: ['king'],
            flipped: false,
            imgUrl: ''
        },
        catapult: {
            beats: ['king', 'queen', 'rook', 'bishop', 'knight', 'catapult', 'pawn'],
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


}

//Cached Elements
//==============================================//


//Event Listeners
//==============================================//


//Functions
//==============================================//
function init(){
    // needs to randomly distribute all pieces on the board faced down
    
    // needs to render the graphic element so the players can see the pieces
};

function move(){

};

function gridCheck(){

};

function canBeat(){

};