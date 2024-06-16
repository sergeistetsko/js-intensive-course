import { data } from '../../data/data.js'

export function Header() {
    const h1Element = document.createElement('h1')

    h1Element.innerText = data.todolist.title

    return h1Element
}