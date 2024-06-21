import { getGridSize, getPointsToWin, getPointsToLose } from '../../data/state-manager.js'

export function SettingsLineComponent() {
    
    const topItems = document.createElement('div')
    topItems.classList.add('top-items')

    const pointsToWin = getPointsToWin()
    const pointsToLose = getPointsToLose()
    const gridSize = getGridSize()

    const gridSizeLine = createLine('Grid size', ['4x4', '5x5', '6x6', '7x7', '8x8'], '01')
    const pointsToWinLine = createLine('Points to win', ['20 pts', '40 pts', '50 pts', '60 pts', '80 pts'], '02')
    const pointsToLoseLine = createLine('Points to lose', ['5 pts', '10 pts', '15 pts', '20 pts', '25 pts'], '03')

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

        options.forEach(optionText => {
            const option = document.createElement('option')
            if (index === '01') {
                option.value = optionText.slice(0,1)
            } else if (index === '02') {
                option.value = optionText.slice(0,2)
            } else if (index === '03') {
                option.value = optionText.slice(0,2).trim()
            }
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

