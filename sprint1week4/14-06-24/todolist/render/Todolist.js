import { AddNewTaskDialog } from './AddNewTaskDialog/AddNewTaskDialog.js'
import { EditTaskDialog } from './EditTaskDialog/EditTaskDialog.js'
import { Header } from './Header/Header.js'
import { Tasklist } from './Tasklist/Tasklist.js'
import { data, openAddNewTaskDialog } from '../data/data.js'
import { Button } from './common/Button/Button.js'

export function Todolist() {
    const container = document.createElement('div')

    container.append(
        Header(),
        Tasklist(),
        AddNewTaskDialog(),
        EditTaskDialog(),
        Button('add', () => {
            openAddNewTaskDialog()
        })
    )

    return container
}