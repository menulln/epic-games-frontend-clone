function sidebarComponent() {
    const nav = document.createElement('nav');

    nav.appendChild(logoComponent());
    nav.appendChild(menuComponent());

    function logoComponent() {
        const logoElement = document.createElement('img');
        logoElement.src = '../src/images/epic_logo.png';
        
        return logoElement;
    }

    function menuComponent() {
        const menuElement = document.createElement('article');
        const menuList = document.createElement('ul');
        
        menuList.appendChild(createMenuItem('fa-tag', 'Store'));
        menuList.appendChild(createMenuItem('fa-folder', 'Library'));
        menuList.appendChild(createMenuItem('fa-gamepad', 'Unreal Engine'));

        menuElement.appendChild(menuList);

        function createMenuItem(iconClass, title) {
            const menuItem = document.createElement('li');
            const itemIcon = document.createElement('i');
            const itemTitle = document.createElement('p');

            itemIcon.classList.toggle('fa-solid');
            itemIcon.classList.toggle(iconClass);

            itemTitle.textContent = title;

            menuItem.appendChild(itemIcon);
            menuItem.appendChild(itemTitle);

            return menuItem;
        }
        return menuElement;
    }

    return nav;
}

export { sidebarComponent };