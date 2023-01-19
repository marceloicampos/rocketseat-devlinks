function darkMode() {
    const element = document.getElementById('dark')

    // element.classList.toggle('light')

    if (element.classList.contains('light')) {
        element.classList.remove('light')
    } else {
        element.classList.add('light')
    }

    const image = document.getElementById('avatar')
    if (element.classList.contains('light')) {
        image.src = './assets/avatar-dark.png'
    } else {
        image.src = './assets/avatar.png'
    }

    // if (element.className == 'hydrated light') {
    //     image.setAttribute('src', './assets/avatar-dark.png')
    // } else if (element.className != 'hydrated light') {
    //     image.setAttribute('src', './assets/avatar-dark.png')
    // }
}
