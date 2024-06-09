import { CurrentValue } from './CurrentValue/CurrentValue.module.js'

export function Main(data) {
    const container = document.createElement('main')
    container.classList.add('main')
    container.append(
        CurrentValue(data.currentValue)
    )

    return container
}