import { sidebarComponent } from './sidebar';
import { navbarComponent  } from './navbar';
import { libraryComponent } from './library';
import './global.css';

const content = document.querySelector('#content');

content.appendChild(sidebarComponent());
content.appendChild(navbarComponent('store'));
content.appendChild(libraryComponent());