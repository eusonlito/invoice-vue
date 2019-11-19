'use strict';

import helper from './Helper';
import ChartComparison from './Index.vue';

export default {
    name: 'chart-comparison-status',

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
                { name: 'Facturado', data: new Map(), color: '#4975de', total: 0 },
                { name: 'Cobrado', data: new Map(), color: '#009688', total: 0 },
                { name: 'Pendiente', data: new Map(), color: '#cc3e3e', total: 0 }
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
                dateString = helper.dateString(),
                startAt = new Date((date.getFullYear() - 1) + dateString);

            const x = [...this.x];
            const y = helper.fillY(startAt, x, true);

            let amountTotal = 0, amountPaid = 0, amountDue = 0,
                months = [{}, {}, {}];

            this.invoices.forEach(item => {
                if ((item.serie.id !== this.invoiceSerie.id) || (item.date_key < startAt)) {
                    return;
                }

                amountTotal += item.amount_total;
                amountPaid += item.amount_paid;
                amountDue += item.amount_due;

                months[0][item.date_key_year] = amountTotal;
                months[1][item.date_key_year] = amountPaid;
                months[2][item.date_key_year] = amountDue;
            });

            let previous = [];

            y.forEach(each => {
                if (!months[0][each]) {
                    months[0][each] = previous[0] || 0;
                    months[1][each] = previous[1] || 0;
                    months[2][each] = previous[2] || 0;
                }

                x[0].data.set(each, months[0][each]);
                x[1].data.set(each, months[1][each]);
                x[2].data.set(each, months[2][each]);

                x[0].total = months[0][each];
                x[1].total = months[1][each];
                x[2].total = months[2][each];

                previous = [months[0][each], months[1][each], months[2][each]];
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