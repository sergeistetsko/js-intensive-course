import { createNewElement } from '../Utilities/Utilities.js'

export function HintComponent() {

    const hintBlockElement = createNewElement('div', { class: 'hint-block'})
    const hintIconElement = createNewElement('img', { src: './img/icons/hint-icon.svg', alt: 'icon'})
    const hintTitleElement = createNewElement('p', { class: 'hint-title', innerText: 'Control is done with “arrows for player 1” and “WASD for player 2”'})
    const hintButtonElement = createNewElement('button', { class: 'hint-button', innerText: 'OK'})

    hintButtonElement.addEventListener('click', hide)

    function hide() {
        hintBlockElement.style.display = 'none'
    }

    hintBlockElement.append(
        hintIconElement, hintTitleElement, hintButtonElement
    )
    return hintBlockElement
}

