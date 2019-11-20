import theme from '@/services/theme'
import view from '@/store/view'
import MainFooter from '@/views/components/main-footer/MainFooter.vue'
import NavbarHorizontal from '@/views/components/navbar-horizontal/NavbarHorizontal.vue'

export default {
    components: { NavbarHorizontal, MainFooter },

    data() {
        return {
            hideScrollToTop: theme.config.hideScrollToTop,
            navbarColor: theme.config.navbarColor || '#fff',
            navbarType: theme.config.navbarType || 'sticky',
            routerTransition: theme.config.routerTransition || 'none',
            routeTitle: this.$route.meta.pageTitle
        }
    },

    watch: {
        '$route'() {
            this.routeTitle = this.$route.meta.pageTitle
        }
    },

    computed: {
        bodyOverlay() {
            return false
        },

        contentAreaClass() {
            if (this.mainLayoutType !== 'vertical') {
                return 'content-area-full'
            }

            if (this.verticalNavMenuWidth === 'default') {
                return 'content-area-reduced'
            }

            if (this.verticalNavMenuWidth === 'reduced') {
                return 'content-area-lg'
            }
        },
        isAppPage() {
            return this.$route.path.includes('/apps/') ? true : false
        },

        layoutTypeClass() {
            return `main-${this.mainLayoutType}`
        },

        mainLayoutType() {
            return view.state.mainLayoutType
        },

        navbarClasses() {
            return {
                'navbar-hidden': this.navbarType === 'hidden',
                'navbar-sticky': this.navbarType === 'sticky',
                'navbar-static': this.navbarType === 'static',
                'navbar-floating': this.navbarType === 'floating',
            }
        },

        verticalNavMenuWidth() {
            return view.state.verticalNavMenuWidth
        },

        windowWidth() {
            return view.state.windowWidth
        }
    },

    methods: {
        changeRouteTitle(title) {
            this.routeTitle = title
        },

        updateNavbar(val) {
            if (val === 'static') {
                this.updateNavbarColor('#fff')
            }

            this.navbarType = val
        },

        updateRouterTransition(val) {
            this.routerTransition = val
        },

        toggleHideScrollToTop(val) {
            this.hideScrollToTop = val
        }
    }
}
