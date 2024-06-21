import { getPoints, playAgain } from '../../data/state-manager.js'

export function WinComponent() {
    const element = document.createElement('div')
    
    const points = getPoints()

    const titleElement = document.createElement('h1')
    titleElement.append('You win')

    element.append(titleElement)
    element.append(`catch: ${points.catch}; miss: ${points.miss}`)

    const playAgainButtonElement = document.createElement('button')
    playAgainButtonElement.append('Play again')
    playAgainButtonElement.addEventListener('click', () => {
        playAgain()
    })

    element.append(playAgainButtonElement)

    return element
}