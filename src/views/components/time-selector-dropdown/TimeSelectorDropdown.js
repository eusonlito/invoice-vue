'use strict';

export default {
    name: 'time-selector-dropdown',

    props: {
        options: {
          type: Array,
          required: true
        },

        current: Object,

        selected: Function
    }
}
