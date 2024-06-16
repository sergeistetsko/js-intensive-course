import { Button } from '../../common/Button/Button.js'

export function Task(task) {
    const container = document.createElement('li')

    container.append(
        task.title,
        Button('delete', () => {})
    )

    return container
}