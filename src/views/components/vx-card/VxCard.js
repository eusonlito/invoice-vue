'use strict';

import _color from '@/assets/utils/color'

export default{
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
            tempHidden: false,
        }
    },

    computed: {
        hasHeader() {
            return this.hasAction || this.title || this.subtitle
        },

        hasAction() {
            return this.$slots.actions;
        },

        StyleItems() {
            return { maxHeight: this.maxHeight }
        },

        cardStyles() {
            let obj = { maxHeight: this.cardMaxHeight };

            if (!_color.isColor(this.cardBackground)) {
                obj.background = _color.getColor(this.cardBackground)
            }

            if (!_color.isColor(this.contentColor)) {
                obj.color = _color.getColor(this.contentColor)
            }

            return obj
        },

        cardClasses() {
            let str = '';

            // Add bg class
            if (_color.isColor(this.cardBackground)) {
                str += ` bg-${this.cardBackground}`
            }

            // add content color
            if (_color.isColor(this.contentColor)){
                str += ` text-${this.contentColor}`
            }

            return str.trim()
        },

        titleStyles() {
            return { color: _color.getColor(this.titleColor) }
        },

        titleClasses() {
            let str = '';

            // add content color
            if (_color.isColor(this.titleColor)) {
                str += ` text-${this.titleColor}`
            }

            return str.trim()
        },

        subtitleStyles() {
            let obj = {}

            if (!_color.isColor(this.subtitleColor)) {
                obj.color = _color.getColor(this.subtitleColor)
            }

            return obj
        },
        subtitleClasses() {
            let str = '';

            // add content color
            if (_color.isColor(this.subtitleColor)) {
                str += ` text-${this.subtitleColor}`
            }

            return str.trim()
        },
    }
}
