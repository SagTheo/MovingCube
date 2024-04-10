const cube = document.querySelector('.cube')
let right = 0
let left = 0
let tops = 0
let bottom = 0

window.addEventListener('keydown', e => {
    if (e.code === 'ArrowRight') {
        right += 10

        cube.style.transform = `translate(${right}px)`
    }

    if (e.code === 'ArrowLeft') {
        left += 10

        cube.style.transform = `translate(-${left}px)`
    }

    if (e.code === 'ArrowUp') {
        tops += 10

        cube.style.transform = `translate(0, -${tops}px)`
    }

    if (e.code === 'ArrowDown') {
        bottom += 10

        cube.style.transform = `translate(0, ${bottom}px)`
    }
})