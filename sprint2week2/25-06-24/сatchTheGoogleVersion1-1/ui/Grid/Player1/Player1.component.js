import { createNewElement } from '../../Utilities/Utilities.js'

export function Player1Component() {
    const imgElement = createNewElement('img', {src: './img/icons/man01.svg'})
    // imgElement.addEventListener('click', catchGoogle)

    return imgElement
}
