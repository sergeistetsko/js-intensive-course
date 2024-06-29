import { createNewElement } from '../../Utilities/Utilities.js'

export function Player2Component() {
    const imgElement = createNewElement('img', {class: 'man02-icon', src: './img/icons/man02.svg'})

    return imgElement
}
