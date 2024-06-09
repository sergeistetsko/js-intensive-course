import { Counter } from './components/Counter/Counter.js'

export function render(data) {
    const root = document.getElementById('root')
    root.innerHTML = ''

    root.append(
        Counter(data)
    )
}