import { getPoints, playAgain, getTime } from '../../data/state-manager.js'
import { GAME_MESSAGES } from '../../data/constans-ui.js'
import { createNewElement } from '../Utilities/Utilities.js'

export function LoseComponent() {
    const modalContainer = createNewElement('div', { class: 'modal' })

    const points = getPoints()
    const time = getTime()

    const decorationElement = createNewElement('div', { class: 'modal-decoration' })

    const iconImageElement = createNewElement('img', {src: GAME_MESSAGES.LOSE.ICON, alt: 'icon'})

    const elementsContainer = createNewElement('div', { class: 'modal-elements' })
    const titleElement = createNewElement('div', { class: 'title-modal', innerText: GAME_MESSAGES.LOSE.TITLE })
    const textElement = createNewElement('div', { class: 'text-modal', innerText: GAME_MESSAGES.LOSE.MESSAGE })
    
    const catchResultBlock = createNewElement('div', { class: 'modal-result-block' })    
    const catchTitle = createNewElement('span', { class: 'result-title', innerText: 'Catch: ' }) 
    const catchResult = createNewElement('span', { class: 'result', innerText: points.google.toString() }) 
    
    const missResultBlock = createNewElement('div', { class: 'modal-result-block' })    
    const missTitle = createNewElement('span', { class: 'result-title', innerText: 'Time: ' }) 
    const missResult = createNewElement('span', { class: 'result', innerText: `${(time.minutes).toString()}m ${Math.floor((time.seconds)).toString().padStart(2, '0')}s` }) 

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