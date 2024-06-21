import { playAgain } from '../../data/state-manager.js'

export function SettingsComponent() {
    const element = document.createElement('div')
    element.classList.add('main-elements')

    const playNewGameButtonElement = document.createElement('button')
    playNewGameButtonElement.classList.add('button', 'main-button')
    playNewGameButtonElement.append('START GAME')
    playNewGameButtonElement.addEventListener('click', () => {
        playAgain()
    })

    element.append(playNewGameButtonElement)

    return element
}