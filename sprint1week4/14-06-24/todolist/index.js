import { Todolist } from './render/Todolist.js'

const root = document.getElementById('root')

function render() {
    root.append(Todolist())
}

render()