import { Header } from './Header/Header.module.js'

export function Counter(data) {
    const container = document.createElement('div')
    container.classList.add('counter')
    container.append(
        Header(data.maxValue)
    )

    return container
}