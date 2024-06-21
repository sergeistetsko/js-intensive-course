import { getPoints } from '../../data/state-manager.js'

export function ResultPanelComponent() {
    const parentElement = document.createElement('div')
    parentElement.classList.add('result-container')

    const points = getPoints()

    const childElement1 = document.createElement('div')
    childElement1.classList.add('result-block')

    const titleElement1 = document.createElement('span')
    titleElement1.classList.add('result-title')
    titleElement1.innerText = 'Catch: '

    const valueElement1 = document.createElement('span')
    valueElement1.classList.add('result')
    valueElement1.innerText = `${points.catch}`

    parentElement.append(
        childElement1
    )
    childElement1.append(
        titleElement1,
        valueElement1
    )
    const childElement2 = document.createElement('div')
    childElement2.classList.add('result-block')

    const titleElement2 = document.createElement('span')
    titleElement2.classList.add('result-title')
    titleElement2.innerText = 'Miss: '

    const valueElement2 = document.createElement('span')
    valueElement2.classList.add('result')
    valueElement2.innerText = `${points.miss}`

    parentElement.append(
        childElement2
    )
    childElement2.append(
        titleElement2,
        valueElement2
    )

    return parentElement
}