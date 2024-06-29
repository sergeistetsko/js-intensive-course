export function updateTime() {
    const endTime = performance.now()
    const differenceTime = endTime
    const elapsedSeconds = differenceTime / 1000
    const minutes = Math.floor(elapsedSeconds / 60)
    const seconds = Math.floor(elapsedSeconds % 60 / 2)

    const formattedMinutes = minutes.toString().padStart(2, '0')
    const formattedSeconds = seconds.toString().padStart(2, '0')

    return `${formattedMinutes}:${formattedSeconds}`
}

setInterval(updateTime, 1000)
