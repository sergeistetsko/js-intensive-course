import { increment, reset } from '../../../../../data/data.module.js'
import { Button } from './Button/Button.module.js'


export function ButtonsContainer(data) {
    const container = document.createElement('div')
    container.classList.add('buttons_container')
    container.append(
        Button('Увеличить', increment),
        Button('Сбросить', reset)
    )

    return container
}