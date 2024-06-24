import { setGridSize, setPointsToWin, setPointsToLose } from '../../data/state-manager.js'
import { GAME_SETTINGS } from '../../data/constans.js'

export function SettingsLineComponent() {
    
    const topItemsElement = document.createElement('div')
    topItemsElement.classList.add('top-items')

    const gridSizeLineElement = createLineElement(GAME_SETTINGS.GRID.TITLE, GAME_SETTINGS.GRID.SIZE, GAME_SETTINGS.GRID.ID)
    const pointsToWinLineElement = createLineElement(GAME_SETTINGS.POINTS_TO_WIN.TITLE, GAME_SETTINGS.POINTS_TO_WIN.VALUES, GAME_SETTINGS.POINTS_TO_WIN.ID)
    const pointsToLoseLineElement = createLineElement(GAME_SETTINGS.POINTS_TO_LOSE.TITLE, GAME_SETTINGS.POINTS_TO_LOSE.VALUES, GAME_SETTINGS.POINTS_TO_LOSE.ID)

    const switchButtonElement = document.createElement('div')
    switchButtonElement.classList.add('switch-button')

    const soundLabelElement = document.createElement('label')
    soundLabelElement.textContent = 'Sound on'

    const toggleButtonElement = document.createElement('button')
    toggleButtonElement.classList.add('toggle', 'on')
    toggleButtonElement.addEventListener('click', () => {
        toggleButtonElement.classList.remove('on')
    })

    const iconSliderElement = document.createElement('span')
    iconSliderElement.classList.add('icon-slider')

    toggleButtonElement.append(iconSliderElement)

    switchButtonElement.append(
        soundLabelElement,
        toggleButtonElement
    )

    topItemsElement.append(
        gridSizeLineElement,
        pointsToWinLineElement,
        pointsToLoseLineElement,
        switchButtonElement
    )

    function createLineElement(labelText, options, index) {
        const lineElement = document.createElement('div')
        lineElement.classList.add('line')

        const labelElement = document.createElement('label')
        labelElement.textContent = labelText
        
        labelElement.setAttribute('for', index)

        const selectElement = document.createElement('select')
        selectElement.name = 'select'
        selectElement.id = index

        if (index === '1') {
            selectElement.addEventListener('change', () => {
                const selectedOption = selectElement.value
                setGridSize(selectedOption)
            })
        } else if (index === '2') {
            selectElement.addEventListener('change', () => {
                const selectedOption = selectElement.value
                setPointsToWin(selectedOption)
            })
        } else {
            selectElement.addEventListener('change', () => {
                const selectedOption = selectElement.value
                setPointsToLose(selectedOption)
            })
        }

        options.forEach(optionText => {
            const optionElement = document.createElement('option')
            optionElement.value = optionText
            optionElement.textContent = optionText
            selectElement.append(optionElement)
        })

        lineElement.append(
            labelElement,
            selectElement
        )
        return lineElement
    }

    return topItemsElement
}

