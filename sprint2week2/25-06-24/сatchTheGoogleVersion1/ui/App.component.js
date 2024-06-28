import { GAME_STATUSES } from '../data/constans.js'
import { getGameStatus } from '../data/state-manager.js'

import { ResultPanelComponent } from './ResultPanel/ResultPanel.component.js'
import { SettingsLineComponent } from './Settings/SettingsLine.component.js'
import { SettingsButtonComponent } from './Settings/SettingsButton.component.js'
import { GridComponent } from './Grid/Grid.component.js'
import { LoseComponent } from './Lose/Lose.component.js'
import { WinComponent } from './Win/Win.component.js'

import { createNewElement } from './Utilities/Utilities.js'

export function AppComponent() {
    const sectionElement = createNewElement('section', { class: 'container'})    

    const status = getGameStatus()

    const transitions = {
        [GAME_STATUSES.IN_PROGRESS]: () => {
            sectionElement.append(
                SettingsLineComponent(), ResultPanelComponent(), GridComponent()
            )
        },
        [GAME_STATUSES.LOSE]: () => {
            sectionElement.append(LoseComponent())
        },
        [GAME_STATUSES.SETTINGS]: () => {            
            sectionElement.append(
                SettingsLineComponent(), SettingsButtonComponent()
            )
        },
        [GAME_STATUSES.WIN]: () => {
            sectionElement.append(WinComponent())
        },
    }

    transitions[status]()

    return sectionElement
}