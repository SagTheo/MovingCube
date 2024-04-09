const cube = document.querySelector('.cube')

window.addEventListener('keydown', e => {
    if (e.code === 'ArrowRight') {
        cube.style.transform = 'translate(10px)'
    }

    if (e.code === 'ArrowLeft') {
        cube.style.transform = 'translate(-10px)'
    }

    if (e.code === 'ArrowUp') {
        cube.style.transform = 'translate(0, -10px)'
    }

    if (e.code === 'ArrowDown') {
        cube.style.transform = 'translate(0, 10px)'
    }
})