function navbarComponent(page) {
    const nav = document.createElement('nav');
    const spacer = document.createElement('div');

    nav.appendChild(spacer);
    nav.appendChild(searchComponent());

    function searchComponent() {
        const div = document.createElement('div');
        const arrowIcon = document.createElement('i');
        const searchBar = document.createElement('input');
        const discover = document.createElement('p');
        const browse = document.createElement('p');
        const news = document.createElement('p');

        arrowIcon.classList.toggle('fa-solid');
        arrowIcon.classList.toggle('fa-chevron-left');
        searchBar.type = 'text';
        discover.textContent = 'Discover';
        browse.textContent = 'Browse';
        news.textContent = 'News';
        
        div.appendChild(arrowIcon);
        div.appendChild(searchBar);

        if (page === 'store') {
            div.appendChild(discover);
            div.appendChild(browse);
            div.appendChild(news);
        }
        
        return div;
    }

    return nav;
}

export { navbarComponent };