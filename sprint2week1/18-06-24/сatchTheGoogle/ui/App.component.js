import { ResultPanelComponent } from './ResultPanel/ResultPanel.component.js'
import { getGameStatus } from '../data/state-manager.js'
import { GAME_STATUSES } from '../data/constans.js'
import { LoseComponent } from './Lose/Lose.component.js'

export function AppComponent() {
    const element = document.createElement('div')

    const status = getGameStatus()

    const transitions = {
        [GAME_STATUSES.IN_PROGRESS]: () => {
            const resultPanelElement = ResultPanelComponent()
            element.append(resultPanelElement)
        },
        [GAME_STATUSES.LOSE]: () => {
            const loseElement = LoseComponent()
            element.append(loseElement)
        },
        [GAME_STATUSES.SETTINGS]: () => {console.warn('NOT IMPLEMENTED YET')},
        [GAME_STATUSES.WIN]: () => {console.warn('NOT IMPLEMENTED YET')},
    }

    transitions[status]()

    return element
}