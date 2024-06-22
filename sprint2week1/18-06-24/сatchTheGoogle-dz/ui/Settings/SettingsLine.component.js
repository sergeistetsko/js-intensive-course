import { setGridSize, setPointsToWin, setPointsToLose } from '../../data/state-manager.js'

export function SettingsLineComponent() {
    
    const topItems = document.createElement('div')
    topItems.classList.add('top-items')

    const gridSizeLine = createLine('Grid size', ['4x4', '5x5', '6x6', '7x7', '8x8'], '1')
    const pointsToWinLine = createLine('Points to win', ['20 pts', '40 pts', '50 pts', '60 pts', '80 pts'], '2')
    const pointsToLoseLine = createLine('Points to lose', ['5 pts', '10 pts', '15 pts', '20 pts', '25 pts'], '3')

    const switchButton = document.createElement('div')
    switchButton.classList.add('switch-button')

    const soundLabel = document.createElement('label')
    soundLabel.textContent = 'Sound on'

    const toggleButton = document.createElement('button')
    toggleButton.classList.add('toggle', 'on')
    toggleButton.addEventListener('click', () => {
        toggleButton.classList.remove('on')
    })

    const iconSlider = document.createElement('span')
    iconSlider.classList.add('icon-slider')

    toggleButton.append(iconSlider)

    switchButton.append(
        soundLabel,
        toggleButton
    )

    topItems.append(
        gridSizeLine,
        pointsToWinLine,
        pointsToLoseLine,
        switchButton
    )

    function createLine(labelText, options, index) {
        const line = document.createElement('div')
        line.className = 'line'

        const label = document.createElement('label')
        label.textContent = labelText
        
        label.setAttribute('for', index)

        const select = document.createElement('select')
        select.name = 'select'
        select.id = index

        if (index === '1') {
            select.addEventListener('change', () => {
                const selectedOption = select.value
                setGridSize(selectedOption)
            })
        } else if (index === '2') {
            select.addEventListener('change', () => {
                const selectedOption = select.value
                setPointsToWin(selectedOption)
            })
        } else {
            select.addEventListener('change', () => {
                const selectedOption = select.value
                setPointsToLose(selectedOption)
            })
        }

        options.forEach(optionText => {
            const option = document.createElement('option')
            option.value = optionText
            option.textContent = optionText
            select.append(option)
        })

        line.append(
            label,
            select
        )
        return line
    }

    return topItems
}

