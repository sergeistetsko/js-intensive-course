import { createNewElement } from '../../Utilities/Utilities.js'

export function Player2Component() {
    const imgElement = createNewElement('img', {src: './img/icons/man02.svg'})
    // imgElement.addEventListener('click', catchGoogle)

    return imgElement
}
