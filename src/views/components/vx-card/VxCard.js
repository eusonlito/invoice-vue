'use strict';

import _color from '@/assets/utils/color';

export default {
    name: 'vx-card',

    props: {
        title: String,
        subtitle: String,
        noShadow: {
            default: false,
            type: Boolean,
        },
        noRadius: {
            default: false,
            type: Boolean,
        },
        cardBorder: {
            default: false,
            type: Boolean,
        },
        headerBackground: {
            default: '',
            type: String
        },
        toggleAction: {
            default: false,
            type: [Function, Boolean]
        },
        removeAction: {
            default: false,
            type: [Function, Boolean]
        },
        cardBackground: {
            default: '',
            type: String
        },
        contentColor: {
            default: '',
            type: String
        },
        titleColor: {
            default: '',
            type: String
        },
        subtitleColor: {
            default: '#b8c2cc',
            type: String
        }
    },

    data() {
        return {
            maxHeight: null,
            cardMaxHeight: null,
            codeContainerMaxHeight: '0px',
            isContentCollapsed: !!this.toggleAction,
            tempHidden: false,
        };
    },

    computed: {
        hasHeader() {
            return this.hasAction || this.title || this.subtitle;
        },

        hasAction() {
            return this.$slots.actions || this.toggleAction || this.removeAction;
        },

        StyleItems() {
            return { maxHeight: this.maxHeight };
        },

        cardStyles() {
            let obj = { maxHeight: this.cardMaxHeight };

            if (!_color.isColor(this.cardBackground)) {
                obj.background = _color.getColor(this.cardBackground);
            }

            if (!_color.isColor(this.contentColor)) {
                obj.color = _color.getColor(this.contentColor);
            }

            return obj;
        },

        cardClasses() {
            let str = '';

            // Add bg class
            if (_color.isColor(this.cardBackground)) {
                str += ` bg-${this.cardBackground}`;
            }

            // add content color
            if (_color.isColor(this.contentColor)) {
                str += ` text-${this.contentColor}`;
            }

            return str.trim();
        },

        titleStyles() {
            return { color: _color.getColor(this.titleColor) };
        },

        titleClasses() {
            let str = '';

            if (_color.isColor(this.titleColor)) {
                str += ` text-${this.titleColor}`;
            }

            return str.trim();
        },

        subtitleStyles() {
            let obj = {};

            if (!_color.isColor(this.subtitleColor)) {
                obj.color = _color.getColor(this.subtitleColor);
            }

            return obj;
        },

        subtitleClasses() {
            let str = '';

            // add content color
            if (_color.isColor(this.subtitleColor)) {
                str += ` text-${this.subtitleColor}`;
            }

            return str.trim();
        },
    },

    methods: {
        toggleClick() {
            if (typeof this.toggleAction === 'function') {
                return this.toggleAction();
            }

            this.maxHeight = this.$refs.content.scrollHeight + 'px';

            setTimeout(() => {
                this.isContentCollapsed = !this.isContentCollapsed;
                this.maxHeight = this.isContentCollapsed ? '1.5rem' : 'none';
            }, this.isContentCollapsed ? 300 : 50);
        },

        removeClick() {
            if (typeof this.removeAction === 'function') {
                return this.removeAction();
            }

            this.cardMaxHeight = this.$refs.card.scrollHeight + 'px';
            this.$el.style.overflow = 'hidden';

            setTimeout(() => this.cardMaxHeight = '0px', 50);

            this.$emit('remove');
        },
    }
}
