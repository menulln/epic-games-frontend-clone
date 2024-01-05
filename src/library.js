function libraryComponent() {
    const main = document.createElement('main');

    main.appendChild(titleComponent());
    main.appendChild(categoriesComponent());
    main.appendChild(sortViewComponent());

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

    function sortViewComponent() {
        const div = document.createElement('div');
        const sortDiv = document.createElement('div');
        const viewDiv = document.createElement('div');
        const sortParagraph = document.createElement('p');
        const recentlyParagraph = document.createElement('p');
        const arrowIcon = document.createElement('i');
        const gridIcon = document.createElement('i');
        const listIcon = document.createElement('i');

        sortParagraph.textContent = 'Sort by:';
        recentlyParagraph.textContent = 'Recently Purchased';
        arrowIcon.classList.toggle('fa-solid');
        arrowIcon.classList.toggle('fa-chevron-down');
        gridIcon.classList.toggle('fa-solid');
        gridIcon.classList.toggle('fa-grip');
        listIcon.classList.toggle('fa-solid');
        listIcon.classList.toggle('fa-list-ul');

        sortDiv.appendChild(sortParagraph);
        sortDiv.appendChild(recentlyParagraph);
        sortDiv.appendChild(arrowIcon);

        viewDiv.appendChild(gridIcon);
        viewDiv.appendChild(listIcon);

        div.appendChild(sortDiv);
        div.appendChild(viewDiv);

        return div;
    }

    return main;
}

export { libraryComponent };