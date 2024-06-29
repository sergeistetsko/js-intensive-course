import { AppComponent } from './ui/App.component.js'
import { subscribe } from './data/state-manager.js'
import { bindKeyboardsControlPlayer1, bindKeyboardsControlPlayer2 } from './ui/Controls/Controls.js'

const rootElement = document.getElementById('root')

function renderApp() {
    rootElement.innerHTML = ''

    const appElement = AppComponent()

    rootElement.append(appElement)
}

renderApp()

bindKeyboardsControlPlayer1()
bindKeyboardsControlPlayer2()

subscribe(renderApp)
