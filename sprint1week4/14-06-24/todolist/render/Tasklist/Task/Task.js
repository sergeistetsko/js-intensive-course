import { Button } from '../../common/Button/Button.js'
import { deleteTask, openEditTaskDialog } from '../../../data/data.js'

export function Task(task) {
    const container = document.createElement('li')

    container.append(
        task.title,
        Button('del', () => {
            deleteTask(task.id)
        }),
        Button('edit', () => {
            openEditTaskDialog(task.id, task.title)
        })
    )

    return container
}