'use strict';

export default {
    name: 'custom-select',

    inheritAttrs: false,

    props: {
        value: {
            type: [Number, String, Boolean],
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
        selected: {
            get() {
                let value;

                if (this.value) {
                    value = this.value;
                } else if (this.empty) {
                    value = '';
                } else if (this.options.length) {
                    value = this.options[0][this.optionValue];
                }

                if (value !== this.value) {
                    this.$emit('input', value);
                }

                return value;
            },

            set(value) {
                this.$emit('input', value);
            }
        }
    },

    methods: {
        focus() {
            if (this.label && this.$refs.inputSelectLabel) {
                this.$refs.inputSelectLabel.classList.add('input-select-label-primary--active');
            }
        },

        blur() {
            if (this.label && this.$refs.inputSelectLabel) {
                this.$refs.inputSelectLabel.classList.remove('input-select-label-primary--active');
            }
        }
    }
};
