'use strict';

import NavbarHorizontalMenu from '@/views/components/navbar-horizontal-menu/NavbarHorizontalMenu.vue';
import NavbarMenuItem from '@/views/components/navbar-menu-item/NavbarMenuItem';

import view from '@/store/view';
import user from '@/store/user';

export default {
    name: 'navbar-horizontal',

    props: {
        logo: { type: String },

        navbarType: {
            type: String,
            required: true
        }
    },

    components: { NavbarHorizontalMenu },

    data() {
        return { navMenuItems: NavbarMenuItem };
    },

    computed: {
        navbarColor() {
            let color = '#fff';

            if (this.navbarType === 'sticky') {
                color = '#f7f7f7';
            } else if ((this.navbarType === 'static') && (this.scrollY < 50)) {
                color = '#f7f7f7';
            }

            return color;
        },

        navbarStyle() {
            let style = {};

            if (this.navbarType === 'static') {
                style.transition = 'all .25s ease-in-out';
            }

            return style;
        },

        navbarClasses() {
            if ((this.scrollY > 5) && (this.navbarType === 'static')) {
                return null;
            }

            return 'd-theme-dark-light-bg shadow-none';
        },

        scrollY() {
            return view.state.scrollY;
        },

        windowWidth() {
            return view.state.windowWidth;
        },

        user() {
            return user.state.user;
        }
    },

    methods: {
        logout() {
            user.dispatch('logout').then(() => {
                this.$router.push({ name: 'user-auth' });
            });
        },
    },

    directives: {
        'click-outside': {
            bind: function(el, binding) {
                const bubble = binding.modifiers.bubble;

                const handler = (e) => {
                    if (bubble || (!el.contains(e.target) && el !== e.target)) {
                        binding.value(e);
                    }
                }

                el.__vueClickOutside__ = handler;

                document.addEventListener('click', handler);
            },

            unbind: function(el) {
                document.removeEventListener('click', el.__vueClickOutside__);
                el.__vueClickOutside__ = null;
            }
        }
    }
}
