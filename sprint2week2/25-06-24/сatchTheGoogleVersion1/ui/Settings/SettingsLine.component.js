import { setGridSize, setPointsToWin, setPointsToLose, getSettings } from '../../data/state-manager.js'
import { GAME_SETTINGS } from '../../data/constans-ui.js'
import { createLineElement, createNewElement } from '../Utilities/Utilities.js'

export function SettingsLineComponent() {
    const topItemsElement = createNewElement('article', { class: 'top-items'})

    const { gridSize, pointsToWin, pointsToLose } = getSettings()

    const handleSettingChangeGrid = () => setGridSize(parseInt(gridSizeLineElement.value))
    const handleSettingChangePointsToWin = () => setPointsToWin(parseInt(pointsToWinLineElement.value))
    const handleSettingChangePointsToLose = () => setPointsToLose(parseInt(pointsToLoseLineElement.value))

    const gridSizeLineElement = createLineElement(GAME_SETTINGS.GRID.TITLE, GAME_SETTINGS.GRID.SIZE[0].value, GAME_SETTINGS.GRID.ID, gridSize, handleSettingChangeGrid)
    const pointsToWinLineElement = createLineElement(GAME_SETTINGS.POINTS_TO_WIN.TITLE, GAME_SETTINGS.POINTS_TO_WIN.VALUES[0].value, GAME_SETTINGS.POINTS_TO_WIN.ID, pointsToWin, handleSettingChangePointsToWin)
    const pointsToLoseLineElement = createLineElement(GAME_SETTINGS.POINTS_TO_LOSE.TITLE, GAME_SETTINGS.POINTS_TO_LOSE.VALUES[0].value, GAME_SETTINGS.POINTS_TO_LOSE.ID, pointsToLose, handleSettingChangePointsToLose)

    const switchButtonElement = createNewElement('div', { class: 'switch-button'})
    const soundLabelElement = createNewElement('label', { class: 'label', innerText: 'Sound on'})
    const toggleButtonElement = createNewElement('button', { class: 'toggle on'})

    toggleButtonElement.addEventListener('click', () => {
            toggleButtonElement.classList.toggle('on')
    })

    const iconSliderElement = createNewElement('span', { class: 'icon-slider'})

    toggleButtonElement.append(iconSliderElement)
    switchButtonElement.append(
        soundLabelElement, toggleButtonElement
    )
    topItemsElement.append(
        gridSizeLineElement, pointsToWinLineElement, pointsToLoseLineElement, switchButtonElement
    )
    return topItemsElement
}

