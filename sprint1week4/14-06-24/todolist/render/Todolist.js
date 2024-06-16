import { Header } from './Header/Header.js'
import { Tasklist } from './Tasklist/Tasklist.js'

export function Todolist() {
    const container = document.createElement('div')

    container.append(
        Header(),
        Tasklist()
    )

    return container
}