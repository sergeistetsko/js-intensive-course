import { getPoints } from '../../data/state-manager.js'
import { createNewElement } from '../Utilities/Utilities.js'

export function ResultPanelComponent() {
    const resultContainer = createNewElement('div', { class: 'result-container'})

    const points = getPoints()

    const player1ResultBlock = createNewElement('div', { class: 'result-block'})    
    const player1Title = createNewElement('span', { class: 'result-title', innerText: 'Player 1: '}) 
    const player1Result = createNewElement('span', { class: 'result', innerText: `${points.players[0].value}`}) 
    
    const player2ResultBlock = createNewElement('div', { class: 'result-block'})    
    const player2Title = createNewElement('span', { class: 'result-title', innerText: 'Player 2: '}) 
    const player2Result = createNewElement('span', { class: 'result', innerText: `${points.players[1].value}`}) 
    
    const googleResultBlock = createNewElement('div', { class: 'result-block'})    
    const googleTitle = createNewElement('span', { class: 'result-title', innerText: 'Google : '}) 
    const googleResult = createNewElement('span', { class: 'result', innerText: `${points.google}`}) 

    resultContainer.append(
        player1ResultBlock, player2ResultBlock, googleResultBlock
        )
    player1ResultBlock.append(
        player1Title, player1Result
        )
    player2ResultBlock.append(
        player2Title, player2Result
        )
    googleResultBlock.append(
        googleTitle, googleResult
        )

    return resultContainer
}