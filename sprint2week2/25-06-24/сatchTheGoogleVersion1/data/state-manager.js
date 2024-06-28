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
    const newX = _getRandomInt(_state.settings.gridSize)
    const newY = _getRandomInt(_state.settings.gridSize)
  
    if (newX === _state.positions.googlePosition.x && newY === _state.positions.googlePosition.y) {
      _moveGoogleToRandomPosition()
  
      return
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
    return _state.settings.gridSize
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

export function setSettings(gridSize, pointsToWin, pointsToLose) {
    _state.settings.gridSize = gridSize
    _state.settings.pointsToWin = pointsToWin
    _state.settings.pointsToLose = pointsToLose
  }
    


