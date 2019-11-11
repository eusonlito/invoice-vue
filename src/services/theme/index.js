'use strict';

export default {
    colors: {
        primary: '#7367F0',
        success: '#5C952C',
        danger: '#EA5455',
        warning: '#FF9F43',
        dark: '#1E1E1E',
    },

    config: {
        hideScrollToTop: true, // options[Boolean] : true, false(default)
        mainLayoutType: 'horizontal', // options[String]  : vertical(default) / horizontal
        navbarColor: '#FFF', // options[String]  : HEX color / rgb / rgba / Valid HTML Color name - (default: #fff)
        navbarType: 'sticky', // options[String]  : floating(default) / static / sticky / hidden
        routerTransition: 'none', // options[String]  : zoom-fade / slide-fade / fade-bottom / fade / zoom-out / none(default)
        theme: 'light', // options[String]  : 'light'(default), 'dark', 'semi-dark'
    }
}
