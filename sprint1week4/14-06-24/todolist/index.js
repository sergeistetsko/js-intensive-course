import { subscribe } from './data/data.js'
import { Todolist } from './render/Todolist.js'


const root = document.getElementById('root')

function render() {
    root.innerHTML = ''
    root.append(Todolist())
}

render()
subscribe(render)