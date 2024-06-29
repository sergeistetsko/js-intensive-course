import { getPoints, playAgain } from '../../data/state-manager.js'
import { GAME_MESSAGES } from '../../data/constans-ui.js'
import { createNewElement } from '../Utilities/Utilities.js'
import { updateTime } from '../Time/Time.js'

export function WinComponent() {
    const modalContainer = createNewElement('div', { class: 'modal' })

    const points = getPoints()
    const time = updateTime()

    const decorationElement = createNewElement('div', { class: 'modal-decoration' })

    const iconImageElement = createNewElement('img', {src: GAME_MESSAGES.WIN.ICON, alt: 'icon'})

    const elementsContainer = createNewElement('div', { class: 'modal-elements' })
    const titleElement = createNewElement('div', { class: 'title-modal', innerText: GAME_MESSAGES.WIN.TITLE })
    const textElement = createNewElement('div', { class: 'text-modal', innerText: `${GAME_MESSAGES.WIN.TEXT[0]}`})

    const catchResultBlock = createNewElement('div', { class: 'modal-result-block' })    
    const catchTitle = createNewElement('span', { class: 'result-title', innerText: 'Catch: ' }) 

    const catchResult = createNewElement('span', { class: 'result', innerText: `${points.players['1'].value.toString()}` }) 
    
    const timeResultBlock = createNewElement('div', { class: 'modal-result-block' })    
    const timeTitle = createNewElement('span', { class: 'result-title', innerText: 'Time: ' }) 
    const timeResult = createNewElement('span', { class: 'result', innerText: `${time}` }) 

    const playAgainButton = createNewElement('button', { class: 'button', innerText: 'Play again'})
    playAgainButton.addEventListener('click', playAgain)

    modalContainer.append(
        decorationElement, elementsContainer
        )
    decorationElement.append(iconImageElement)
    elementsContainer.append(
        titleElement, textElement, catchResultBlock, timeResultBlock, playAgainButton
    )

    catchResultBlock.append(
        catchTitle, catchResult
        )
    timeResultBlock.append(
        timeTitle, timeResult
        )

    return modalContainer
}