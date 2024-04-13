const cube = document.querySelector('.cube')
const line = document.querySelector('.line')
const lineCoord = line.getBoundingClientRect()
let x = 0
let y = 0
const step = 10

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

        setTimeout(() => {
            if (cubeCoord.top + 30 < lineCoord.top) {
                alert('Out of line')
            }
        }, 100)
        
    }

    if (e.code === 'ArrowDown') {
        y += step

        transform(cube, x, y)
    }
})