import { createNewElement } from '../../Utilities/Utilities.js'

export function Player2Component() {
    const imgElement = createNewElement('img', {src: './img/icons/googleIcon.svg'})
    // imgElement.addEventListener('click', catchGoogle)

    return imgElement
}
