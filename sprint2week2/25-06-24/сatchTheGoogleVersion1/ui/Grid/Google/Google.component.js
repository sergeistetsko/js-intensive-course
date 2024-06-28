import { catchGoogle } from '../../../data/state-manager.js'

export function GoogleComponent() {
    const imgElement = document.createElement('img')

    imgElement.src = './img/icons/googleIcon.svg'
    imgElement.addEventListener('click', catchGoogle)

    return imgElement
}
