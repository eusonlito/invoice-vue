'use strict';

import view from '@/store/view';
import NavbarHorizontalMenuGroup from './NavbarHorizontalMenuGroup.vue';
import NavbarHorizontalMenuItem from './NavbarHorizontalMenuItem.vue';

export default {
    props: {
        navMenuItems: { type: Array, required: true },
    },
    components: {
        NavbarHorizontalMenuGroup,
        NavbarHorizontalMenuItem,
    },
    computed: {
        navbarColor() {
            return view.state.theme;
        }
    }
}
