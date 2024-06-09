export function Header() {
    const header = document.createElement('header')

    const headerContainer = document.createElement('div')
    headerContainer.classList.add('header-container')

    const headerImage = document.createElement('img')
    headerImage.src = './img/logo/logo.svg'

    const headerLogo = document.createElement('div')
    headerLogo.innerText = 'InPlayer'
    headerLogo.classList.add('logo-name')

    headerContainer.append(
        headerImage,
        headerLogo
    )
    header.append(headerContainer)

    return header
}