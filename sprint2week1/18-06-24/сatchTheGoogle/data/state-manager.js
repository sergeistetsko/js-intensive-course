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
            width: 2,
            height: 2,
        }
    },
    positions: {
        googlePosition: {
            x: 0,
            y: 0
        }
    }
}

let _observer = () => {}

export function subscribe(subscriber) {
    _observer = subscriber
}

function _getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
}

function _moveGoogleToRandomPosition() {
    const newX = _getRandomInt(_state.settings.gridSize.width)
    const newY = _getRandomInt(_state.settings.gridSize.height)

    if (newX === _state.positions.googlePosition.x && newY === _state.positions.googlePosition.y) {
        _moveGoogleToRandomPosition()
        return 
    }
    _state.positions.googlePosition.x = newX
    _state.positions.googlePosition.y = newY
}

function _play() {
    let _intervalId = setInterval(() => {
        _state.points.miss++
    
    if (_state.points.miss === _state.settings.pointsToLose) {
        clearInterval(_intervalId)
        _state.gameStatus = GAME_STATUSES.LOSE
    } else {
        _moveGoogleToRandomPosition()
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


