'use strict';

import view from '@/store/view'

export default {
    watch: {},

    methods: {
        handleWindowResize() {
            view.commit('UPDATE_WINDOW_WIDTH', window.innerWidth)
        },
        handleScroll() {
            view.commit('UPDATE_WINDOW_SCROLL_Y', window.scrollY)
        }
    },

    mounted() {
        view.commit('UPDATE_WINDOW_WIDTH', window.innerWidth)
    },

    async created() {
        window.addEventListener('resize', this.handleWindowResize)
        window.addEventListener('scroll', this.handleScroll)
    },

    destroyed() {
        window.removeEventListener('resize', this.handleWindowResize)
        window.removeEventListener('scroll', this.handleScroll)
    },
}
