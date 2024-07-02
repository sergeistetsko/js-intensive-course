import { GAME_STATUSES } from '../../data/constans.js'
import { getGameStatus } from '../../data/state-manager.js'

export function createNewElement(tagName, attributes = {}) {
    const containerElement = document.createElement(tagName)

    for (const [name, value] of Object.entries(attributes)) {
        if (name === 'innerText') {
            containerElement.innerText = value
        } else {
            containerElement.setAttribute(name, value)
        }
    }
    return containerElement
}

export function createLineElement(innerText, options, id, selectedValue, onChangeHandler) {
    const lineElement = createNewElement('div', { class: 'line' })
    const labelElement = createNewElement('label', { class: 'label', innerText: innerText, for: id })
    const selectElement = createNewElement('select', { class: 'select', name: 'select', id })

    selectElement.addEventListener('change', onChangeHandler)

    options.forEach(({ value, innerText }) => {
        const optionElement = createNewElement('option', { value, innerText })
        if (parseInt(value) === selectedValue) {
            optionElement.selected = true
        }
        if (getGameStatus() === GAME_STATUSES.IN_PROGRESS) {
            optionElement.disabled = true
        }
        selectElement.append(optionElement)
    })

    lineElement.append(labelElement, selectElement)

    return [lineElement, selectElement]
}

