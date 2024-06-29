import { GAME_STATUSES } from './constans.js'

const _state = {
    gameStatus: GAME_STATUSES.SETTINGS,
    points: {
        google: 0,
        players: {
            '1': {id: 1, value: 0},
            '2': {id: 2, value: 0},
        },
    },
    settings: {
        pointsToLose: 5,
        pointsToWin: 20,
        gridSize: 4,
    },
    positions: {
        google: {
            x: 0,
            y: 0,
        },
        players: {
            '1': {x: 1, y: 1},
            '2': {x: 2, y: 2},
        }
    }
}

let _observer = () => {}

export function subscribe(subscriber) {
    _observer = subscriber
}

function _getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function _setGooglePosition(newX, newY) {
    _state.positions.google.x = newX
    _state.positions.google.y = newY
}

function _moveGoogleToRandomPosition() {
    const newX = _getRandomInt(_state.settings.gridSize)
    const newY = _getRandomInt(_state.settings.gridSize)

    if (newX === _state.positions.google.x && newY === _state.positions.google.y) {
        _moveGoogleToRandomPosition()
        return
    }
    _setGooglePosition(newX, newY)
}

let _intervalId

function _play() {
    _intervalId = setInterval(() => {
        _state.points.google++
    if (_state.points.google === _state.settings.pointsToLose) {
        clearInterval(_intervalId)
        _state.gameStatus = GAME_STATUSES.LOSE
    } else {
        _moveGoogleToRandomPosition()
    }
        _observer()
    }, 2000)
}

function _catchGoogle(playerId) {
    const points = _state.points.players[playerId]
    points.value++
    if (points.value === _state.settings.pointsToWin) {
        clearInterval(_intervalId)
        _state.gameStatus = GAME_STATUSES.WIN
    } else {
        _moveGoogleToRandomPosition()
        clearInterval(_intervalId)
        _play()
    }
        _observer()
}

// getter/selector/query/CQS/mapper

export function getPoints() {
    return {
        google: _state.points.google,
        players: Object.values(_state.points.players).map(points => {
            return {...points}
    }),
    }
}

export function getGameStatus() {
    return _state.gameStatus
}

export function getGridSize() {
    return { 
        x: _state.settings.gridSize,
        y: _state.settings.gridSize
    }
}

export function getGooglePosition() {
    return { 
        x: _state.positions.google.x,
        y: _state.positions.google.y
    }
}

export function getPlayerPositions() {
    return Object.values(_state.positions.players).map(position => {
        return {...position}
    })
}

export function getSettings() {
    return {
      gridSize: _state.settings.gridSize,
      pointsToWin: _state.settings.pointsToWin,
      pointsToLose: _state.settings.pointsToLose,
    }
  }

// setter/command/mutation/side-effect

export function startGame() {
    _state.gameStatus = GAME_STATUSES.IN_PROGRESS
    _play()
    _observer()
  }

export function playAgain() {
    _state.gameStatus = GAME_STATUSES.IN_PROGRESS
    _state.points.google = 0
    _state.points.players.forEach(points => points.value = 0)
    _play()
    _observer()
}

export function setGridSize(gridSize) {
    _state.settings.gridSize = gridSize
  }
export function setPointsToWin(pointsToWin) {
    _state.settings.pointsToWin = pointsToWin
  }
export function setPointsToLose(pointsToLose) {
    _state.settings.pointsToLose = pointsToLose
  }
    


