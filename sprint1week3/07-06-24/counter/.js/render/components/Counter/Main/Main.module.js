import { ButtonsContainer } from './ButtonsContainer/ButtonsContainer.module.js'
import { CurrentValue } from './CurrentValue/CurrentValue.module.js'
import { ProgressBar } from './ProgressBar/ProgressBar.module.js'

export function Main(data) {
    const container = document.createElement('main')
    container.classList.add('main')
    container.append(
        CurrentValue(data.currentValue),
        ProgressBar(data),
        ButtonsContainer()
    )

    return container
}