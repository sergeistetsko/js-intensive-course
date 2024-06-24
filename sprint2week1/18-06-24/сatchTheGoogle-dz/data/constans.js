export const GAME_STATUSES = {
    SETTINGS: 'settings',
    IN_PROGRESS: 'in-progress',
    WIN: 'win',
    LOSE: 'lose'
}

export const GAME_SETTINGS = {
    GRID: {
        ID: '1',
        TITLE: 'Grid size',
        SIZE: ['4x4', '5x5', '6x6', '7x7', '8x8']
    },
    POINTS_TO_WIN: {
        ID: '2',
        TITLE: 'Points to win',
        VALUES: ['20 pts', '40 pts', '50 pts', '60 pts', '80 pts']
    },
    POINTS_TO_LOSE: {
        ID: '3',
        TITLE: 'Points to lose',
        VALUES: ['5 pts', '10 pts', '15 pts', '20 pts', '25 pts']
    }
}

export const GAME_MESSAGES = {
    WIN: {
        TITLE: 'You win!',
        ICON: './img/icons/winnerIcon.svg',
        MESSAGE: 'You\'re awesome!'
    },
    LOSE: {
        TITLE: 'You lose!',
        ICON: './img/icons/lossIcon.svg',
        MESSAGE: 'You\'ll be lucky next time'
    }
}