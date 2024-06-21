import { ResultPanelComponent } from './ResultPanel/ResultPanel.component.js'
import { getGameStatus } from '../data/state-manager.js'
import { GAME_STATUSES } from '../data/constans.js'
import { LoseComponent } from './Lose/Lose.component.js'
import { WinComponent } from './Win/Win.component.js'
import { GridComponent } from './Grid/Grid.component.js'
import { SettingsLineComponent } from './Settings/SettingsLine.component.js'
import { SettingsButtonComponent } from './Settings/SettingsButton.component.js'

export function AppComponent() {
    const element = document.createElement('div')
    element.classList.add('container')

    const status = getGameStatus()

    const transitions = {
        [GAME_STATUSES.IN_PROGRESS]: () => {
            const settingsLineElement = SettingsLineComponent()
            const resultPanelElement = ResultPanelComponent()
            const gridElement = GridComponent()
            element.append(
                settingsLineElement,
                resultPanelElement,
                gridElement
            )
        },
        [GAME_STATUSES.LOSE]: () => {
            const loseElement = LoseComponent()
            element.append(loseElement)
        },
        [GAME_STATUSES.SETTINGS]: () => {            
            const settingsLineElement = SettingsLineComponent()
            const settingsButtonElement = SettingsButtonComponent()
            element.append(
                settingsLineElement,
                settingsButtonElement
            )
        },
        [GAME_STATUSES.WIN]: () => {
            const winElement = WinComponent()
            element.append(winElement)
        },
    }

    transitions[status]()

    return element
}