import { catchGoogle } from '../../../data/state-manager.js'
import { createNewElement } from '../../Utilities/Utilities.js'

export function GoogleComponent() {
    const imgElement = createNewElement('img', {src: './img/icons/googleIcon.svg'})
    imgElement.addEventListener('click', catchGoogle)

    return imgElement
}
