'use strict';

export default {
    name: 'navbar-horizontal-menu-item',
    props: {
        icon: { type: String, default: '' },
        iconSmall: { type: Boolean, default: false },
        iconPack: { type: String, default: 'material-icons' },
        href: { type: [String, null], default: '#' },
        to: { type: [String, Object, null], default: null },
        slug: { type: String, default: null },
        index: { type: [String, Number], default: null },
        featherIcon: { type: Boolean, default: true },
        target: { type: String, default: '_self' },
        isDisabled: { type: Boolean, default: false },
    },
    computed: {
        iconClasses() {
            return this.iconSmall ? 'w-3 h-3 mr-3' : 'w-5 h-5 mr-3'
        },

        activeLink() {
            return (this.to.name === this.$route.name)
                || (this.$route.meta.parent && (this.$route.meta.parent === this.slug));
        }
    }
}
