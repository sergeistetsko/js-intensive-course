import { getGooglePosition, getGridSize } from '../../data/state-manager.js'
import { GoogleComponent } from './Google/Google.component.js'

export function GridComponent() {
    const element = document.createElement('table')
    element.classList.add('table')

    const gridSize = getGridSize()
    const googlePosition = getGooglePosition()

    for (let y = 0; y < gridSize.height; y++) {
        const rowElement = document.createElement('tr')

        for (let x = 0; x < gridSize.width; x++) {
            const cellElement = document.createElement('td')
            cellElement.classList.add('cell')
            if (googlePosition.x === x && googlePosition.y === y) {
                cellElement.append(GoogleComponent())
            }
            rowElement.append(cellElement)
        }
        element.append(rowElement)
    }

    return element
}