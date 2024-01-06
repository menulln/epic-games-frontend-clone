function logoComponent() {
    const logo = document.createElement('img');
    logo.classList.toggle('logo');
    logo.src = '../src/images/epic_logo.png'

    return logo;
}

export { logoComponent };