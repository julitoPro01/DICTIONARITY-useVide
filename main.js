import { select_style_none, select_style_block } from './app';
import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'

const all_buttons = document.querySelector('#body_foot');
const of_all_buttons = document.querySelector('#containd_foot');


const items = name => document.querySelector('#containd_items').getElementsByTagName(name);


const globa_acciones = ({ target }, name) => {
    if (!target.matches('button')) return;
    const dataName = target.dataset.id;
    switch (name) {
        case 'all': {
            select_style_block(dataName, items, of_all_buttons)
        }; break;
        case 'of_all': {
            if (dataName === 'cerrar') select_style_none(items, of_all_buttons)
        }; break;
    }

}

(function () {
    all_buttons.addEventListener('click', (e) => globa_acciones(e, 'all'))
    of_all_buttons.addEventListener('click', (e) => globa_acciones(e, 'of_all'))
}());


