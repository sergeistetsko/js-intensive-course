export const GAME_SETTINGS = {
    GRID: {
        ID: 'grid-size',
        TITLE: 'Grid size',
        SIZE: [
            { value: '4', innerText: '4x4' },
            { value: '5', innerText: '5x5' },
            { value: '6', innerText: '6x6' },
            { value: '7', innerText: '7x7' },
            { value: '8', innerText: '8x8' },
        ]
    },
    POINTS_TO_WIN: {
        ID: 'points-to-win',
        TITLE: 'Points to win',
        VALUES: [
            { value: '20', innerText: '20 pts' },
            { value: '40', innerText: '40 pts' },
            { value: '50', innerText: '50 pts' },
            { value: '60', innerText: '60 pts' },
            { value: '80', innerText: '80 pts' },
          ]
    },
    POINTS_TO_LOSE: {
        ID: 'points-to-lose',
        TITLE: 'Points to lose',
        VALUES: [
            { value: '5', innerText: '5 pts' },
            { value: '10', innerText: '10 pts' },
            { value: '15', innerText: '15 pts' },
            { value: '20', innerText: '20 pts' },
            { value: '25', innerText: '25 pts' },
          ]
    }
}

export const GAME_MESSAGES = {
    WIN: {
        TITLE: 'You Win!',
        ICON: './img/icons/winnerIcon.svg',
        MESSAGE: 'You\'re awesome!'
    },
    LOSE: {
        TITLE: 'Google Win!',
        ICON: './img/icons/lossIcon.svg',
        MESSAGE: 'You\'ll be lucky next time'
    }
}