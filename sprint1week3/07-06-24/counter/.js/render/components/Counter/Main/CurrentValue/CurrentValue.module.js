

export function CurrentValue(currentValue) {
    const container = document.createElement('div')
    container.classList.add('current-value')

    const spanElement = document.createElement('span')
    spanElement.innerText = currentValue

    container.append(
        spanElement
    )

    return container
}