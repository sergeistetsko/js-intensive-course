import { createNewElement } from '../../Utilities/Utilities.js'

export function Player1Component() {
    const imgElement = createNewElement('img', {class: 'man01-icon', src: './img/icons/man01.svg'})

    return imgElement
}
