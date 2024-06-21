import { GAME_STATUSES } from './constans.js'

const _state = {
    gameStatus: GAME_STATUSES.SETTINGS,
    points: {
        miss: 0,
        catch: 0,
    },
    settings: {
        pointsToLose: 5,
        pointsToWin: 20,
        gridSize: {
            width: 4,
            height: 4,
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
    const maxAttempts = 10
    let attempts = 0

    while (attempts < maxAttempts) {
        const newX = _getRandomInt(_state.settings.gridSize.width)
        const newY = _getRandomInt(_state.settings.gridSize.height)

        if (newX !== _state.positions.googlePosition.x || newY !== _state.positions.googlePosition.y) {
            _state.positions.googlePosition.x = newX
            _state.positions.googlePosition.y = newY
            return
        }
        attempts++
    }
}

let _intervalId

function _play() {
    _intervalId = setInterval(() => {
    if (_state.gameStatus === GAME_STATUSES.IN_PROGRESS) {
        _state.points.miss++
    } 
    if (_state.points.miss === _state.settings.pointsToLose) {
        clearInterval(_intervalId)
        _state.gameStatus = GAME_STATUSES.LOSE
    } else {
        _moveGoogleToRandomPosition()
    }
        _observer()
    }, 3000)
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

export function getPointsToWin() {
    return _state.settings.pointsToWin
}

export function getPointsToLose() {
    return _state.settings.pointsToLose
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

export function catchGoogle() {
    _state.points.catch++
    if (_state.points.catch === _state.settings.pointsToWin) {
        clearInterval(_intervalId)
        _state.gameStatus = GAME_STATUSES.WIN
    } else {
        _moveGoogleToRandomPosition()
        clearInterval(_intervalId)
        _play()
    }
        _observer()
}


