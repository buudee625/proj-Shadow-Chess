console.log('OK');

const pieces = {
    red: {
        king: {
            beats: ['queen', 'rook', 'bishop', 'knight', 'catapult'],
            count: 1
        },
        queen: {
            beats: ['rook', 'bishop', 'knight', 'pawn', 'catapult'],
            count: 2
        },
        rook: {
            beats: ['bishop', 'knight', 'pawn', 'catapult'],
            count: 2
        },
        bishop: {
            beats: ['knight', 'pawn', 'catapult'],
            count: 2
        },
        knight: {
            beats: ['pawn', 'catapult'],
            count: 2
        },
        pawn: {
            beats: ['king'],
            count: 5
        },
        catapult: {
            beats: ['king', 'queen', 'rook', 'bishop', 'knight', 'catapult', 'pawn'],
            count: 2
        },
    },
    black: {
        king: {
            beats: ['queen', 'rook', 'bishop', 'knight', 'catapult'],
            count: 1
        },
        queen: {
            beats: ['rook', 'bishop', 'knight', 'pawn', 'catapult'],
            count: 2
        },
        rook: {
            beats: ['bishop', 'knight', 'pawn', 'catapult'],
            count: 2
        },
        bishop: {
            beats: ['knight', 'pawn', 'catapult'],
            count: 2
        },
        knight: {
            beats: ['pawn', 'catapult'],
            count: 2
        },
        pawn: {
            beats: ['king'],
            count: 5
        },
        catapult: {
            beats: ['king', 'queen', 'rook', 'bishop', 'knight', 'catapult', 'pawn'],
            count: 2
        },
    }
}