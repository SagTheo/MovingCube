const cube = document.querySelector('.cube')
const line = document.querySelector('.line')
const counter = document.querySelector('#counter')
const reset = document.querySelector('.reset')
const lineCoord = line.getBoundingClientRect()
let x = 0
let y = 0
const step = 8
let counterOutOfLine = 0

const transform = (cube, x, y) => {
    cube.style.transform = `translate(${x}px, ${y}px)`
}

window.addEventListener('keydown', e => {
    if (e.code === 'ArrowRight') {
        x += step

        transform(cube, x, y)
    }

    if (e.code === 'ArrowLeft') {
        x -= step

        transform(cube, x, y)
    }

    if (e.code === 'ArrowUp') {
        y -= step

        transform(cube, x, y)

        const cubeCoord = cube.getBoundingClientRect()

        console.log(cubeCoord.bottom)
        console.log(lineCoord.top)

        setTimeout(() => {
            if (cubeCoord.bottom < lineCoord.top) {
                counterOutOfLine++
                counter.innerHTML = counterOutOfLine
            } 
        }, 100)
    }

    if (e.code === 'ArrowDown') {
        y += step

        transform(cube, x, y)

        const cubeCoord = cube.getBoundingClientRect()

        setTimeout(() => {  
            if (cubeCoord.top > lineCoord.top) {
                counterOutOfLine++
                counter.innerHTML = counterOutOfLine
            } 
        }, 100)
    }
})

reset.addEventListener('click', () => {
    counterOutOfLine = 0
    counter.innerHTML = counterOutOfLine

    cube.style.transform = null
    x = 0
    y = 0
})