import { startGame } from '../../data/state-manager.js'
import { createNewElement } from '../Utilities/Utilities.js'

export function SettingsButtonComponent() {

    const divElement = createNewElement('div', { class: 'main-elements'})
    const playButtonElement = createNewElement('button', {class: 'button main-button', innerText: 'START GAME'})
    playButtonElement.addEventListener('click', startGame)

    divElement.append(
        playButtonElement
    )

    return divElement
}