import { startGame } from '../../data/state-manager.js'

export function SettingsButtonComponent() {
    
    const divElement = document.createElement('div')
    divElement.classList.add('main-elements')

    const playButtonElement = document.createElement('button')
    playButtonElement.classList.add('button', 'main-button')
    playButtonElement.append('START GAME')
    playButtonElement.addEventListener('click', startGame)

    divElement.append(
        playButtonElement
    )

    return divElement
}