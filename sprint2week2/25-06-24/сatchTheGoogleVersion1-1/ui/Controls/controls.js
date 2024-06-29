import { DIRECTIONS } from '../../data/constans.js'
import { movePlayer } from '../../data/state-manager.js'

export function bindKeyboardsControlPlayer1() {
    window.addEventListener('keyup', (e) => {
        switch (e.code) {
            case 'ArrowUp': {
                movePlayer(1, DIRECTIONS.UP)
                break
            }
            case 'ArrowDown': {
                movePlayer(1, DIRECTIONS.DOWN)
                break
            }
            case 'ArrowLeft': {
                movePlayer(1, DIRECTIONS.LEFT)
                break
            }
            case 'ArrowRight': {
                movePlayer(1, DIRECTIONS.RIGHT)
                break
            }
        }
    })
}
export function bindKeyboardsControlPlayer2() {
    window.addEventListener('keyup', (e) => {
        switch (e.code) {
            case 'KeyW': {
                movePlayer(2, DIRECTIONS.UP)
                break
            }
            case 'KeyS': {
                movePlayer(2, DIRECTIONS.DOWN)
                break
            }
            case 'KeyA': {
                movePlayer(2, DIRECTIONS.LEFT)
                break
            }
            case 'KeyD': {
                movePlayer(2, DIRECTIONS.RIGHT)
                break
            }
        }
    })
}