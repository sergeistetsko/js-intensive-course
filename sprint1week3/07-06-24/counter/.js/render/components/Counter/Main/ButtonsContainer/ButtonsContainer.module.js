import { Button } from './Button/Button.module.js'


export function ButtonsContainer(data) {
    const container = document.createElement('div')
    container.classList.add('buttons_container')
    container.append(
        Button('Увеличить'),
        Button('Сбросить')
    )

    return container
}