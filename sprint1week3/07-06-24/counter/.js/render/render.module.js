import { Counter } from './components/Counter/Counter.js'

export function render(data) {
    const root = document.getElementById('root')

    root.append(
        Counter(data)
    )
}