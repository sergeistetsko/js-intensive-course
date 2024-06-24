import { getPoints, playAgain } from '../../data/state-manager.js'
import { GAME_MESSAGES } from '../../data/constans.js'

export function LoseComponent() {
    const modalContainer = createDivElement('modal')
    const points = getPoints()

    const decoration = createDivElement('modal-decoration')
    const iconImage = document.createElement('img')
    iconImage.src = GAME_MESSAGES.LOSE.ICON
    iconImage.alt = 'icon'

    const elementsContainer = createDivElement('modal-elements')
    const title = createDivElement('title-modal')
    title.innerText = GAME_MESSAGES.LOSE.TITLE

    const text = createDivElement('text-modal')
    text.innerText = GAME_MESSAGES.LOSE.TEXT

    const catchResultBlock = createDivElement('modal-result-block')
    const catchTitle = createSpanElement('result-title', 'Catch: ')
    const catchResult = createSpanElement('result', `${points.catch}`)

    const missResultBlock = createDivElement('modal-result-block')
    const missTitle = createSpanElement('result-title', 'Miss: ')
    const missResult = createSpanElement('result', `${points.miss}`)

    const playAgainButton = document.createElement('button')
    playAgainButton.classList.add('button')
    playAgainButton.append('Play again')
    playAgainButton.addEventListener('click', playAgain)

    modalContainer.append(
        decoration,
        elementsContainer
        )
    decoration.append(iconImage)
    elementsContainer.append(
        title,
        text,
        catchResultBlock,
        missResultBlock,
        playAgainButton
    )

    catchResultBlock.append(
        catchTitle,
        catchResult
        )
    missResultBlock.append(
        missTitle,
        missResult
        )

    return modalContainer
}

function createDivElement(className) {
    const divElement = document.createElement('div')
    divElement.classList.add(className)
    return divElement
}

function createSpanElement(className, text) {
    const spanElement = document.createElement('span')
    spanElement.classList.add(className)
    spanElement.innerText = text
    return spanElement
}