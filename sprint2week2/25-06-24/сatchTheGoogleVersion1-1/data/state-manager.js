import { GAME_STATUSES, DIRECTIONS } from './constans.js'

const _state = {
    gameStatus: GAME_STATUSES.SETTINGS,
    points: {
        google: 0,
        players: {
            '1': {
                id: 1,
                value: 0
            },
            '2': 
            {
                id: 2,
                value: 0
            }
        },
    },
    settings: {
        pointsToLose: 5,
        pointsToWin: 20,
        gridSize: 4,
    },
    gameTime: {
        minutes: 0,
        seconds: 0,
    },
    positions: {
        google: {
            x: 0,
            y: 0,
        },
        players: {
            '1': {x: 1, y: 0},
            '2': {x: 0, y: 1},
        }
    },
    onPause: false
}

let _observer = () => {}

export function subscribe(subscriber) {
    _observer = subscriber
}

function _getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
}

function _setGooglePosition(newX, newY) {
    _state.positions.google.x = newX
    _state.positions.google.y = newY
}

function _moveGoogleToRandomPosition() {
    const newX = _getRandomInt(_state.settings.gridSize)
    const newY = _getRandomInt(_state.settings.gridSize)

    if (_isCellOccupiedByGoogle({x: newX, y: newY})) {
        _moveGoogleToRandomPosition()
        return
    }

    if (_isCellOccupiedByPlayer({x: newX, y: newY})) {
        _moveGoogleToRandomPosition()
        return
    }

    _setGooglePosition(newX, newY)
}

let _intervalId

function _play() {
    // if (_state.onPause || _state.gameStatus !== GAME_STATUSES.IN_PROGRESS) return
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
        players: Object.values(_state.points.players).map(points => {return {...points}}),
        playersToWin: _state.settings.pointsToWin,
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

export function getTime() {
    return {
        minutes: _state.gameTime.minutes,
        seconds: _state.gameTime.seconds,
    }
}

// setter/command/mutation/side-effect
export function setGridSize(gridSize) {
    _state.settings.gridSize = gridSize
  }
export function setPointsToWin(pointsToWin) {
    _state.settings.pointsToWin = pointsToWin
  }
export function setPointsToLose(pointsToLose) {
    _state.settings.pointsToLose = pointsToLose
  }
export function setTime(newMin, newSec) {
    _state.gameTime.minutes = newMin
    _state.gameTime.seconds = newSec
}

export function startGame() {
    _state.gameStatus = GAME_STATUSES.IN_PROGRESS
    resetTime()
    startTime()
    _play()
    // _state.onPause = false
    _observer()
  }

export function playAgain() {
    _state.gameStatus = GAME_STATUSES.IN_PROGRESS
    _state.points.google = 0
    Array.from(_state.points.players).forEach(points => points.value = 0)
    resetTime()
    startTime()
    _play()
    // _state.onPause = false
    _observer()
}

export function movePlayer(id, direction) {
    // if (_state.gameStatus !== GAME_STATUSES.IN_PROGRESS || _state.onPause) return
    const position = _state.positions.players[id]
    const newPosition = {...position}

    const updater = {
        [DIRECTIONS.UP]: () => newPosition.y--,
        [DIRECTIONS.DOWN]: () => newPosition.y++,
        [DIRECTIONS.LEFT]: () => newPosition.x--,
        [DIRECTIONS.RIGHT]: () => newPosition.x++,
    }
    updater[direction]()

    // guard/validators/checker/
    if (!_isWithinBounds(newPosition)) return
    if (_isCellOccupiedByPlayer(newPosition)) return
    
    if (_isCellOccupiedByGoogle(newPosition)) {
        _catchGoogle(id)
    }

    _state.positions.players[id] = newPosition
    _observer()
}

function _isWithinBounds(positions) {
    const {x,y} = positions
    if (x < 0 || x > _state.settings.gridSize - 1) return false
    if (y < 0 || y > _state.settings.gridSize - 1) return false

    return true
}

function _isCellOccupiedByPlayer({x,y}) {
    if (x === getPlayerPositions()[0].x && y === getPlayerPositions()[0].y) {
        return true
    }
    if (x === getPlayerPositions()[1].x && y === getPlayerPositions()[1].y) {
        return true
    }
    return false
} 
function _isCellOccupiedByGoogle({x,y}) {
    if (x === getGooglePosition().x && y === getGooglePosition().y) {
        return true
    }
    return false
} 

if (GAME_STATUSES.SETTINGS && GAME_STATUSES.WIN && GAME_STATUSES.LOSE) {
    clearInterval(_intervalId)
    setTime()
}

let intervalId = null

export function startTime() {
    if (intervalId === null) {
        intervalId = setInterval(() => {
            let { minutes, seconds } = getTime()
            seconds += 1
            if (seconds >= 60) {
                seconds = 0
                minutes += 1
            }
            setTime(minutes, seconds)
        }, 1000)
    }
}

export function stopTime() {
    if (intervalId !== null) {
        clearInterval(intervalId)
        intervalId = null
    }
}

export function resetTime() {
    stopTime()
    setTime(0, 0)
}


// export function pauseGame() {
//     if (_state.gameStatus === GAME_STATUSES.IN_PROGRESS) {
//         _state.onPause = true
//         stopTime()
//         clearInterval(_intervalId)
//         _intervalId = null
//         _observer()
//     }
// }

// export function resumeGame() {
//     if (_state.onPause) {
//         _state.onPause = false
//         startTime()
//         _play()
//         _observer()
//     }
// }

    


