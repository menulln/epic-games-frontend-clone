import './sidebar.css';

function sidebarComponent() {
    const nav = document.createElement('nav');
    
    nav.classList.toggle('sidebar');

    nav.appendChild(menuComponent());
    nav.appendChild(launchComponent());

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

            menuItem.classList.toggle('menu-item');

            itemIcon.classList.toggle('fa-solid');
            itemIcon.classList.toggle(iconClass);

            itemTitle.textContent = title;

            menuItem.appendChild(itemIcon);
            menuItem.appendChild(itemTitle);

            return menuItem;
        }
        return menuElement;
    }

    function launchComponent() {
        const launchElement = document.createElement('article');
        const launchList = document.createElement('ul');
        const launchTitle = document.createElement('h6');

        launchTitle.textContent = 'Quick Launch';
        
        launchList.appendChild(createLaunchItem('gta', 'Grand Theft Auto'));
        launchList.appendChild(createLaunchItem('fn', 'Fortnite'));
        launchList.appendChild(createLaunchItem('thps', 'Tony Hawk'));
        launchList.appendChild(createLaunchItem('valo', 'Valorant'));

        launchElement.appendChild(launchTitle);
        launchElement.appendChild(launchList);

        function createLaunchItem(imgName, title) {
            const launchItem = document.createElement('li');
            const itemImg = document.createElement('img');
            const itemTitle = document.createElement('p');

            itemImg.src = `../src/images/games/portrait_${imgName}.png`;
            itemTitle.textContent = title;
            
            launchItem.appendChild(itemImg);
            launchItem.appendChild(itemTitle);

            return launchItem;
        }
        return launchElement;
    }
    
    return nav;
}

export { sidebarComponent };