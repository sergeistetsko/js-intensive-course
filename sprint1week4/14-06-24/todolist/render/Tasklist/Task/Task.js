import { Button } from '../../common/Button/Button.js'
import { deleteTask } from '../../../data/data.js'

export function Task(task) {
    const container = document.createElement('li')

    container.append(
        task.title,
        Button('delete', () => {
            deleteTask(task.id)
        })
    )

    return container
}