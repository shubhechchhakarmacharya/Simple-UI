import { dom, Dropdown, Tabs, Snackbar } from 'dom.js';

// create tooltip
const tooltip = new dom(document.querySelector('.tooltip'));
tooltip.init();

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const instance = new Dropdown(dropdown);
    instance.init();
});

const tabs = new Tabs(document.querySelector('.tabs'))
tabs.init();

const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector('button');
button.addEventListener('click', () => {
  snackbar.show('you clicked me :)');
});