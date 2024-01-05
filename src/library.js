function libraryComponent() {
    const main = document.createElement('main');

    main.appendChild(titleComponent());

    function titleComponent() {
        const div = document.createElement('div');
        const libraryTitle = document.createElement('h1');
        const reloadIcon = document.createElement('i');

        libraryTitle.textContent = 'Library';
        reloadIcon.classList.toggle('fa-solid');
        reloadIcon.classList.toggle('fa-rotate');

        div.appendChild(libraryTitle);
        div.appendChild(reloadIcon);

        return div;
    }

    return main;
}

export { libraryComponent };