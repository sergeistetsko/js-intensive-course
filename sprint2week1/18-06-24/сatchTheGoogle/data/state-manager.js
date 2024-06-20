import { GAME_STATUSES } from './constans.js'

const _state = {
    gameStatus: GAME_STATUSES.IN_PROGRESS,
    points: {
        miss: 0,
        catch: 0,
    },
    settings: {
        pointsToLose: 30,
        pointsToWin: 5,
        gridSize: {
            width: 4,
            height: 4,
        }
    },
    positions: {
        googlePosition: {
            x: 3,
            y: 3
        }
    }
}

let _observer = () => {}

export function subscribe(subscriber) {
    _observer = subscriber
}

function _play() {
    let _intervalId = setInterval(() => {
        _state.points.miss++
    
    if (_state.points.miss === _state.settings.pointsToLose) {
        clearInterval(_intervalId)
        _state.gameStatus = GAME_STATUSES.LOSE
    }
    
        _observer()
    }, 1000)
}

_play()

// getter/selector/query/CQS/mapper

export function getPoints() {
    return {
        miss: _state.points.miss,
        catch: _state.points.catch,
    }
}

export function getGameStatus() {
    return _state.gameStatus
}

export function getGridSize() {
    return { 
        height: _state.settings.gridSize.height,
        width: _state.settings.gridSize.width,
    }
}

export function getGooglePosition() {
    return { 
        x: _state.positions.googlePosition.x,
        y: _state.positions.googlePosition.y
    }
}

// setter/command/mutation/side-effect
export function playAgain() {
    _state.gameStatus = GAME_STATUSES.IN_PROGRESS
    _state.points.catch = 0
    _state.points.miss = 0
    _play()
    _observer()
}


