export function AddTrackPanel() {
    const container = document.createElement('div')
    container.classList.add('add-track-panel')

    const title = document.createElement('h3')
    title.innerText = 'Tracks'
    title.classList.add('tracklist-title')

    const addTrackButton = document.createElement('button')
    addTrackButton.classList.add('button-add-track')

    const addTrackButtonImg = document.createElement('img')
    addTrackButtonImg.src = './img/icons/add.svg'

    addTrackButton.append(
        addTrackButtonImg,
        'Add Track'
    )

    container.append(
        title,
        addTrackButton
    )

    return container
}