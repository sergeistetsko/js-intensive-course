import { getPoints, getTime } from '../../data/state-manager.js'
import { Player1Component } from '../Grid/Player1/Player1.component.js'
import { Player2Component } from '../Grid/Player2/Player2.component.js'
import { GoogleComponent } from '../Grid/Google/Google.component.js'
import { createNewElement } from '../Utilities/Utilities.js'

export function ResultPanelComponent() {
    const resultContainer = createNewElement('div', { class: 'result-container'})

    const points = getPoints()
    const time = getTime()

    const player1ResultBlock = createNewElement('div', { class: 'result-block'})    
    const player1Title = createNewElement('span', { class: 'result-title', innerText: 'Player 1'}) 
    const player1Result = createNewElement('span', { class: 'result', innerText: `${points.players[0].value}`})
    const player1Icon = Player1Component() 
    
    const player2ResultBlock = createNewElement('div', { class: 'result-block'})    
    const player2Title = createNewElement('span', { class: 'result-title', innerText: 'Player 2'}) 
    const player2Result = createNewElement('span', { class: 'result', innerText: `${points.players[1].value}`}) 
    const player2Icon = Player2Component() 

    const googleResultBlock = createNewElement('div', { class: 'result-block'})    
    const googleTitle = createNewElement('span', { class: 'result-title', innerText: 'Google'}) 
    const googleResult = createNewElement('span', { class: 'result', innerText: `${points.google}`}) 
    const googleIcon = GoogleComponent()

    const timeResultBlock = createNewElement('div', { class: 'result-block'})    
    const timeTitle = createNewElement('span', { class: 'result-title', innerText: 'Time: '})
    const timeResult = createNewElement('span', { class: 'result', innerText: `${Math.floor(time.minutes).toString().padStart(2, '0')}:${Math.floor(time.seconds).toString().padStart(2, '0')}`}) 

    player1ResultBlock.append(
        player1Title, player1Icon, player1Result
        )
    player2ResultBlock.append(
        player2Title, player2Icon, player2Result
        )
    googleResultBlock.append(
        googleTitle, googleIcon, googleResult
        )
    timeResultBlock.append(
        timeTitle, timeResult
        )
    resultContainer.append(
            player1ResultBlock, player2ResultBlock, googleResultBlock, timeResultBlock
        )
    return resultContainer
}