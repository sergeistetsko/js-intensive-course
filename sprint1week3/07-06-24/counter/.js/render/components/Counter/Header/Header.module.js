export function Header(maxValue) {
    const container = document.createElement('header')
    container.classList.add('header')
    container.innerText = `MAX VALUE: ${maxValue}`

    return container
}