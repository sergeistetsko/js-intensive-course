import { getPoints } from '../../data/state-manager.js'
import { createNewElement } from '../Utilities/Utilities.js'

export function ResultPanelComponent() {
    const resultContainer = createNewElement('div', { class: 'result-container'})

    const points = getPoints()

    const catchResultBlock = createNewElement('div', { class: 'result-block'})    
    const catchTitle = createNewElement('span', { class: 'result-title', innerText: 'Catch: '}) 
    const catchResult = createNewElement('span', { class: 'result', innerText: `${points.catch}`}) 
    
    const missResultBlock = createNewElement('div', { class: 'result-block'})    
    const missTitle = createNewElement('span', { class: 'result-title', innerText: 'Miss: '}) 
    const missResult = createNewElement('span', { class: 'result', innerText: `${points.miss}`}) 

    resultContainer.append(
        catchResultBlock, missResultBlock
        )
    catchResultBlock.append(
        catchTitle, catchResult
        )
    missResultBlock.append(
        missTitle, missResult
        )

    return resultContainer
}