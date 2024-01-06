import { logoComponent } from './logo';
import { sidebarComponent } from './sidebar';
import { navbarComponent  } from './navbar';
import { libraryComponent } from './library';
import './global.css';
import './layout.css';

const content = document.querySelector('#content');

content.appendChild(logoComponent());
content.appendChild(sidebarComponent());
content.appendChild(navbarComponent('store'));
content.appendChild(libraryComponent());