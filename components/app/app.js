/**
 * Created by dimFora on 09.10.2016.
 */
(function () {
    'use strict';

    // import
    let Menu = window.Menu;

    let menu = new Menu({
        el: document.querySelector('.js-menu')
    });

    let state = document.querySelector('.js-state');
    document.body.addEventListener('click', event => {
        state.innerHTML = menu.getData().join(', ');
    }); /**/

})();
