function navbarComponent(page) {
    const nav = document.createElement('nav');
    const spacer = document.createElement('div');

    nav.appendChild(spacer);
    nav.appendChild(searchComponent());
    nav.appendChild(profileComponent());

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

    function profileComponent() {
        const div = document.createElement('div');
        const wishlist = document.createElement('p');
        const cart = document.createElement('p');
        const friendlist = document.createElement('div');
        const friendlistIcon = document.createElement('i');
        const friendlistCount = document.createElement('p');
        const profileName = document.createElement('p');

        wishlist.textContent = 'Wishlist';
        cart.textContent = 'Cart';
        friendlistIcon.classList.toggle('fa-solid');
        friendlistIcon.classList.toggle('fa-user-group');
        friendlistCount.textContent = '7';
        profileName.textContent = 'M';
        
        friendlist.appendChild(friendlistIcon);
        friendlist.appendChild(friendlistCount);

        div.appendChild(wishlist);
        div.appendChild(cart);
        div.appendChild(friendlist);
        div.appendChild(profileName);

        return div;
    }

    return nav;
}

export { navbarComponent };