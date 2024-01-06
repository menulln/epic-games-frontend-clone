import './logo.css';

function logoComponent() {
    const div = document.createElement('div');
    const logo = document.createElement('img');
    
    logo.src = '../src/images/epic_logo.png'
    
    div.classList.toggle('logo');
    div.appendChild(logo);

    return div;
}

export { logoComponent };