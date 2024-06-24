import { getPoints } from '../../data/state-manager.js'

export function ResultPanelComponent() {
    const resultContainer = createDivElement('result-container')
    const points = getPoints()

    const catchResultBlock = createDivElement('result-block')
    const catchTitle = createSpanElement('result-title', 'Catch: ')
    const catchResult = createSpanElement('result', `${points.catch}`)

    const missResultBlock = createDivElement('result-block')
    const missTitle = createSpanElement('result-title', 'Miss: ')
    const missResult = createSpanElement('result', `${points.miss}`)

    resultContainer.append(
        catchResultBlock,
        missResultBlock
        )
    catchResultBlock.append(
        catchTitle,
        catchResult
        )
    missResultBlock.append(
        missTitle,
        missResult
        )

    return resultContainer
}

function createDivElement(className) {
    const divElement = document.createElement('div');
    divElement.classList.add(className);
    return divElement;
}

function createSpanElement(className, text) {
    const spanElement = document.createElement('span');
    spanElement.classList.add(className);
    spanElement.innerText = text;
    return spanElement;
}