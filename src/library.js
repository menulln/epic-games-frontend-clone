function libraryComponent() {
    const main = document.createElement('main');

    main.appendChild(titleComponent());
    main.appendChild(categoriesComponent());

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

    function categoriesComponent() {
        const div = document.createElement('div');
        const allParagraph = document.createElement('p');
        const favoritesParagraph = document.createElement('p');
        const plusParagraph = document.createElement('p');

        allParagraph.textContent = 'All';
        favoritesParagraph.textContent = 'Favorites';
        plusParagraph.textContent = '+';

        div.appendChild(allParagraph);
        div.appendChild(favoritesParagraph);
        div.appendChild(plusParagraph);

        return div;
    }

    return main;
}

export { libraryComponent };