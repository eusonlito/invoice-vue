'use strict';

import serie from '@/store/invoice-serie';

export default {
    name: 'time-selector-dropdown',

    props: {
        options: {
            type: Array,
            required: true
        },

        selected: {
            type: Function,
            required: true
        }
    },

    data() {
        return {
            series: [],
            serie: {},
            option: {},
        }
    },

    methods: {
        load() {
            this.option = this.options[0];

            serie.dispatch('list').then(({ data }) => {
                this.series = data;
                this.serie = data.filter(item => item.default)[0] || data[0];

                this.selected(this.serie, this.option);
            });
        },

        change(serie, option) {
            this.serie = serie;
            this.option = option;

            this.selected(serie, option);
        }
    },

    created() {
        this.load();
    }
}
