import { getGooglePosition, getGridSize } from '../../data/state-manager.js'
import { GoogleComponent } from './Google/Google.component.js'
import { createNewElement } from '../Utilities/Utilities.js'

export function GridComponent() {
    const tableElement = createNewElement('table', { class: 'table' })

    const gridSize = getGridSize()

    const googlePosition = getGooglePosition()

    for (let y = 0; y < gridSize; y++) {
        const rowElement = document.createElement('tr')

        for (let x = 0; x < gridSize; x++) {
            const cellElement = createNewElement('td', { class: 'cell'})

            if (googlePosition.x === x && googlePosition.y === y) {
                cellElement.append(GoogleComponent())
            }
            rowElement.append(cellElement)
        }
        tableElement.append(rowElement)
    }
    return tableElement
}