function libraryComponent() {
    const main = document.createElement('main');

    main.appendChild(titleComponent());
    main.appendChild(categoriesComponent());
    main.appendChild(sortViewComponent());
    main.appendChild(filtersTitleComponent());
    main.appendChild(libraryItemsComponent());

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

    function filtersTitleComponent() {
        const filtersParagraph = document.createElement('p');

        filtersParagraph.textContent = 'Filters';

        return filtersParagraph;
    }

    function libraryItemsComponent() {
        const div = document.createElement('div');

        div.appendChild(createLibraryItem('ac', 'Assassin\'s Creed', true));
        div.appendChild(createLibraryItem('aw', 'Alan Wake II', false));
        div.appendChild(createLibraryItem('cp', 'Cyberpunk', true));
        div.appendChild(createLibraryItem('crysis', 'Crysis 3', true));
        div.appendChild(createLibraryItem('dead', 'Dead Island II', true));
        div.appendChild(createLibraryItem('fn', 'Fortnite', true));
        div.appendChild(createLibraryItem('fp', 'Frostpunk', false));
        div.appendChild(createLibraryItem('genshin', 'Genshin Impact', true));
        div.appendChild(createLibraryItem('gt', 'Galaxy Trek', false));
        div.appendChild(createLibraryItem('gta', 'Grand Theft Auto', true));
        div.appendChild(createLibraryItem('honkai', 'Honkai: Star Rail', false));
        div.appendChild(createLibraryItem('kena', 'Kena: Bridge of Spirits', false));
        div.appendChild(createLibraryItem('lotr', 'Lord of the Rings', false));
        div.appendChild(createLibraryItem('rl', 'Rocket League', true));
        div.appendChild(createLibraryItem('se', 'Sniper Elite 5', false));
        div.appendChild(createLibraryItem('swbf', 'Star Wars: Battlefront II', true));
        div.appendChild(createLibraryItem('swjs', 'Star Wars: Jedi Survivor', false));
        div.appendChild(createLibraryItem('thps', 'Tony Hawk\'s Pro Skater', true));
        div.appendChild(createLibraryItem('twau', 'The Wolf Amon Us II', false));
        div.appendChild(createLibraryItem('valo', 'Valorant', true));

        function createLibraryItem(imgName, title, isInstalled) {
            const item = document.createElement('div');
            const img = document.createElement('img');
            const titleDiv = document.createElement('div');
            const titleParagraph = document.createElement('p');
            const ellipsisIcon = document.createElement('i');
            const launchDiv = document.createElement('div');
            const launchIcon = document.createElement('i');
            const launchParagraph = document.createElement('p');

            img.src = `../src/images/games/portrait_${imgName}.png`;
            titleParagraph.textContent = title;
            ellipsisIcon.classList.toggle('fa-solid');
            ellipsisIcon.classList.toggle('fa-ellipsis');
            launchIcon.classList.toggle('fa-solid');
            
            if (isInstalled) {
                launchIcon.classList.toggle('fa-play');
                launchParagraph.textContent = 'Launch';
            } else {
                launchIcon.classList.toggle('fa-download');
                launchParagraph.textContent = 'Install';
            }

            titleDiv.appendChild(titleParagraph);
            titleDiv.appendChild(ellipsisIcon);
            launchDiv.appendChild(launchIcon);
            launchDiv.appendChild(launchParagraph);

            item.appendChild(img);
            item.appendChild(titleDiv);
            item.appendChild(launchDiv);

            return item;
        }

        return div;
    }

    return main;
}

export { libraryComponent };