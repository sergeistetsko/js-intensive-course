import { getPoints, playAgain } from '../../data/state-manager.js'

export function LoseComponent() {
    const parentDivElement = document.createElement('div')
    parentDivElement.classList.add('modal')
        
    const points = getPoints()

    const childDivElement1 = document.createElement('div')
    childDivElement1.classList.add('modal-decoration')

    const imgElement = document.createElement('img')
    imgElement.src = './img/icons/lossIcon.svg'
    imgElement.alt = 'icon'

    const childDivElement2 = document.createElement('div')
    childDivElement2.classList.add('modal-elements')

    const childDivElement21 = document.createElement('div')
    childDivElement21.classList.add('title-modal')
    childDivElement21.innerText = 'You Lose!'

    const childDivElement22 = document.createElement('div')
    childDivElement22.classList.add('text-modal')
    childDivElement22.innerText = 'You\'ll be lucky next time'

    const childDivElement231 = document.createElement('div')
    childDivElement231.classList.add('modal-result-block')

    const childSpanElement11 = document.createElement('span')
    childSpanElement11.classList.add('result-title')
    childSpanElement11.innerText = 'Catch: '

    const childSpanElement12 = document.createElement('span')
    childSpanElement12.classList.add('result')
    childSpanElement12.innerText = `${points.catch}`

    const childDivElement232 = document.createElement('div')
    childDivElement232.classList.add('modal-result-block')

    const childSpanElement21 = document.createElement('span')
    childSpanElement21.classList.add('result-title')
    childSpanElement21.innerText = 'Miss: '

    const childSpanElement22 = document.createElement('span')
    childSpanElement22.classList.add('result')
    childSpanElement22.innerText = `${points.miss}`

    const playAgainButtonElement = document.createElement('button')
    playAgainButtonElement.classList.add('button')
    playAgainButtonElement.append('Play again')
    playAgainButtonElement.addEventListener('click', () => {
        playAgain()
    })

    parentDivElement.append(
        childDivElement1,
        childDivElement2
    )
    childDivElement1.append(
        imgElement
    )
    childDivElement2.append(
        childDivElement21,
        childDivElement22,
        childDivElement231,
        childDivElement232,
        playAgainButtonElement
    )

    childDivElement231.append(
        childSpanElement11,
        childSpanElement12
    )

    childDivElement232.append(
        childSpanElement21,
        childSpanElement22
    )

    return parentDivElement
}