'use strict';

import NavbarHorizontalMenuItem from './NavbarHorizontalMenuItem.vue'

export default {
    name: 'navbar-horizontal-menu-group',
    props: {
        openHover: { type: Boolean, default: true },
        open: { type: Boolean, default: false },
        group: { type: Object },
        groupIndex: { type: Number },
        bottom: { type: Boolean, default: false }
    },
    components: {
        NavbarHorizontalMenuItem
    },
    data: () => ({
        openItems: false,
        hovered: false,
        dropLeft: false,
    }),
    computed: {
        iconClasses() {
            let classes = 'mr-3 '
            classes += this.groupIndex % 1 != 0 ? 'w-3 h-3' : 'w-5 h-5'
            return classes
        },
        styleItems() {
            let style = {}
            if (this.bottom) {
                style.top = '100%'
                style.left = '0'
            } else {
                style.top = '12px'
                style.left = '100%'
            }

            if (this.dropLeft) {
                style.left = null
                style.right = '100%'
            }
            return style
        },
        itemIcon() {
            return 'CircleIcon'
        }
    },
    watch: {
        hovered(val) {
            this.$nextTick(() => {
                if (!val) {
                    return this.dropLeft = false
                }

                let dd = this.$refs.childDropdown

                if (((window.innerHeight - dd.getBoundingClientRect().top) - dd.getBoundingClientRect().height - 28) < 1) {
                    const maxHeight = (window.innerHeight - dd.getBoundingClientRect().top - 70)
                    dd.style.maxHeight = `${maxHeight}px`
                    dd.style.overflowY = 'auto'
                    dd.style.overflowX = 'hidden'
                }

                if (dd.getBoundingClientRect().left + dd.offsetWidth - (window.innerWidth - 16) >= 0 || this.$parent.dropLeft) {
                    this.dropLeft = true
                }
            })
        }
    },
    methods: {
        mouseover() {
            this.hovered = true

            if (this.openHover) {
                this.showChildren()
            }
        },
        mouseout() {
            this.hovered = false

            if (this.openHover) {
                this.showChildren(false)
            }
        },
        showChildren(val = true) {
            this.openItems = val
        }
    },
}
