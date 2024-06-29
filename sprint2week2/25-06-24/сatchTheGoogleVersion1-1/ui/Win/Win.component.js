import { getPoints, getTime, playAgain } from '../../data/state-manager.js'
import { GAME_MESSAGES } from '../../data/constans-ui.js'
import { createNewElement } from '../Utilities/Utilities.js'

export function WinComponent() {
    const modalContainer = createNewElement('div', { class: 'modal' })

    const points = getPoints()
    const time = getTime()
    const players = points.players
    let winner

    for (const playerId in players) {
        if (players[playerId].value >= points.playersToWin) {
            winner = players[playerId]
            break
        }
    }

    const decorationElement = createNewElement('div', { class: 'modal-decoration' })

    const iconImageElement = createNewElement('img', {src: GAME_MESSAGES.WIN.ICON, alt: 'icon'})

    const elementsContainer = createNewElement('div', { class: 'modal-elements' })
    const titleElement = createNewElement('div', { class: 'title-modal', innerText: GAME_MESSAGES.WIN.TITLE })
    const textElement = createNewElement('div', { class: 'text-modal', innerText: `Player ${winner.id}`})
    
    const catchResultBlock = createNewElement('div', { class: 'modal-result-block' })    
    const catchTitle = createNewElement('span', { class: 'result-title', innerText: 'Catch: ' }) 
    const catchResult = createNewElement('span', { class: 'result', innerText: `${winner.value.toString()}` }) 
    
    const timeResultBlock = createNewElement('div', { class: 'modal-result-block' })    
    const timeTitle = createNewElement('span', { class: 'result-title', innerText: 'Time: ' }) 
    const timeResult = createNewElement('span', { class: 'result', innerText: `${(time.minutes).toString()}m ${Math.floor((time.seconds)).toString().padStart(2, '0')}s`}) 

    
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