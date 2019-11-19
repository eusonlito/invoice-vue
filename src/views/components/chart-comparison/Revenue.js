'use strict';

import helper from './Helper';
import ChartComparison from './Index.vue';

export default {
    name: 'chart-comparison-revenue',

    components: { ChartComparison },

    props: {
        invoices: {
            type: Array,
            required: true
        },

        series: {
            type: Array,
            required: true
        },
    },

    data() {
        return {
            invoiceSerie: null,

            x: [
                { name: 'Este Año', data: new Map(), color: '#2e9e3c', total: 0 },
                { name: 'Año anterior', data: new Map(), color: '#d06b13', total: 0 }
            ],

            y: []
        };
    },

    methods: {
        load() {
            this.invoiceSerie = this.series.filter(item => item.default)[0];

            if (this.invoiceSerie) {
                this.fillX();
            }
        },

        fillX() {
            const date = new Date(),
                dateString = helper.dateString();

            const lastYearStart = new Date((date.getFullYear() - 2) + dateString);
            const lastYearEnd = new Date((date.getFullYear() - 1) + dateString);

            const x = [...this.x];
            const y = helper.fillY(lastYearEnd, x);

            this.invoices.forEach(item => {
                if ((item.serie.id !== this.invoiceSerie.id) || (item.date_key < lastYearStart)) {
                    return;
                }

                const index = (item.date_key < lastYearEnd) ? 1 : 0,
                    value = x[index].data.get(item.date_key_month) + item.amount_total;

                x[index].data.set(item.date_key_month, value);
                x[index].total += item.amount_total;
            });

            x.forEach(item => item.data = Array.from(item.data.values()));

            this.x = x;
            this.y = y;
        }
    },

    created() {
        this.load();
    }
}