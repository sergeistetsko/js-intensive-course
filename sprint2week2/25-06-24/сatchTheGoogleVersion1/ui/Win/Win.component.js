import { getPoints, playAgain } from '../../data/state-manager.js'
import { GAME_MESSAGES } from '../../data/constans-ui.js'
import { createNewElement } from '../Utilities/Utilities.js'

export function WinComponent() {
    const modalContainer = createNewElement('div', { class: 'modal' })
    const points = getPoints()

    const decorationElement = createNewElement('div', { class: 'modal-decoration' })

    const iconImageElement = document.createElement('img')
    iconImageElement.src = GAME_MESSAGES.WIN.ICON
    iconImageElement.alt = 'icon'

    const elementsContainer = createNewElement('div', { class: 'modal-elements' })
    const titleElement = createNewElement('div', { class: 'title-modal', innerText: GAME_MESSAGES.WIN.TITLE })
    const textElement = createNewElement('div', { class: 'text-modal', innerText: GAME_MESSAGES.WIN.TEXT })

    const catchResultBlock = createNewElement('div', { class: 'modal-result-block' })    
    const catchTitle = createNewElement('span', { class: 'result-title', innerText: 'Catch: ' }) 
    const catchResult = createNewElement('span', { class: 'result', innerText: `${points.catch}` }) 
    
    const missResultBlock = createNewElement('div', { class: 'modal-result-block' })    
    const missTitle = createNewElement('span', { class: 'result-title', innerText: 'Miss: ' }) 
    const missResult = createNewElement('span', { class: 'result', innerText: `${points.miss}` }) 

    const playAgainButton = createNewElement('button', { class: 'button', innerText: 'Play again'})
    playAgainButton.addEventListener('click', playAgain)

    modalContainer.append(
        decorationElement, elementsContainer
        )
    decorationElement.append(iconImageElement)
    elementsContainer.append(
        titleElement, textElement, catchResultBlock, missResultBlock, playAgainButton
    )

    catchResultBlock.append(
        catchTitle, catchResult
        )
    missResultBlock.append(
        missTitle, missResult
        )

    return modalContainer
}