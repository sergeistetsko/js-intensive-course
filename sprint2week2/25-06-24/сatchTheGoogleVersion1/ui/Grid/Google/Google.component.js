import { catchGoogle } from '../../../data/state-manager.js'

export function GoogleComponent() {
    const element = document.createElement('img')

    element.src = './img/icons/googleIcon.svg'
    element.addEventListener('click', () => {
        catchGoogle()
    })

    return element
}
