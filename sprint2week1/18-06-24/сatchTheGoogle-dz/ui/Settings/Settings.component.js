import { getPoints, playAgain } from '../../data/state-manager.js'

export function SettingsComponent() {
    const element = document.createElement('div')

    const playNewGameButtonElement = document.createElement('button')
    playNewGameButtonElement.append('START')
    playNewGameButtonElement.addEventListener('click', () => {
        playAgain()
    })

    element.append(playNewGameButtonElement)

    return element
}