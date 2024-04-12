const cube = document.querySelector('.cube')
let x = 0
let y = 0

window.addEventListener('keydown', e => {
    if (e.code === 'ArrowRight') {
        x += 10

        cube.style.transform = `translate(${x}px, ${y}px)`
    }

    if (e.code === 'ArrowLeft') {
        x -= 10

        cube.style.transform = `translate(${x}px, ${y}px)`
    }

    if (e.code === 'ArrowUp') {
        y -= 10

        // needs more work
        cube.style.transform = `translate(${x}px, ${y}px)`
    }

    if (e.code === 'ArrowDown') {
        y += 10

        // needs more work
        cube.style.transform = `translate(${x}px, ${y}px)`
    }
})