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
        gridSize: 4
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
        const newX = _getRandomInt(_state.settings.gridSize)
        const newY = newX

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
        _state.points.miss++
    if (_state.points.miss === _state.settings.pointsToLose) {
        clearInterval(_intervalId)
        _state.gameStatus = GAME_STATUSES.LOSE
    } else {
        _moveGoogleToRandomPosition()
    }
        _observer()
    }, 2000)
}

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
        height: _state.settings.gridSize,
        width: _state.settings.gridSize,
    }
}

export function getGooglePosition() {
    return { 
        x: _state.positions.googlePosition.x,
        y: _state.positions.googlePosition.y
    }
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

export function setGridSize(gridSize) {
    const [width, height] = gridSize
    _state.settings.gridSize.width = width
    _state.settings.gridSize.height = height
}

export function setPointsToWin(pointsToWin) {
    _state.settings.pointsToWin = pointsToWin
}

export function setPointsToLose(pointsToLose) {
    _state.settings.pointsToLose = pointsToLose
}
// export function setGridSize(gridSize) {
//     const [width, height] = gridSize.split('x').map(Number)
//     _state.settings.gridSize.width = width
//     _state.settings.gridSize.height = height
// }

// export function setPointsToWin(pointsToWin) {
//     _state.settings.pointsToWin = parseInt(pointsToWin.replace(/\D/g, ''))
// }

// export function setPointsToLose(pointsToLose) {
//     _state.settings.pointsToLose = parseInt(pointsToLose.replace(/\D/g, ''))
// }


    


