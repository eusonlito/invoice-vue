'use strict';

export default {
    name: 'custom-select',

    inheritAttrs: false,

    props: {
        label: {
            type: String,
            required: true
        },

        options: {
            type: Array,
            required: true
        },

        optionValue: {
            type: String,
            required: true
        },

        optionTitle: {
            type: String,
            required: true
        },

        selected: {
            type: [Number, String],
            required: false
        },

        empty: {
            type: String,
            required: false
        }
    },

    methods: {
        focus() {
            this.$refs.inputSelectLabel.classList.add('input-select-label-primary--active');
        },

        blur() {
            this.$refs.inputSelectLabel.classList.remove('input-select-label-primary--active');
        }
    }
};
