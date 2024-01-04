import { sidebarComponent } from './sidebar';
import { navbarComponent  } from './navbar';

const content = document.querySelector('#content');

content.appendChild(sidebarComponent());
content.appendChild(navbarComponent('store'));