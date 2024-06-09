import { render } from '../render/render.module.js'

export const data = {
    maxValue: 10,
    currentValue: 3
}

function increment() {
    if (data.currentValue < data.maxValue) {
        data.currentValue = data.currentValue + 1
    }
    render(data)
}

setInterval(increment, 1000)