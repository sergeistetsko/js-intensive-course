export function ButtonsEditDelete() {
    const buttonsContainer = document.createElement('div')
    buttonsContainer.classList.add('buttons-container')

    const editBtn = document.createElement('button')
    const editBtnImg = document.createElement('img')
    editBtnImg.src = './img/icons/edit.svg'
    editBtn.append(editBtnImg)

    const delBtn = document.createElement('button')
    const delBtnImg = document.createElement('img')
    delBtnImg.src = './img/icons/basket.svg'
    delBtn.append(editBtnImg)

    buttonsContainer.append(
        editBtn,
        delBtn
    )

    return buttonsContainer
}