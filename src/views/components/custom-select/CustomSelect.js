'use strict';

export default {
    name: 'custom-select',

    inheritAttrs: false,

    props: {
        value: {
            type: [Number, String],
            required: false
        },

        label: {
            type: String,
            required: false
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

        empty: {
            type: String,
            required: false
        }
    },

    computed:{
        selected:{
            get() {
                if (this.value) {
                    return this.value;
                }

                if (this.empty) {
                    return '';
                }

                if (this.options.length) {
                    return this.options[0][this.optionValue];
                }
            },

            set(value) {
                this.$emit('input', value);
            }
        }
    },

    methods: {
        focus() {
            if (this.label) {
                this.$refs.inputSelectLabel.classList.add('input-select-label-primary--active');
            }
        },

        blur() {
            if (this.label) {
                this.$refs.inputSelectLabel.classList.remove('input-select-label-primary--active');
            }
        }
    }
};
