export function createDivElement(className) {
    const divElement = document.createElement('div')
    divElement.classList.add(className)
    return divElement
}

export function createSpanElement(className, text) {
    const spanElement = document.createElement('span')
    spanElement.classList.add(className)
    spanElement.innerText = text
    return spanElement
}