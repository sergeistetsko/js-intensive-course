import { getGooglePosition, getGridSize, getPlayerPositions } from '../../data/state-manager.js'
import { GoogleComponent } from './Google/Google.component.js'
import { Player1Component } from './Player1/Player1.component.js'
import { Player2Component } from './Player2/Player2.component.js'
import { createNewElement } from '../Utilities/Utilities.js'

export function GridComponent() {
    const tableElement = createNewElement('table', { class: 'table' })

    const gridSize = getGridSize()
    const googlePosition = getGooglePosition()
    const playerPositions = getPlayerPositions()

    for (let y = 0; y < gridSize.y; y++) {
        const rowElement = document.createElement('tr')

        for (let x = 0; x < gridSize.x; x++) {
            const cellElement = createNewElement('td', { class: 'cell'})

            if (googlePosition.x === x && googlePosition.y === y) {
                cellElement.append(GoogleComponent())
            }

            if (playerPositions[0].x === x && playerPositions[0].y === y) {
                cellElement.append(Player1Component())
            }

            if (playerPositions[1].x === x && playerPositions[1].y === y) {
                cellElement.append(Player2Component())
            }

            rowElement.append(cellElement)
        }

        

        tableElement.append(rowElement)
    }
    return tableElement
}