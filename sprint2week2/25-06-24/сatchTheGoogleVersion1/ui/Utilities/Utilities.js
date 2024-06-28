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
    const lineElement = document.createNewElement('div', { class: 'line' })
    const labelElement = document.createNewElement('label', { class: 'label', innerText, for: id })
    const selectElement = document.createElement('select', { class: 'select', name: 'select', id })
    
    selectElement.addEventListener('change', onChangeHandler)

    options.forEach((value, innerText) => {
        const optionElement = document.createNewElement('option', { value, innerText })
        if (parseInt(value) === selectedValue) {
            optionElement.selected = true
        }
        selectElement.append(optionElement)
    })

    lineElement.append(
        labelElement, selectElement
    )
    return lineElement
}